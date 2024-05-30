const tasks = [];

function delay() {
  return new Promise((resolve) => setTimeout(resolve, 1000));
}

async function addTask(task) {
  await delay();
  if (!task || typeof task !== "string") {
    throw new Error("Task must be a non-empty string");
  } else {
    tasks.push(task);
    return "Task added successfully";
  }
}

async function completeTask(index) {
  await delay();
  if (index < 0 || index >= tasks.length) {
    throw new Error("Invalid task index");
  } else {
    const task = tasks[index];
    tasks.splice(index, 1);
    return `${task}: completed successfully`;
  }
}

async function listTasks() {
  await delay();
  let index = 0;
  tasks.forEach((task) => {
    console.log(`id:${index} - Attività: ${task}`);
    index++;
  });
}
async function print() {
  try {
    let result = await addTask("Pulire la casa");
    console.log(result);
    result = await addTask("Portare fuori il cane");
    console.log(result);
    await listTask();
    result = await completeTask(1);
    console.log(result);
    await listTask();
  } catch (error) {
    console.error(error);
  }
}
print();
