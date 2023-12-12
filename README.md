# Hashicorp Terraform tutorial for AWS Lambda and API Gateway in CDK for TypeScript

This is project is the CDK for TypeScript implementation for the [official Terraform tutorial](https://developer.hashicorp.com/terraform/tutorials/aws/lambda-api-gateway) to deploy Lambda along with an API Gateway.

## Differences with the Terraform tutorial

- The API Gateway in CDK does **not** enable API Gateway logging. This is enabled in the Terraform tutorial.
  The reason is that for ApiGatewayV2, the logging is not supported yet. See [here](https://github.com/aws/aws-cdk/issues/11100).

## Prerequisites

- Access to an AWS account
- NodeJS <= 20.x

## Project overview

The `cdk.json` file tells the CDK Toolkit how to execute your app.

### Bootstrap

1. Install dependencies

   ```bash
   yarn install
   ```

   or using npm

   ```bash
   npm install
   ```

2. Bootstrap your AWS account

   Similar to Terraform S3 backend, CDK also requires a S3 bucket to store deployment assets, like Lambda sources.
   If you did not deploy any CDK app in the target region/ account before, you need to bootstrap your AWS account first.

   ```bash
   AWS_PROFILE=<your AWS profile> yarn cdk bootstrap
   ```

   or using npm

   ```bash
   AWS_PROFILE=<your AWS profile> npm run cdk bootstrap
   ```

## Useful commands if you use yarn

- `yarn build` compile typescript to js
- `yarn watch` watch for changes and compile
- `yarn test` perform the jest unit tests
- `AWS_PROFILE=<your AWS profile> yarn cdk deploy` deploy this stack to your default AWS account/region
- `AWS_PROFILE=<your AWS profile> yarn cdk diff` compare deployed stack with current state
- `AWS_PROFILE=<your AWS profile> yarn cdk synth` emits the synthesized CloudFormation template

## Useful commands if you use npm

- `npm run build` compile typescript to js
- `npm run watch` watch for changes and compile
- `npm run test` perform the jest unit tests
- `AWS_PROFILE=<your AWS profile> npm run cdk deploy` deploy this stack to your default AWS account/region
- `AWS_PROFILE=<your AWS profile> npm run cdk diff` compare deployed stack with current state
- `AWS_PROFILE=<your AWS profile> npm run cdk synth` emits the synthesized CloudFormation template

## Cleanup

To destroy the stack, run:

```bash
AWS_PROFILE=<your AWS profile> yarn cdk destroy
```

or using npm

```bash
AWS_PROFILE=<your AWS profile> npm run cdk destroy
```

## Troubleshooting

Error similar to:

```
❌ Deployment failed: Error: CdkTerraformTutorialStack: SSM parameter /cdk-bootstrap/hnb659fds/version not found. Has the environment been bootstrapped? Please run 'cdk bootstrap' (see https://docs.aws.amazon.com/cdk/latest/guide/bootstrapping.html)
```

ensure to run `cdk bootstrap` as described in the [Bootstrap](#bootstrap) section.
