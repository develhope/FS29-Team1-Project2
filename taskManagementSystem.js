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

function completeTask(index, callback) {
  setTimeout(() => {
    if (index < 0 || index >= tasks.length) {
      callback(new Error("Invalid task index"), null);
    } else {
      tasks.splice(index, 1);
      callback(null, "Task completed successfully");
    }
  }, 1000);
}
function listTask() {
  let index = 0;
  setTimeout(() => {
    tasks.forEach((task) => {
      console.log(task, index);
      index++;
    });
  }, 2000);
}
