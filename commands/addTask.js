const _chalk = require('chalk');
const chalk = _chalk && _chalk.default ? _chalk.default : _chalk;
const { readTasks, writeTasks } = require('../utils/fileHandler');

function addTask(description) {
  if (!description || !description.trim()) {
    console.log(chalk.yellow('Cannot add an empty task.'));
    return;
  }

  const tasks = readTasks();
  const nextId = tasks.length ? Math.max(...tasks.map(t => t.id)) + 1 : 1;

  const newTask = {
    id: nextId,
    description: description.trim(),
    status: 'pending'
  };

  tasks.push(newTask);
  writeTasks(tasks);
  console.log(chalk.green(`Task added with ID ${nextId}.`));
}

module.exports = addTask;
