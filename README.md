# CLI To-Do

A feature-rich command-line todo list application with color-coded output and table formatting.

## Installation

You can install the CLI tool globally using npm:

```bash
npm install -g @saulsabunyo/todo-cli
```

For development (local installation):

```bash
git clone https://github.com/SaulSabunyo/Todo-app-CLI-tool.git
cd Todo-app-CLI-tool
npm install
npm link
```

To uninstall:

```bash
npm uninstall -g @saulsabunyo/todo-cli
```

## Features

- Add, show, update, and delete tasks
- Color-coded output for better visibility
- Formatted table display of tasks
- Global command-line access
- Persistent storage

## Usage

### Adding a Task

```bash
todo add "Complete the project documentation"
# Output: ✅ Task added successfully with ID: 1
```

### Showing Tasks

```bash
todo show
# Output will show a formatted table:
┌────┬──────────────────────────────┬──────────┐
│ ID │ Task                         │ Status   │
├────┼──────────────────────────────┼──────────┤
│ 1  │ Complete the documentation   │ pending  │
└────┴──────────────────────────────┴──────────┘
```

### Updating a Task

```bash
todo update 1 completed
# Output: ✅ Task updated successfully
```

### Deleting a Task

```bash
todo delete 1
# Output: ✅ Task deleted successfully

# If task doesn't exist:
todo delete 100
# Output: ❌ Error: Task with ID 100 not found
```

### Help

```bash
todo --help
# or
todo -h
```

## Error Messages

- ❌ Error: Task with ID {id} not found
- ❌ Error: Invalid command. Use --help to see available commands
- ❌ Error: Task description is required

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.
