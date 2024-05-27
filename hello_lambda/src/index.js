exports.lambdaHandler = async (event, context) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello, World! Today no change until done manually'),
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return response;
};