import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import r2IncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/r2-incremental-cache";
import { withRegionalCache } from "@opennextjs/cloudflare/overrides/incremental-cache/regional-cache";
import memoryQueue from "@opennextjs/cloudflare/overrides/queue/memory-queue";

const incrementalCache = withRegionalCache(r2IncrementalCache, {
  mode: "long-lived",
  shouldLazilyUpdateOnCacheHit: false,
});

export default defineCloudflareConfig({
  incrementalCache,
  queue: memoryQueue,
  enableCacheInterception: true,
});
