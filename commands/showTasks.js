const chalk = require('chalk');
const Table = require('cli-table3');
const { readTasks } = require('../utils/fileHandler');

function showTasks() {
  const tasks = readTasks();

  if (tasks.length === 0) {
    console.log(chalk.yellow('No tasks found.'));
    return;
  }

  const table = new Table({
    head: ['ID', 'Description', 'Status'],
    colWidths: [10, 40, 15]
  });

  tasks.forEach(t => {
    const statusColor = t.status === 'completed' ? chalk.green : chalk.cyan;
    table.push([t.id, t.description, statusColor(t.status)]);
  });

  console.log(table.toString());
}

module.exports = showTasks;
