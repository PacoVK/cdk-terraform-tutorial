import * as cdk from "aws-cdk-lib";
import { CfnOutput } from "aws-cdk-lib";
import { Construct } from "constructs";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { IFunction, Runtime } from "aws-cdk-lib/aws-lambda";
import { HttpApi, HttpMethod } from "aws-cdk-lib/aws-apigatewayv2";
import { HttpLambdaIntegration } from "aws-cdk-lib/aws-apigatewayv2-integrations";
import { RetentionDays } from "aws-cdk-lib/aws-logs";

export class CdkTerraformTutorialStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const sampleFunction = new NodejsFunction(this, "MyFunction", {
      entry: "functions/hello-world.ts",
      handler: "handler",
      runtime: Runtime.NODEJS_20_X,
      logRetention: RetentionDays.ONE_MONTH,
    });

    new CfnOutput(this, "FunctionName", {
      value: sampleFunction.functionName,
    });

    this.createApiGateway(sampleFunction);
  }

  createApiGateway(sampleFunction: IFunction) {
    const apiGateway = new HttpApi(this, "HttpApi", {
      apiName: "serverless_lambda_gw",
    });

    const stage = apiGateway.addStage("serverlessLambdaStage", {
      autoDeploy: true,
      stageName: "serverless_lambda_stage",
    });

    apiGateway.addRoutes({
      path: "/hello",
      methods: [HttpMethod.GET],
      integration: new HttpLambdaIntegration("helloWorld", sampleFunction),
    });

    new CfnOutput(this, "BaseUrl", {
      value: stage.url,
    });
  }
}
