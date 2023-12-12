#!/usr/bin/env node
import { App } from "aws-cdk-lib";
import { CdkTerraformTutorialStack } from "../lib/cdk-terraform-tutorial-stack";

const app = new App();
new CdkTerraformTutorialStack(app, "CdkTerraformTutorialStack");
