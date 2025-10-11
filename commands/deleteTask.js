const chalk = require('chalk');
const { readTasks, writeTasks } = require('../utils/fileHandler');

function deleteTask(id) {
  const tasks = readTasks();
  const index = tasks.findIndex(t => t.id === Number(id));

  if (index === -1) {
    console.log(chalk.red(`Error: Task with ID ${id} not found.`));
    return;
  }

  tasks.splice(index, 1);
  writeTasks(tasks);

  console.log(chalk.green(`Task with ID ${id} has been deleted successfully.`));
}

module.exports = deleteTask;
