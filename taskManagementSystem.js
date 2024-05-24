const tasks = [];

function addTask(task, callback) {
  setTimeout(() => {
    if (!task || typeof task !== `string`) {
      callback(new Error(`Task must be a non-empty string`), null);
    } else {
      tasks.push(task);
      callback(null, `Task added successfully`);
    }
  }, 2000);
}


