@AGENTS.md

## デプロイ前チェックリスト

- [ ] `npm run build` がエラーなく完了
- [ ] 全ページに title / description / OGP が設定されている
- [ ] 構造化データ（JSON-LD）にエラーがない
- [ ] 0件表示ページのキャッシュヘッダーが短期設定
- [ ] モバイル表示でレイアウト崩れなし
- [ ] SEO関連テキスト・メタ情報・構造化データを削除していない

## データ品質ゲート

```bash
cd ~/automation-scripts
node shared/validate-data.mjs --table MinkouSchool
```

## 共通スクリプト（~/automation-scripts/shared/）

- `geocode.mjs --table MinkouSchool`
- `nearest-station.mjs --table MinkouSchool`
- `validate-data.mjs --table MinkouSchool`
