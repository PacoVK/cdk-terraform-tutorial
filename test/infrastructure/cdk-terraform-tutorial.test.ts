import { App } from "aws-cdk-lib";
import { CdkTerraformTutorialStack } from "../../lib/cdk-terraform-tutorial-stack";
import { Template } from "aws-cdk-lib/assertions";

test("Lambda Role has been created", () => {
  const app = new App();
  const stack = new CdkTerraformTutorialStack(app, "MyTestStack");
  const template = Template.fromStack(stack);

  template.hasResourceProperties("AWS::IAM::Role", {
    AssumeRolePolicyDocument: {
      Statement: [
        {
          Action: "sts:AssumeRole",
          Effect: "Allow",
          Principal: {
            Service: "lambda.amazonaws.com",
          },
        },
      ],
      Version: "2012-10-17",
    },
  });
});
