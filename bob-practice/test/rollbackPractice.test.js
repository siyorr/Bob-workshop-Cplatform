import test from "node:test";
import assert from "node:assert/strict";

import { describeRollbackPractice } from "../src/rollbackPractice.js";

test("describes no file changes", () => {
  assert.equal(describeRollbackPractice("G5 rollback", []), "G5 rollback: no files changed");
});

test("describes one file change", () => {
  assert.equal(describeRollbackPractice("G5 rollback", ["src/rollbackPractice.js"]), "G5 rollback: 1 file changed");
});

test("describes multiple file changes", () => {
  assert.equal(describeRollbackPractice("G5 rollback", ["a.js", "b.js"]), "G5 rollback: 2 files changed");
});
