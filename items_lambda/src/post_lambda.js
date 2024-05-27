const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const tableName = itemsDB;
  const item = JSON.parse(event.body);

  const params = {
    TableName: tableName,
    Item: item
  };

  try {
    await dynamo.put(params).promise();
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Item added successfully', item }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to add item', error }),
    };
  }
};