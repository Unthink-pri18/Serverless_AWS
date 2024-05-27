#!/bin/bash

# Define the S3 bucket name
S3_BUCKET_NAME="serverless-lambda-s3-189"

# Package each lambda function
for lambda_dir in hello_lambda items_lambda names_lambda; do
  echo "Packaging ${lambda_dir}..."
  cd $lambda_dir
  sam package --output-template-file packaged-${lambda_dir}.yaml --s3-bucket $S3_BUCKET_NAME
  aws s3 cp packaged-${lambda_dir}.yaml s3://$S3_BUCKET_NAME/${lambda_dir}/packaged.yaml
  cd ..
done

echo "All Lambda functions have been packaged and uploaded to S3."