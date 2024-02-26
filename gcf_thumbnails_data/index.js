const {Firestore} = require('@google-cloud/firestore');
const getExif = require('exif-async')
const parseDMS = require('parse-dms');




// entry point function

async function writeToFS(){
const firestore = new Firestore({
    projectId:"glabal-512-abmnq",
    //databaseId: "whatever"
})
let dataObject = {};

dataObject.imageName = "51200-ahmoha-global-final/708910133296722.jpg"
dataObject.imageURL = "https://storage.cloud.google.com/51200-ahmoha-global-final/1708910133296722.jpg"
dataObject.lat = 39.90568611111111
dataObject.long = 116.39314166666668
dataObject.thumbURL = "https://storage.cloud.google.com/51200-ahmoha-global-thumbnails/thumb%4064_1708910133296722.jpg"


console.log(`thedataobject: `)
console.log(dataObject);


//uploading the image



let collectionRef = firestore.collection('photos');
let documentRef = await collectionRef.add(dataObject);
console.log(`Document created: ${documentRef.id}`);


}

writeToFS();





