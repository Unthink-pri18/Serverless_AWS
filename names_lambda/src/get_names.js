const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const tableName = StudentTable;
  const studentId = event.pathParameters.studentId;

  const params = {
    TableName: tableName,
    Key: { studentId }
  };

  try {
    const result = await dynamo.get(params).promise();
    if (result.Item) {
      return {
        statusCode: 200,
        body: JSON.stringify(result.Item),
      };
    } else {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: 'Student not found' }),
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to get student', error }),
    };
  }
};
