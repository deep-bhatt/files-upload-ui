import AWS from 'aws-sdk';

export const configureAWS = (accessKeyId, secretAccessKey, sessionToken) => {
  AWS.config.update({
    accessKeyId,
    secretAccessKey,
    sessionToken,
    region: 'ap-south-1',
  });
};
