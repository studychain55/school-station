#!/usr/bin/env node
// Post-build: patch route regexes in handler.mjs and middleware/handler.mjs
// The custom Next.js build omits literal directory prefixes (c- / p-) from route regex.

import { readFileSync, writeFileSync } from 'fs';

function patchFile(filePath, patches) {
  let content = readFileSync(filePath, 'utf8');
  let count = 0;
  for (const [from, to] of patches) {
    const before = content;
    content = content.replaceAll(from, to);
    const hits = (before.split(from).length - 1);
    if (hits > 0) { count += hits; console.log(`  ${hits}x: ${from.slice(0,60)}...`); }
  }
  writeFileSync(filePath, content);
  return count;
}

// Patches for server-functions/default/handler.mjs (JS object literal format)
const serverPatches = [
  // Fix 1: RoutesManifest static route regexes (opennext middleware layer)
  [
    '"/c-[city]",regex:"^/([^/]+?)(?:/)?$",routeKeys:{nxtPcity:"nxtPcity"},namedRegex:"^/(?<nxtPcity>[^/]+?)(?:/)?$"',
    '"/c-[city]",regex:"^/c\\\\-([^/]+?)(?:/)?$",routeKeys:{nxtPcity:"nxtPcity"},namedRegex:"^/c\\\\-(?<nxtPcity>[^/]+?)(?:/)?$"',
  ],
  [
    '"/p-[prefecture]",regex:"^/([^/]+?)(?:/)?$",routeKeys:{nxtPprefecture:"nxtPprefecture"},namedRegex:"^/(?<nxtPprefecture>[^/]+?)(?:/)?$"',
    '"/p-[prefecture]",regex:"^/p\\\\-([^/]+?)(?:/)?$",routeKeys:{nxtPprefecture:"nxtPprefecture"},namedRegex:"^/p\\\\-(?<nxtPprefecture>[^/]+?)(?:/)?$"',
  ],
  // Fix 2: RouteMatcher.constructor - two-part fix for "p-[prefecture]" style routes:
  // a) Use isDynamicRoute(pathname, false) (non-strict) so mixed-prefix segments like
  //    "p-[prefecture]" are recognized as dynamic (strict mode requires [param] to be
  //    the entire segment and misses literal prefixes like "p-")
  // b) Pass includePrefix:true to getRouteRegex so the "p-" prefix is included in the
  //    generated regex: ^/p-([^/]+?)$ instead of ^/([^/]+?)$
  [
    '(0,_utils.isDynamicRoute)(definition.pathname)&&(this.dynamic=(0,_routematcher.getRouteMatcher)((0,_routeregex.getRouteRegex)(definition.pathname)))',
    '(0,_utils.isDynamicRoute)(definition.pathname,!1)&&(this.dynamic=(0,_routematcher.getRouteMatcher)((0,_routeregex.getRouteRegex)(definition.pathname,{includePrefix:!0})))',
  ],
];

// Patches for middleware/handler.mjs (JSON string format, spaces around colons)
const middlewarePatches = [
  [
    '"page": "/c-[city]", "regex": "^/([^/]+?)(?:/)?$", "routeKeys": { "nxtPcity": "nxtPcity" }, "namedRegex": "^/(?<nxtPcity>[^/]+?)(?:/)?$"',
    '"page": "/c-[city]", "regex": "^/c-([^/]+?)(?:/)?$", "routeKeys": { "nxtPcity": "nxtPcity" }, "namedRegex": "^/c-(?<nxtPcity>[^/]+?)(?:/)?$"',
  ],
  [
    '"page": "/p-[prefecture]", "regex": "^/([^/]+?)(?:/)?$", "routeKeys": { "nxtPprefecture": "nxtPprefecture" }, "namedRegex": "^/(?<nxtPprefecture>[^/]+?)(?:/)?$"',
    '"page": "/p-[prefecture]", "regex": "^/p-([^/]+?)(?:/)?$", "routeKeys": { "nxtPprefecture": "nxtPprefecture" }, "namedRegex": "^/p-(?<nxtPprefecture>[^/]+?)(?:/)?$"',
  ],
];

// Fix 3: Pages Router renderer isDynamicRoute default to non-strict
// isDynamicRoute(pathname) strict mode requires [param] to be the ENTIRE segment.
// Mixed-prefix routes like /p-[prefecture] fail the strict check → J2=false →
// params are NOT spread into getServerSideProps context → context.params = null.
// Fix: change default second arg from true (strict) to false (non-strict).
const pagesRendererPatches = [
  [
    'T=/\\/\\[[^/]+\\](?=\\/|$)/;function A(e10,t10=!0){',
    'T=/\\/\\[[^/]+\\](?=\\/|$)/;function A(e10,t10=!1){',
  ],
];

const f1 = '.open-next/server-functions/default/handler.mjs';
const f2 = '.open-next/middleware/handler.mjs';

console.log(`Patching ${f1}...`);
const c1 = patchFile(f1, [...serverPatches, ...pagesRendererPatches]);

console.log(`Patching ${f2}...`);
const c2 = patchFile(f2, middlewarePatches);

console.log(`fix-routes: total patches applied: ${c1} (server) + ${c2} (middleware)`);
if (c1 === 0 || c2 === 0) {
  console.warn('WARNING: some files had 0 patches. Strings may have changed.');
}
