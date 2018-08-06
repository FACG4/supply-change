const AWS = require('aws-sdk');
const fs = require('fs');
const fileType = require('file-type');
const bluebird = require('bluebird');
const multiparty = require('multiparty');

module.exports = (req, res) => {

    // configure the keys for accessing AWS
    AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    });

    // configure AWS to work with promises
    AWS.config.setPromisesDependency(bluebird);

    // create S3 instance
    const s3 = new AWS.S3();

    // abstracts function to upload a file returning a promise
    const uploadFile = (buffer, name, type) => {
        const params = {
            ACL: 'public-read',
            Body: buffer,
            Bucket: process.env.S3_BUCKET,
            ContentType: type.mime,
            Key: `${name}.${type.ext}`
        };
        return s3.upload(params).promise();
    };

    const form = new multiparty.Form();

    form.parse(req, async (error, fields, files) => {
        if (error) throw new Error(error);
        try {
            const path = files.file[0].path;
            const buffer = fs.readFileSync(path);
            const type = fileType(buffer);
            const timestamp = Date.now().toString();
            const fileName = `bucketFolder/${timestamp}-lg`;
            const data = await uploadFile(buffer, fileName, type);
            return res.status(200).send(data);
        } catch (error) {
            return res.status(400).send(error);
        }
    });
}

