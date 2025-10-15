# CLI To-Do

Usage examples (use node to run the CLI):

node index.js add "Task description"
node index.js show
node index.js delete <id>
node index.js update <id> <pending|completed>

Notes:

- You can run the CLI directly with node, e.g. `node index.js show`.
- To create a real `todo` command, you can add a `bin` entry to package.json and use `npm link` (optional).
