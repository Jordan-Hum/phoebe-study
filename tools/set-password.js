#!/usr/bin/env node
// Change the site password.
// Usage: node tools/set-password.js "new password"
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const pw = process.argv[2];
if (!pw) {
  console.error('Usage: node tools/set-password.js "new password"');
  process.exit(1);
}
const hash = crypto.createHash("sha256").update(pw.trim()).digest("hex");
const file = path.join(__dirname, "..", "js", "app.js");
const src = fs.readFileSync(file, "utf8");
const out = src.replace(/var PASSWORD_HASH = "[0-9a-f]{64}";/, `var PASSWORD_HASH = "${hash}";`);
if (out === src) {
  console.error("Could not find PASSWORD_HASH in js/app.js");
  process.exit(1);
}
fs.writeFileSync(file, out);
console.log("Password updated. Commit and push js/app.js to publish it.");
