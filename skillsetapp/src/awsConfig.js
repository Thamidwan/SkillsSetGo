// awsConfig.js
import AWS from 'aws-sdk';

AWS.config.update({
  region: 'eu-west-1', // e.g., 'us-west-2'
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID, // Use environment variables for security
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
});

const dynamoDB = new AWS.DynamoDB.DocumentClient();

export { dynamoDB };
