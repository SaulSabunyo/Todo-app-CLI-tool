const fs = require('fs');
const filePath = './tasks.json';

// Read tasks safely
function readTasks() {
  try {
    if (!fs.existsSync(filePath)) fs.writeFileSync(filePath, '[]');
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data || '[]');
  } catch (err) {
    console.error("Error reading tasks:", err);
    return [];
  }
}

// Write tasks safely
function writeTasks(tasks) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
  } catch (err) {
    console.error("Error writing tasks:", err);
  }
}

module.exports = { readTasks, writeTasks };
