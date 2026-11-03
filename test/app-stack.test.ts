import { App } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { expect, test } from "vite-plus/test";
import { AppStack } from "../lib/app-stack.ts";

test("snapshot", () => {
  const app = new App();
  const stack = new AppStack(app, "App");
  expect(Template.fromStack(stack).toJSON()).toMatchSnapshot();
});
