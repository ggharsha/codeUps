const S3 = require('aws-sdk/clients/s3');
const fs = require('fs');
const keys = require('./config/keys');


const bucketName = keys.AWS_BUCKET_NAME;
const region = keys.AWS_BUCKET_REGION;
const accessKeyId = keys.AWS_ACCESS_KEY;
const secretAccessKey = keys.AWS_SECRET_KEY;

const s3 = new S3({
    region,
    accessKeyId,
    secretAccessKey
})

const getFiles=(filekey)=>{
    const downloadParams={
        Key: filekey,
        Bucket: bucketName
    }
    return s3.getObject(downloadParams).createReadStream()
}
exports.getFiles = getFiles