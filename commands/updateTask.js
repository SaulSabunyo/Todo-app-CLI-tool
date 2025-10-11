const _chalk = require('chalk');
const chalk = _chalk && _chalk.default ? _chalk.default : _chalk;
const { readTasks, writeTasks } = require('../utils/fileHandler');

function updateTask(id, status) {
  const tasks = readTasks();
  const task = tasks.find(t => t.id === Number(id));

  if (!task) {
    console.log(chalk.red(`Error: Task with ID ${id} not found.`));
    return;
  }

  if (!['pending', 'completed'].includes(status)) {
    console.log(chalk.red('Error: Status must be either "pending" or "completed".'));
    return;
  }

  task.status = status;
  writeTasks(tasks);
  console.log(chalk.green(`Task ${id} status updated to ${status}.`));
}

module.exports = updateTask;
