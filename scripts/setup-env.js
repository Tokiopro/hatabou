import { createInterface } from "node:readline/promises";
import { existsSync, readFileSync, writeFileSync } from "node:fs";

const ENV_PATH = ".env";

const rl = createInterface({ input: process.stdin, output: process.stdout });

async function main() {
  console.log("\n📝 .env セットアップ\n");

  if (existsSync(ENV_PATH)) {
    const overwrite = await rl.question(
      ".env が既に存在します。上書きしますか？ (y/N): "
    );
    if (overwrite.toLowerCase() !== "y") {
      console.log("中止しました。");
      rl.close();
      return;
    }
  }

  const ga4Id = await rl.question(
    "GA4 測定IDを入力してください (例: G-XXXXXXX / 未設定ならEnter): "
  );
  const gscCode = await rl.question(
    "Search Console 確認コードを入力してください (未設定ならEnter): "
  );

  const lines = [
    "# Google Analytics 4",
    `PUBLIC_GA4_ID=${ga4Id}`,
    "",
    "# Google Search Console",
    `PUBLIC_GSC_VERIFICATION=${gscCode}`,
    "",
  ];

  writeFileSync(ENV_PATH, lines.join("\n"), "utf-8");
  console.log(`\n✅ ${ENV_PATH} を生成しました。`);

  rl.close();
}

main();
