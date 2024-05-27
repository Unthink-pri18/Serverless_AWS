const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const tableName = StudentTable;
  const student = JSON.parse(event.body);

  const params = {
    TableName: tableName,
    Item: student
  };

  try {
    await dynamo.put(params).promise();
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Student added successfully', student }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to add student', error }),
    };
  }
};