const _chalk = require('chalk');
const chalk = _chalk && _chalk.default ? _chalk.default : _chalk;
const Table = require('cli-table3');
const { readTasks } = require('../utils/fileHandler');

function showTasks() {
  const tasks = readTasks();

  if (tasks.length === 0) {
    console.log(chalk.yellow('No tasks found.'));
    return;
  }

  const table = new Table({// Create a table to display tasks
    head: ['ID', 'Description', 'Status'],
    colWidths: [10, 40, 15]
  });

  tasks.forEach(t => {// Add each task to the table with colored status
    const statusColor = t.status === 'completed' ? chalk.green : chalk.cyan;
    table.push([t.id, t.description, statusColor(t.status)]);
  });

  console.log(table.toString());
}

module.exports = showTasks;
