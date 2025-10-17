const fs = require('fs');
const filePath = './tasks.json';

// Read tasks safely
function readTasks() {
  try {
    if (!fs.existsSync(filePath)) fs.writeFileSync(filePath, '[]');// Initialize file if it doesn't exist
    const data = fs.readFileSync(filePath, 'utf8');// Read file content
    return JSON.parse(data || '[]');// Parse and return tasks array
  } catch (err) {
    console.error("Error reading tasks:", err);
    return [];
  }
}

// Write tasks safely
function writeTasks(tasks) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));// Write tasks array to file
  } catch (err) {
    console.error("Error writing tasks:", err);
  }
}

module.exports = { readTasks, writeTasks };
