import { App } from "aws-cdk-lib";
import { AppStack } from "../lib/app-stack.ts";

const app = new App();
new AppStack(app, "App");
