(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{228:function(e,t,a){"use strict";a.r(t);var s=a(2),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),a("p",[e._v("Examples are not intended to work out-of-the-box because they rely on data sources that might not be available or relevant for you. However they can be easily adapted to a working use case.")]),e._v(" "),a("p",[e._v("You can run a sample from the "),a("em",[e._v("examples")]),e._v(" directory of the module like this:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" examples\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# If local installation")]),e._v("\nnode "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v(" ./dem2csv/jobfile.js\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# If global/executable installation")]),e._v("\nkrawler ./dem2csv/jobfile.js\n")])])]),a("p",[e._v("Intermediate and product outputs will be generated in the "),a("em",[e._v("ouput")]),e._v(" folder. The main available samples are detailed below.")]),e._v(" "),a("h2",{attrs:{id:"ads-b"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ads-b"}},[e._v("#")]),e._v(" ADS-B")]),e._v(" "),a("p",[e._v("Grab "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Automatic_dependent_surveillance_%E2%80%93_broadcast",target:"_blank",rel:"noopener noreferrer"}},[e._v("ADS-B"),a("OutboundLink")],1),e._v(' data from two different providers using REST Web Services, convert it to a standardised JSON format, transform it to GeoJson and push it into AWS S3 and the local file system. To avoid "holes" the data from both providers are merged into a single file based on their unique identifier (a.k.a. '),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Aviation_transponder_interrogation_modes#ICAO_24-bit_address",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICAO"),a("OutboundLink")],1),e._v("). Once the file has been produced simply drag'n'drop them at "),a("a",{attrs:{href:"http://geojson.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("geojson.io"),a("OutboundLink")],1),e._v(" to see the live position of the Air Maroc fleet !")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.rawgit.com/kalisio/krawler/c4c7c00e3bd97390d6a9dd91c063d526f9c262e3/images/ADS-B.png",alt:"ADS-B"}})]),e._v(" "),a("p",[e._v("The "),a("RouterLink",{attrs:{to:"/how-to-use-it/hooks.html"}},[e._v("hooks")]),e._v(" used are the following:")],1),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.rawgit.com/kalisio/krawler/fd6d4f356fb61824b6cd57d544040dc99d6c3a79/examples/adsb/Hooks%20Diagram.svg",alt:"Hooks ADS-B"}})]),e._v(" "),a("p",[e._v("Most parameters can be directly edited in the jobfile. However, for security concerns, some secrets are not hard-written in the jobfile, as a consequence you must define the following environment variables to make this sample work:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("S3_ACCESS_KEY")]),e._v(" : AWS S3 Access Key ID")]),e._v(" "),a("li",[a("strong",[e._v("S3_SECRET_ACCESS_KEY")]),e._v(" : AWS S3 Secret Access Key")]),e._v(" "),a("li",[a("strong",[e._v("S3_BUCKET")]),e._v(" : the name of the S3 bucket to write the GeoJson file to")])]),e._v(" "),a("p",[e._v("The web services used according to the providers are the following:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.adsbexchange.com/data/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ADS-B Exchange"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://opensky-network.org/apidoc/rest.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenSky Network"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("This sample demonstrates the flexibility of the krawler by using:")]),e._v(" "),a("ul",[a("li",[e._v("different output "),a("RouterLink",{attrs:{to:"/how-to-use-it/services.html#stores"}},[e._v("stores")]),e._v(" and an intermediate "),a("RouterLink",{attrs:{to:"/how-to-use-it/services.html#stores"}},[e._v("in-memory store")]),e._v(" to avoid writing temporary files,")],1),e._v(" "),a("li",[e._v("a "),a("RouterLink",{attrs:{to:"/how-to-use-it/hooks.html#common-options"}},[e._v("match filter")]),e._v(" to apply a given hook to a subset of the tasks (e.g. perform a JSON transformation adapted to the output of each provider)")],1),e._v(" "),a("li",[e._v("a "),a("RouterLink",{attrs:{to:"/how-to-use-it/hooks.html#transformjson-options"}},[e._v("JSON transformation")]),e._v(" to generate an unified format and filter data")],1),e._v(" "),a("li",[e._v("the "),a("RouterLink",{attrs:{to:"/how-to-use-it/known-issues.html#use-the-same-hook-multiple-times"}},[e._v("same hook multiple times")]),e._v(" (e.g. "),a("code",[e._v("writeJson")]),e._v(") with different options (e.g. to write to different output stores)")],1),e._v(" "),a("li",[e._v("the same hook at the task or job level to manage unitary as well as merged data")])]),e._v(" "),a("h2",{attrs:{id:"vigicrues"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vigicrues"}},[e._v("#")]),e._v(" Vigicrues")]),e._v(" "),a("p",[e._v("Grab data from the French flood warning system "),a("a",{attrs:{href:"https://www.vigicrues.gouv.fr/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vigicrues"),a("OutboundLink")],1),e._v(" as GeoJson using REST Web Services, reproject it, style it according to alert level and push it into AWS S3 and the local file system. Once the file has been produced simply drag'n'drop it at "),a("a",{attrs:{href:"http://geojson.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("geojson.io"),a("OutboundLink")],1),e._v(" to see the live flood warnings !")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.rawgit.com/kalisio/krawler/3632a68a7daa1bfd7df04bccc2a3c7817542e1f5/images/Vigicrue.png",alt:"Vigicrues"}})]),e._v(" "),a("p",[e._v("This sample is pretty similar to the ADS-B one plus:")]),e._v(" "),a("ul",[a("li",[e._v("a "),a("RouterLink",{attrs:{to:"/how-to-use-it/hooks.html#reprojectgeojson-options"}},[e._v("reprojection")]),e._v(" to transform data from the Lambert 93 projection system to the WGS 84 projection system")],1),e._v(" "),a("li",[e._v("a "),a("RouterLink",{attrs:{to:"/how-to-use-it/hooks.html#transformjson-options"}},[e._v("JSON transformation")]),e._v(" with value mapping to generate styling information")],1)]),e._v(" "),a("h2",{attrs:{id:"csv2db"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csv2db"}},[e._v("#")]),e._v(" csv2db")]),e._v(" "),a("p",[e._v("Grab a CSV file from AWS S3, convert it to GeoJson and push it into a PostGIS database table or MongoDB database collection (it will be dropped if it already exists). The "),a("RouterLink",{attrs:{to:"/how-to-use-it/hooks.html"}},[e._v("hooks")]),e._v(" used are the following for PG (MongoDB is similar):")],1),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.rawgit.com/kalisio/krawler/c85a9a96f08e090ff8b60b9df4adfa108f70bd7a/examples/csv2pg/Hooks%20Diagram.svg",alt:"Hooks Blocks"}})]),e._v(" "),a("p",[e._v("Some parameters like the input file name of the PostGIS host can be directly edited in the jobfile. However, for security concerns, some secrets are not hard-written in the jobfile, as a consequence you must define the following environment variables to make this sample work:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("S3_ACCESS_KEY")]),e._v(" : AWS S3 Access Key ID")]),e._v(" "),a("li",[a("strong",[e._v("S3_SECRET_ACCESS_KEY")]),e._v(" : AWS S3 Secret Access Key")]),e._v(" "),a("li",[a("strong",[e._v("S3_BUCKET")]),e._v(" : the name of the S3 bucket to read the CSV file from")]),e._v(" "),a("li",[a("strong",[e._v("PG_USER")]),e._v(" : the name of the PostgreSQL user to be used to connect")]),e._v(" "),a("li",[a("strong",[e._v("PG_PASSWORD")]),e._v(" : the password of the PostgreSQL user to be used to connect")])]),e._v(" "),a("h2",{attrs:{id:"dem2csv"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dem2csv"}},[e._v("#")]),e._v(" dem2csv")]),e._v(" "),a("p",[e._v("Extract Digital Elevation Model "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Digital_elevation_model",target:"_blank",rel:"noopener noreferrer"}},[e._v("DEM"),a("OutboundLink")],1),e._v(" data from a WCS server and produces a CSV file. The output consists in a geographic grid of a given "),a("em",[e._v("width")]),e._v(" (in meter) and "),a("em",[e._v("resolution")]),e._v(" (in meter), centered around a location defined by ["),a("em",[e._v("longitude")]),e._v(", "),a("em",[e._v("latitude")]),e._v("] (in WGS84 degrees). Each row of the CSV contains the bounding box of a cell and the corresponding elevation value.")]),e._v(" "),a("p",[e._v("This sample is detailed in this "),a("a",{attrs:{href:"https://blog.feathersjs.com/a-minimalist-etl-using-feathersjs-part-2-6aa89bd73d66",target:"_blank",rel:"noopener noreferrer"}},[e._v("article"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("blockquote",[a("p",[e._v("The original purpose was to ease ingestion of this data in a Hadoop system to perform some analysis")])]),e._v(" "),a("p",[e._v("The sample folder contains a job configuration stored in "),a("a",{attrs:{href:"https://github.com/kalisio/krawler/blob/master/examples/dem2csv/jobfile.js",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("jobfile.js")]),a("OutboundLink")],1),e._v(" to perform the process around a given location, which includes the hooks configuration in "),a("a",{attrs:{href:"https://github.com/kalisio/krawler/blob/master/examples/dem2csv/hooks-blocks.js",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("hooks-blocks.js")]),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("The process can handle large datasets because the grid is split in a matrix of NxN blocks of "),a("em",[e._v("blockResolution")]),e._v(" (in meter) to perform the data download and the merging of all block data relies on streams. The "),a("RouterLink",{attrs:{to:"/how-to-use-it/hooks.html"}},[e._v("hooks")]),e._v(" used are the following:")],1),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.rawgit.com/kalisio/krawler/b46277bd9ef6b866e1a4d634766882345b9fd198/examples/dem2csv/Hooks%20Diagram%20Blocks.svg",alt:"Hooks Blocks"}})]),e._v(" "),a("p",[e._v("Here is what look like the (intermediate) outputs generated: grid blocks in "),a("a",{attrs:{href:"https://github.com/kalisio/krawler/raw/master/test/data/RJTT-30-18000-2-1.csv",target:"_blank",rel:"noopener noreferrer"}},[e._v("CSV"),a("OutboundLink")],1),e._v(" and images")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/kalisio/krawler/raw/master/examples/dem2csv/dem2csv-blocks.png",alt:"Grid Blocks"}})]),e._v(" "),a("p",[e._v("For illustration purpose we kept the original "),a("a",{attrs:{href:"https://github.com/kalisio/krawler/blob/master/examples/dem2csv/hooks.js",target:"_blank",rel:"noopener noreferrer"}},[e._v('"naïve" implementation'),a("OutboundLink")],1),e._v(" that performed data download of each grid cell independently.\nHowever, processing time was too long on high resolution grids, the "),a("RouterLink",{attrs:{to:"/how-to-use-it/hooks.html"}},[e._v("hooks")]),e._v(" used were the following:")],1),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.rawgit.com/kalisio/krawler/b46277bd9ef6b866e1a4d634766882345b9fd198/examples/dem2csv/Hooks%20Diagram.svg",alt:"Hooks"}})]),e._v(" "),a("h2",{attrs:{id:"docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[e._v("#")]),e._v(" Docker")]),e._v(" "),a("p",[e._v("Provide web services with underlying pipeline functions managed using containers. This ensure you don't have to pollute your own operating system by installing anything except "),a("a",{attrs:{href:"https://www.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker"),a("OutboundLink")],1),e._v(" and allow to make the processing scale on-demand, e.g. with an underlying "),a("a",{attrs:{href:"https://docs.docker.com/engine/swarm/",target:"_blank",rel:"noopener noreferrer"}},[e._v("swarm cluster"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"image-conversion-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#image-conversion-service"}},[e._v("#")]),e._v(" Image conversion service")]),e._v(" "),a("p",[e._v("Convert an image file from PNG to JPG using "),a("a",{attrs:{href:"http://imagemagick.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("ImageMagick"),a("OutboundLink")],1),e._v(" running in a temporary dedicated container.")]),e._v(" "),a("blockquote",[a("p",[e._v("Before using this sample you will need to download the Image Magick image: "),a("code",[e._v("docker pull v4tech/imagemagick")]),e._v(".")])]),e._v(" "),a("p",[e._v("Launch the krawler as a web API with the job "),a("code",[e._v("krawler jobfile-convert.js --api")]),e._v(" then POST the following request to "),a("code",[e._v("http://localhost:3030/api/jobs")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"tasks"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"krawler-icon"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("You should see a "),a("em",[e._v("krawler-icon.jpg")]),e._v(" file in the output folder once the job has been executed.")]),e._v(" "),a("h3",{attrs:{id:"map-print-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#map-print-service"}},[e._v("#")]),e._v(" Map print service")]),e._v(" "),a("p",[e._v("Take a screenshot of a map using "),a("a",{attrs:{href:"https://github.com/DevExpress/testcafe",target:"_blank",rel:"noopener noreferrer"}},[e._v("TestCafé"),a("OutboundLink")],1),e._v(" running a "),a("a",{attrs:{href:"https://leafletjs.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Leaflet-based"),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"http://kargo-www.s3-website.eu-central-1.amazonaws.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("web mapping client"),a("OutboundLink")],1),e._v(" in a temporary dedicated container and output the resulting image on S3.")]),e._v(" "),a("p",[e._v("This sample is detailed in this "),a("a",{attrs:{href:"https://hackernoon.com/how-to-build-a-map-print-service-in-minutes-c5a24b1f0f41",target:"_blank",rel:"noopener noreferrer"}},[e._v("article"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("blockquote",[a("p",[e._v("Before using this sample you will need to build the required image from the sample directory: "),a("code",[e._v("docker build -t kalisio/leaflet-print .")]),e._v(".")])]),e._v(" "),a("p",[e._v("Launch the krawler as a web API with the job "),a("code",[e._v("krawler jobfile-print.js --api")]),e._v(" then POST the following request containing the GeoJson data and print parameters to "),a("code",[e._v("http://localhost:3030/api/jobs")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"tasks"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"format"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"A4 Landscape"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"baseLayer"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"PlanetSat"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"data"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    \t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Feature"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"geometry"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"LineString"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"coordinates"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("102.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("103.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("104.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("105.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n    \t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("Once the job has been executed the response contains the link to download the printed image on S3 for each task:")]),e._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"bc185cb0-7983-11e8-883f-a333a7402f4a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        ...\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"link"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"https://s3.eu-central-1.amazonaws.com/krawler/bc185cb0-7983-11e8-883f-a333a7402f4a.png"')]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])]),a("h3",{attrs:{id:"seeder"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#seeder"}},[e._v("#")]),e._v(" Seeder")]),e._v(" "),a("p",[e._v("The seeder take advantage of "),a("a",{attrs:{href:"https://kalisio.github.io/kargo/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kargo"),a("OutboundLink")],1),e._v(" to seed a dataset. It relies on the seeding capabilities of "),a("a",{attrs:{href:"https://mapproxy.org/docs/nightly/seed.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("MapProxy"),a("OutboundLink")],1),e._v(". The global approach is to subdivide the job into multiple tasks and run "),a("code",[e._v("mapprroxy-seed")]),e._v(" utility for each task. To subdivide the job, we use a spatial grid and each cell is used as a coverage entry to limit the extend of the corresponding task. All the tasks, i.e. "),a("code",[e._v("mapproxy-seed")]),e._v(" share the same MapProxy configuration file and use a generated seed file.")]),e._v(" "),a("p",[e._v("We use the same image of MapProxy as the one used in Kargo, but for now we do not use the benefits of a Swarm infrastructure to deploy the task. Meanwhile, if you plan to seed a layer with a source exposed by TileserverGL, you can easily scale the number of instances of TileserverGL to fit the required charge.")])])}),[],!1,null,null,null);t.default=r.exports}}]);