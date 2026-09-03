export function describeRollbackPractice(changeName, changedFiles) {
  const safeName = changeName.trim();
  const fileCount = changedFiles.length;

  if (fileCount === 0) {
    return `${safeName}: no files changed`;
  }

  if (fileCount === 1) {
    return `${safeName}: 1 file changed`;
  }

  return `${safeName}: ${fileCount} files changed`;
}
