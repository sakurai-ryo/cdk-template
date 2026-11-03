import type { SnapshotSerializer } from "vite-plus/test";

// Asset hashes (S3 keys, image tags) change with every source edit, which would make snapshots churn.
const ASSET_HASH = /[0-9a-f]{64}/g;

export default {
  test: (val) => typeof val === "string" && val.match(ASSET_HASH) !== null,
  serialize: (val, config, indentation, depth, refs, printer) =>
    printer(val.replaceAll(ASSET_HASH, "[HASH REMOVED]"), config, indentation, depth, refs),
} satisfies SnapshotSerializer;
