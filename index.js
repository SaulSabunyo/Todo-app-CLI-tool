#!/usr/bin/env node
// Chalk v5 compatibility when using CommonJS `require`
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
    console.log(chalk.yellow(`\nInvalid command.\n\nUsage:\n node index.js add "Task description"\n node index.js show\n node index.js delete <id>\n node index.js update <id> <pending|completed>\n`));
}
