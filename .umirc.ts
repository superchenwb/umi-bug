import { defineConfig } from "umi";
import { join } from 'path';

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  npmClient: "pnpm",
});
