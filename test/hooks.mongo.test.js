import chai from 'chai'
import chailint from 'chai-lint'
import path, { dirname } from 'path'
import fs from 'fs-extra'
import fsStore from 'fs-blob-store'
import { hooks as pluginHooks } from '../lib/index.js'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const { util, expect } = chai

describe('krawler:hooks:mongo', () => {
  const inputStore = fsStore({ path: path.join(__dirname, 'data') })
  const outputStore = fsStore({ path: path.join(__dirname, 'output') })
  let geojson

  before(() => {
    chailint(chai, util)
    geojson = fs.readJsonSync(path.join(inputStore.path, 'geojson.json'))
  })

  const mongoOptions = {
    url: 'mongodb://127.0.0.1:27017/krawler-test'
  }

  const mongoHook = {
    type: 'before',
    data: {},
    params: {}
  }

  it('connect to MongoDB', async () => {
    await pluginHooks.connectMongo(mongoOptions)(mongoHook)
    expect(mongoHook.data.client).toExist()
    expect(mongoHook.data.client.db).toExist()
    expect(mongoHook.data.client.isConnected()).beTrue()
  })
  // Let enough time to proceed
    .timeout(5000)

  it('connect to MongoDB again', async () => {
    const result = await pluginHooks.connectMongo(mongoOptions)(mongoHook).then(ok => ok, no => no)
    expect(result).to.be.equal(mongoHook)
  })

  it('creates MongoDB collection', async () => {
    await pluginHooks.createMongoCollection({ collection: 'geojson', index: { geometry: '2dsphere' } })(mongoHook)
    const collections = await mongoHook.data.client.db.listCollections({ name: 'geojson' }).toArray()
    expect(collections.length === 1).beTrue()
  })
  // Let enough time to proceed
    .timeout(5000)

  it('writes MongoDB collection', async () => {
    mongoHook.type = 'after'
    mongoHook.result = mongoHook.data
    mongoHook.result.data = geojson
    await pluginHooks.writeMongoCollection({
      collection: 'geojson',
      transform: {
        omit: ['properties.prop2'],
        inPlace: false
      }
    })(mongoHook)
    const collection = mongoHook.data.client.db.collection('geojson')
    const results = await collection.find({
      geometry: { $near: { $geometry: { type: 'Point', coordinates: [102, 0.5] }, $maxDistance: 5000 } }
    }).toArray()
    expect(results.length).to.equal(1)
    expect(results[0].properties).toExist()
    expect(results[0].properties.prop0).to.equal('value0')
    expect(results[0].properties.prop2).beUndefined()
  })
  // Let enough time to proceed
    .timeout(5000)

  it('reads MongoDB collection', async () => {
    await pluginHooks.readMongoCollection({
      collection: 'geojson',
      query: {
        geometry: { $near: { $geometry: { type: 'Point', coordinates: [102, 0.5] }, $maxDistance: 500000 } }
      },
      project: { properties: 1 },
      skip: 1,
      limit: 2,
      dataPath: 'result.data'
    })(mongoHook)
    const results = mongoHook.result.data
    expect(results.length).to.equal(2)
    expect(results[0].geometry).beUndefined()
    expect(results[0].properties).toExist()
    expect(results[0].properties.prop0).to.equal('value0')
    expect(results[0].properties.prop1).toExist()
  })
  // Let enough time to proceed
    .timeout(5000)

  it('updates MongoDB collection', async () => {
    mongoHook.type = 'after'
    mongoHook.result.data = {
      type: 'FeatureCollection',
      features: geojson.features.map(feature => {
        delete feature.geometry
        delete feature.type
        if (feature.id < 3) feature.properties = { prop0: 'value1' }
        return feature
      })
    }
    await pluginHooks.updateMongoCollection({
      collection: 'geojson',
      filter: { id: '<%= id %>' }
    })(mongoHook)
    const collection = mongoHook.data.client.db.collection('geojson')
    const results = await collection.find({}).toArray()
    expect(results.length).to.equal(3)
    results.forEach(result => {
      expect(result.properties).toExist()
      if (result.id < 3) expect(result.properties.prop0).to.equal('value1')
      else expect(result.properties.prop0).to.equal('value0')
    })
  })
  // Let enough time to proceed
    .timeout(5000)

  it('create MongoDB aggregation', async () => {
    await pluginHooks.createMongoAggregation({
      collection: 'geojson',
      pipeline: {
        $group: {
          _id: '$geometry.type',
          num: { $sum: 1 }
        }
      },
      dataPath: 'result.data'
    })(mongoHook)
    const results = mongoHook.result.data
    expect(results.length).to.equal(3)
    expect(results[0].num).to.equal(1)
    expect(results[1].num).to.equal(1)
    expect(results[2].num).to.equal(1)
  })
  // Let enough time to proceed
    .timeout(5000)

  it('deletes MongoDB collection', async () => {
    await pluginHooks.deleteMongoCollection({ collection: 'geojson', filter: { 'geometry.type': 'Point' } })(mongoHook)
    const collection = mongoHook.data.client.db.collection('geojson')
    const results = await collection.find({ 'geometry.type': 'Point' }).toArray()
    expect(results.length).to.equal(0)
  })
  // Let enough time to proceed
    .timeout(5000)

  it('drops MongoDB collection', async () => {
    await pluginHooks.dropMongoCollection({ collection: 'geojson' })(mongoHook)
    const collections = await mongoHook.data.client.db.listCollections({ name: 'geojson' }).toArray()
    expect(collections.length === 0).beTrue()
  })
  // Let enough time to proceed
    .timeout(5000)

  it('creates MongoDB bucket', async () => {
    await pluginHooks.createMongoBucket({ bucket: 'data' })(mongoHook)
  })
  // Let enough time to proceed
    .timeout(5000)

  it('writes MongoDB bucket', async () => {
    mongoHook.result.store = inputStore
    await pluginHooks.writeMongoBucket({ bucket: 'data', metadata: { x: 'y' }, key: 'geojson.json' })(mongoHook)
    const collection = mongoHook.data.client.db.collection('data.files')
    const results = await collection.find({ filename: 'geojson.json' }).toArray()
    expect(results.length).to.equal(1)
    expect(results[0].metadata).toExist()
    expect(results[0].metadata.x).to.equal('y')
  })
  // Let enough time to proceed
    .timeout(5000)

  it('reads MongoDB bucket', async () => {
    mongoHook.result.store = outputStore
    await pluginHooks.readMongoBucket({ bucket: 'data', key: 'geojson.json' })(mongoHook)
    expect(fs.existsSync(path.join(outputStore.path, 'geojson.json'))).beTrue()
  })
  // Let enough time to proceed
    .timeout(5000)

  it('deletes MongoDB bucket', async () => {
    await pluginHooks.deleteMongoBucket({ bucket: 'data', key: 'geojson.json' })(mongoHook)
    const collection = mongoHook.data.client.db.collection('data.files')
    const results = await collection.find({ filename: 'geojson.json' }).toArray()
    expect(results.length).to.equal(0)
  })
  // Let enough time to proceed
    .timeout(5000)

  it('drops MongoDB bucket', async () => {
    await pluginHooks.dropMongoBucket({ bucket: 'data' })(mongoHook)
    let collections = await mongoHook.data.client.db.listCollections({ name: 'data.files' }).toArray()
    expect(collections.length === 0).beTrue()
    collections = await mongoHook.data.client.db.listCollections({ name: 'data.chuncks' }).toArray()
    expect(collections.length === 0).beTrue()
  })
  // Let enough time to proceed
    .timeout(5000)

  it('disconnect from MongoDB', async () => {
    // Cleanup
    await mongoHook.data.client.db.dropDatabase()
    await pluginHooks.disconnectMongo()(mongoHook)
    expect(mongoHook.data.client).beUndefined()
  })
  // Let enough time to proceed
    .timeout(5000)

  it('disconnect from MongoDB again', async () => {
    const result = await pluginHooks.disconnectMongo()(mongoHook).then(ok => ok, no => no)
    expect(result).to.be.equal(mongoHook)
  })
})
