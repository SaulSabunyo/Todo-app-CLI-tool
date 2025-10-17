#!/usr/bin/env node
const _chalk = require('chalk');
const chalk = _chalk && _chalk.default ? _chalk.default : _chalk;

const addTask = require('./commands/addTask');
const showTasks = require('./commands/showTasks');
const deleteTask = require('./commands/deleteTask');
const updateTask = require('./commands/updateTask');

const [,, command, ...args] = process.argv;



switch (command) {
  case 'add':
    addTask(args.join(' '));
    break;

  case 'show':
    showTasks();
    break;

  case 'delete':
    deleteTask(args[0]);
    break;

  case 'update':
    updateTask(args[0], args[1]);
    break;

  default:
    console.log(chalk.yellow(`\nUsage:\n  todo add "Task description"        Add a new task (status: pending)\n  todo show all                      Show all tasks\n  todo delete <id>                   Delete a task by ID\n  todo update <id> <pending|completed>  Update task status\n\nYou can also run the CLI directly with:\n  node index.js <command>\n`));
}
