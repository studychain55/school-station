import fs from "node:fs";

const marker = 'throw Error(\'Dynamic require of "\'+x+\'" is not supported\')';
const replacement = 'if(String(x).endsWith("/.next/server/middleware-manifest.json"))return {version:3,middleware:{},sortedMiddleware:[],functions:{}};throw Error(\'Dynamic require of "\'+x+\'" is not supported\')';
const formattedMarker = 'throw Error(\'Dynamic require of "\' + x + \'" is not supported\');';
const formattedReplacement = 'if (String(x).endsWith("/.next/server/middleware-manifest.json")) return { version: 3, middleware: {}, sortedMiddleware: [], functions: {} };\n  throw Error(\'Dynamic require of "\' + x + \'" is not supported\');';
const requireFirstMarker = 'if(typeof require<"u")return require.apply(this,arguments);if(String(x).endsWith("/.next/server/middleware-manifest.json"))return {version:3,middleware:{},sortedMiddleware:[],functions:{}};';
const requireFirstReplacement = 'if(String(x).endsWith("/.next/server/middleware-manifest.json"))return {version:3,middleware:{},sortedMiddleware:[],functions:{}};if(typeof require<"u")return require.apply(this,arguments);';
const directMiddlewareRequireMarker = 'getMiddlewareManifest(){return this.minimalMode?null:require(this.middlewareManifestPath)}';
const directMiddlewareRequireReplacement = 'getMiddlewareManifest(){return this.minimalMode?null:{version:3,middleware:{},sortedMiddleware:[],functions:{}}}';

let patched = 0;
let alreadyPatched = 0;

for (const filePath of [
  ".open-next/server-functions/default/handler.mjs",
  ".open-next/worker.js",
  ...process.argv.slice(2),
]) {
  if (!fs.existsSync(filePath)) continue;

  let source = fs.readFileSync(filePath, "utf8");
  const originalSource = source;
  source = source.replaceAll(directMiddlewareRequireMarker, directMiddlewareRequireReplacement);

  if (source.includes(replacement) || source.includes(formattedReplacement)) {
    if (source.includes(requireFirstMarker)) {
      source = source.replaceAll(requireFirstMarker, requireFirstReplacement);
      fs.writeFileSync(filePath, source);
      patched += 1;
    } else if (source !== originalSource) {
      fs.writeFileSync(filePath, source);
      patched += 1;
    } else {
      alreadyPatched += 1;
    }
    continue;
  }
  if (!source.includes(marker) && !source.includes(formattedMarker)) {
    if (source !== originalSource) {
      fs.writeFileSync(filePath, source);
      patched += 1;
    }
    continue;
  }

  source = source.replace(marker, replacement);
  source = source.replace(formattedMarker, formattedReplacement);
  source = source.replaceAll(requireFirstMarker, requireFirstReplacement);
  fs.writeFileSync(filePath, source);
  patched += 1;
}

if (patched === 0 && alreadyPatched === 0) {
  throw new Error("OpenNext dynamic require marker not found");
}
