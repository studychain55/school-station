import fs from "node:fs";
import path from "node:path";

const standaloneTarget = ".next/standalone/.next";
const standaloneFiles = [
  "BUILD_ID",
  "build-manifest.json",
  "dynamic-css-manifest.json",
  "export-marker.json",
  "images-manifest.json",
  "package.json",
  "prerender-manifest.json",
  "react-loadable-manifest.json",
  "required-server-files.json",
  "routes-manifest.json",
];

if (fs.existsSync(".next")) {
  fs.mkdirSync(standaloneTarget, { recursive: true });
  for (const file of standaloneFiles) {
    const sourcePath = path.join(".next", file);
    if (fs.existsSync(sourcePath)) {
      fs.copyFileSync(sourcePath, path.join(standaloneTarget, file));
    }
  }
  if (fs.existsSync(".next/server")) {
    fs.cpSync(".next/server", path.join(standaloneTarget, "server"), { recursive: true, force: true });
  }
}

const targets = [
  {
    manifestPath: ".next/server/pages-manifest.json",
    pagesDir: ".next/server/pages/english-level",
  },
  {
    manifestPath: ".next/standalone/.next/server/pages-manifest.json",
    pagesDir: ".next/server/pages/english-level",
    sourceManifestPath: ".next/server/pages-manifest.json",
  },
  {
    manifestPath: ".open-next/server-functions/default/.next/server/pages-manifest.json",
    pagesDir: ".open-next/server-functions/default/.next/server/pages/english-level",
  },
];

for (const { manifestPath, pagesDir, sourceManifestPath } of targets) {
  if (!fs.existsSync(manifestPath) && sourceManifestPath && fs.existsSync(sourceManifestPath)) {
    fs.mkdirSync(path.dirname(manifestPath), { recursive: true });
    fs.copyFileSync(sourceManifestPath, manifestPath);
  }

  if (!fs.existsSync(manifestPath) || !fs.existsSync(pagesDir)) {
    continue;
  }

  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  for (const file of fs.readdirSync(pagesDir)) {
    if (!file.endsWith(".html")) continue;
    const slug = file.replace(/\.html$/, "");
    manifest[`/english-level/${slug}`] = `pages/english-level/${file}`;
  }

  fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
}
