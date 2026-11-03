# cdk-template

Vite+ でツールチェーンを管理する AWS CDK (TypeScript) アプリのテンプレート。

```sh
vp create github:sakurai-ryo/cdk-template
```

## 構成

- パッケージマネージャー: pnpm
- フォーマット・lint・型チェック・テスト: `vp check` / `vp test` (oxfmt, oxlint, tsgo, Vitest)
- lint ルール: [oxlint-plugin-awscdk](https://awscdk-lint.dev/) の recommended
- ES Modules。`cdk.json` の `app` は `node bin/app.ts` で TypeScript を直接実行する (Node.js 24 以上)
  - Node.js の型除去で動かすため、`tsconfig.json` で `erasableSyntaxOnly` を有効にし、相対 import には `.ts` 拡張子を付ける
- スナップショットテストでは、アセットのハッシュ値 (64 桁の 16 進文字列) を `[HASH REMOVED]` に置換する (`test/hash-serializer.ts`)

## コマンド

```sh
vp check        # format + lint + 型チェック
vp test         # テスト
pnpm cdk synth
pnpm cdk deploy
```
