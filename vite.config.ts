import cdkPlugin from "oxlint-plugin-awscdk";
import { defineConfig } from "vite-plus";

export default defineConfig({
  lint: {
    extends: [cdkPlugin.configs.recommended],
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
  fmt: {},
  test: {
    snapshotSerializers: ["./test/hash-serializer.ts"],
  },
});
