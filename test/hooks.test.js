import chai from 'chai'
import chailint from 'chai-lint'
import path, { dirname } from 'path'
import fsStore from 'fs-blob-store'
import fs from 'fs'
import { hooks as pluginHooks } from '../lib/index.js'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const { util, expect } = chai

describe('krawler:hooks:main', () => {
  const inputStore = fsStore({ path: path.join(__dirname, 'data') })
  const outputStore = fsStore({ path: path.join(__dirname, 'output') })

  before(async () => {
    chailint(chai, util)
  })

  it('registers custom hook', async () => {
    const testHook = { type: 'before', method: 'create', data: {}, result: {} }
    pluginHooks.registerHook('custom', (options) => (hook) => {
      const item = (hook.type === 'before' ? hook.data : hook.result)
      item.n = options.parameter
      return hook
    })
    let hooks = {
      before: {
        custom: { parameter: 1 }
      },
      after: {
        custom: { parameter: 2 }
      }
    }
    hooks = pluginHooks.activateHooks(hooks)
    // Check the right hooks have been added
    expect(hooks.before.create.length).to.equal(1)
    expect(typeof hooks.before.create[0]).to.equal('function')
    await hooks.before.create[0](testHook)
    expect(testHook.data.n).to.equal(1)
    expect(hooks.after.create.length).to.equal(1)
    expect(typeof hooks.after.create[0]).to.equal('function')
    testHook.type = 'after'
    await hooks.after.create[0](testHook)
    expect(testHook.result.n).to.equal(2)
  })

  it('manages auth on requests', () => {
    const authHook = {
      type: 'before',
      data: {
        options: {
          auth: {
            user: 'toto',
            password: 'titi'
          }
        }
      }
    }

    pluginHooks.basicAuth({ type: 'Proxy-Authorization' })(authHook)
    expect(authHook.data.options.headers['Proxy-Authorization']).toExist()
    expect(authHook.data.options.headers['Proxy-Authorization'].startsWith('Basic ')).beTrue()
  })

  function checkJson (hook) {
    // We know we have a max value at 73.44 in this file
    expect(hook.result.data).toExist()
    let maxPixel, maxIndex
    let index = 0
    hook.result.data.forEach(pixel => {
      if (pixel.value > 73) {
        maxPixel = pixel
        maxIndex = index
      }
      index++
    })
    expect(maxPixel).toExist()
    // This point [139.736316,35.630105] should be in pixel
    expect(maxPixel.bbox[0] < 139.736316).to.beTrue()
    expect(maxPixel.bbox[2] > 139.736316).to.beTrue()
    expect(maxPixel.bbox[1] < 35.630105).to.beTrue()
    expect(maxPixel.bbox[3] > 35.630105).to.beTrue()
    // It is located at [96, 16]
    expect(Math.floor(maxIndex / 300)).to.equal(16)
    expect(maxIndex % 300).to.equal(96)
  }

  const geotiffHook = {
    type: 'after',
    data: {
      id: 'RJTT-30-18000-2-1.tif'
    },
    result: {
      id: 'RJTT-30-18000-2-1.tif'
    },
    params: { store: inputStore }
  }

  it('converts GeoTiff to JSON', () => {
    return pluginHooks.readGeoTiff({
      fields: ['bbox', 'value']
    })(geotiffHook)
      .then(hook => {
        checkJson(hook)
      })
  })
  // Let enough time to proceed
    .timeout(5000)

  it('computes statistics on JSON', () => {
    return pluginHooks.computeStatistics({
      min: true, max: true, dataPath: 'result.data'
    })(geotiffHook)
      .then(hook => {
      // We know we have a max value at 73.44 in this file
        expect(hook.result.min).toExist()
        expect(hook.result.max).toExist()
        expect(hook.result.min.toFixed(2)).to.equal('-32.00')
        expect(hook.result.max.toFixed(2)).to.equal('73.44')
        // Cleanup for next test
        delete hook.result.min
        delete hook.result.max
      })
  })
  // Let enough time to proceed
    .timeout(5000)

  it('computes statistics on GeoTiff', () => {
    return pluginHooks.computeStatistics({
      min: true, max: true
    })(geotiffHook)
      .then(hook => {
      // We know we have a max value at 73.44 in this file
        expect(hook.result.min).toExist()
        expect(hook.result.max).toExist()
        expect(hook.result.min.toFixed(2)).to.equal('-32.00')
        expect(hook.result.max.toFixed(2)).to.equal('73.44')
      })
  })
  // Let enough time to proceed
    .timeout(5000)

  it('write JSON', () => {
    // Switch to output store
    geotiffHook.params.store = outputStore
    return pluginHooks.writeJson()(geotiffHook)
      .then(hook => {
        expect(fs.existsSync(path.join(outputStore.path, geotiffHook.result.id + '.json'))).beTrue()
      })
  })
  // Let enough time to proceed
    .timeout(5000)

  it('clear JSON data', () => {
    pluginHooks.clearData()(geotiffHook)
    expect(geotiffHook.result.data).beUndefined()
  })

  it('read JSON', () => {
    // Update input file name to converted json
    geotiffHook.result.id += '.json'
    return pluginHooks.readJson()(geotiffHook)
      .then(hook => {
        checkJson(hook)
      })
  })
  // Let enough time to proceed
    .timeout(5000)

  it('clear JSON output', () => {
    pluginHooks.clearOutputs()(geotiffHook)
    expect(fs.existsSync(path.join(outputStore.path, geotiffHook.result.id + '.json'))).beFalse()
  })

  const jsonHook = {
    type: 'after',
    result: {
      id: 'json',
      data: {
        first: {
          speed: 10,
          time: '2018-05-31 13:25:13.431',
          nested: {
            value: 20
          },
          notPicked: 'first',
          omitted: 'first'
        },
        second: {
          speed: 30,
          time: '2018-05-31 13:26:13.431',
          nested: {
            value: 40
          },
          notPicked: 'second',
          omitted: 'second'
        }
      }
    }
  }

  it('transform JSON', () => {
    pluginHooks.transformJson({
      toArray: true,
      mapping: {
        'nested.value': 'value'
      },
      unitMapping: {
        speed: { from: 'kts', to: 'm/s' },
        time: { asDate: 'utc', from: 'YYYY-MM-DD HH:mm:ss.SSS' }
      },
      pick: ['speed', 'time', 'value', 'omit'],
      omit: ['omit'],
      merge: { new: 'new' }
    })(jsonHook)
    expect(Array.isArray(jsonHook.result.data)).beTrue()
    expect(jsonHook.result.data.length === 2).beTrue()
    const data = jsonHook.result.data[0]
    expect(data.notPicked).beUndefined()
    expect(data.omitted).beUndefined()
    expect(data.new).toExist()
    expect(data.new).to.equal('new')
    expect(data.value).toExist()
    expect(data.value).to.equal(20)
    expect(data.speed).to.equal(10 * 0.514444)
    expect(data.time.getTime()).to.equal(new Date('2018-05-31T13:25:13.431Z').getTime())
  })

  const geoJsonHook = {
    type: 'after',
    result: {
      id: 'gejson',
      data: {
        type: 'Point',
        coordinates: [319180, 6399862]
      }
    }
  }

  it('reproject GeoJSON', () => {
    pluginHooks.reprojectGeoJson({
      from: 'EPSG:3006', to: 'EPSG:2400'
    })(geoJsonHook)
    const data = geoJsonHook.result.data
    expect(Math.abs(data.coordinates[0] - 1271138)).to.be.below(1)
    expect(Math.abs(data.coordinates[1] - 6404230)).to.be.below(1)
  })

  const csvHook = {
    type: 'after',
    data: {
      id: 'RJTT-30-18000-2-1.csv'
    },
    result: {
      id: 'RJTT-30-18000-2-1.csv'
    },
    params: { store: inputStore }
  }

  it('converts CSV to JSON', () => {
    return pluginHooks.readCSV({ headers: true })(csvHook)
      .then(hook => {
        pluginHooks.transformJson({
          mapping: {
            Lonmin: 'bbox[0]',
            Latmin: 'bbox[1]',
            Lonmax: 'bbox[2]',
            Latmax: 'bbox[3]',
            Elev: 'value'
          }
        })(hook)
        checkJson(hook)
      })
  })
  // Let enough time to proceed
    .timeout(5000)

  it('converts JSON to CSV', () => {
    return pluginHooks.readCSV({ headers: true })(csvHook)
      .then(hook => {
      // Switch to output store
        csvHook.params.store = outputStore
        return pluginHooks.writeCSV({ fields: ['Latmin', 'Lonmin', 'Latmax', 'Lonmax', 'Elev'] })(csvHook)
      })
      .then(hook => {
        expect(fs.existsSync(path.join(outputStore.path, csvHook.result.id + '.csv'))).beTrue()
      })
  })
  // Let enough time to proceed
    .timeout(5000)

  const xmlHook = {
    type: 'after',
    data: {
      id: 'wms.xml'
    },
    result: {
      id: 'wms.xml'
    },
    params: { store: inputStore }
  }

  it('converts XML to JSON', () => {
    return pluginHooks.readXML()(xmlHook)
      .then(hook => {
        expect(hook.result.data).toExist()
      })
  })
  // Let enough time to proceed
    .timeout(5000)

  const yamlHook = {
    type: 'after',
    data: {
      id: 'mapproxy.yaml'
    },
    result: {
      id: 'mapproxy.yaml'
    },
    params: { store: inputStore }
  }

  it('converts YAML to JSON', () => {
    return pluginHooks.readYAML()(yamlHook)
      .then(hook => {
        expect(hook.result.data).toExist()
      })
  })
  // Let enough time to proceed
    .timeout(5000)

  it('converts JSON to YAML', () => {
    // Switch to output store
    yamlHook.params.store = outputStore
    return pluginHooks.writeYAML()(yamlHook)
      .then(hook => {
        expect(fs.existsSync(path.join(outputStore.path, yamlHook.result.id + '.yaml'))).beTrue()
      })
  })
  // Let enough time to proceed
    .timeout(5000)

  const capabilitiesHook = {
    type: 'after'
  }

  it('get WMS capabilities', () => {
    return pluginHooks.getCapabilities({
      url: 'http://sampleserver1.arcgisonline.com/ArcGIS/services/Specialty/ESRI_StatesCitiesRivers_USA/MapServer/WMSServer',
      service: 'WMS'
    })(capabilitiesHook)
      .then(hook => {
        expect(hook.result.data).toExist()
      })
  })
  // Let enough time to proceed
    .timeout(5000)
})
