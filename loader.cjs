const path = require('path');

module.exports = function(source) {
  const workspaceRoot = process.cwd();
  // Get relative path from the workspace root and convert to web URL format
  const relativePath = '/' + path.relative(workspaceRoot, this.resourcePath).replace(/\\/g, '/');
  
  return `export default ${JSON.stringify(relativePath)};`;
};
