/**
 * Pack Next.js standalone output into ./deploy for upload to cPanel/VPS.
 *
 * Usage (after build):
 *   npm run build
 *   npm run pack:deploy
 *
 * Run on server:
 *   cd deploy && node server.js
 *   (Passenger/cPanel: set startup to server.js in the deploy folder)
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const standaloneDir = path.join(root, ".next", "standalone");
const staticDir = path.join(root, ".next", "static");
const publicDir = path.join(root, "public");
const deployDir = path.join(root, "deploy");

function rmrf(dir) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

function copyRecursive(src, dest) {
  fs.cpSync(src, dest, { recursive: true });
}

if (!fs.existsSync(standaloneDir)) {
  console.error("❌ .next/standalone not found.");
  console.error("   1. Ensure next.config.ts has: output: 'standalone'");
  console.error("   2. Run: npm run build");
  process.exit(1);
}

if (!fs.existsSync(staticDir)) {
  console.error("❌ .next/static not found. Run: npm run build");
  process.exit(1);
}

console.log("📦 Packing standalone deploy bundle...");

rmrf(deployDir);
copyRecursive(standaloneDir, deployDir);

const deployNext = path.join(deployDir, ".next");
fs.mkdirSync(deployNext, { recursive: true });
copyRecursive(staticDir, path.join(deployNext, "static"));

if (fs.existsSync(publicDir)) {
  copyRecursive(publicDir, path.join(deployDir, "public"));
}

console.log("✅ Deploy folder ready:", deployDir);
console.log("");
console.log("Upload the entire `deploy/` folder to your host, then:");
console.log("  cd deploy && node server.js");
console.log("Or point cPanel Node.js startup file to: deploy/server.js");
