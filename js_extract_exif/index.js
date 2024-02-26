//imports
const getExif = require('exif-async')
const parseDMS = require('parse-dms');
//entry point function
async function extractExif(){
    let gpsObject = await readExifData("china1.jpeg");
console.log(gpsObject)
let gpsDecimal = getGPSCords(gpsObject)
console.log(gpsDecimal)
console.log(gpsDecimal.lat)
console.log(gpsDecimal.lon)
}

//call the Entry point (not needed in GCF)
extractExif();
// Helper Functions
async function readExifData(localFile){
    let exifData;
    try{
exifData = await getExif(localFile);
// console.log(exifData)
// console.log(exifData.gps.GPSLatitude);
return exifData.gps;
    }catch(err){
        console.log(err);
        return null;
    }
}


function getGPSCords(g){
    const latString = `${g.GPSLatitude[0]}:${g.GPSLatitude[1]}:${g.GPSLatitude[2]}${g.GPSLatitudeRef}`;
    const lonString = `${g.GPSLongitude[0]}:${g.GPSLongitude[1]}:${g.GPSLongitude[2]}${g.GPSLongitudeRef}`;
const degCoords = parseDMS(`${latString} ${lonString}`);

return degCoords
}
