const tasks = [];

function addTask(task, callback) {
  setTimeout(() => {
    if (!task || typeof task !== `string`) {
      callback(new Error(`Task must be a non-empty string`), null);
    } else {
      tasks.push(task);
      callback(null, `Task added successfully`);
    }
  }, 1000);
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

function listTasks() {
  let index = 0;
  setTimeout(() => {
    tasks.forEach((task) => {
      console.log(`id:${index} - Attività: ${task}`);
      index++;
    });
  }, 2000);
}

//test 
addTask("task 1", (error, data) => {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
});
addTask("task 2", (error, data) => {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
});
addTask("task 3", (error, data) => {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
});
addTask("task 4", (error, data) => {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
});
completeTask(3, (error, data) => {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
});
listTasks();

