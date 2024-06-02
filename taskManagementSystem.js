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
    return task;
  }
}

async function completeTask(index) {
  await delay();
  if (index < 0 || index >= tasks.length) {
    throw new Error("Invalid task index");
  } else {
    const task = tasks[index];
    tasks.splice(index, 1);
    return task;
  }
}

async function listTasks() {
  await delay();
  let index = 0;
  console.log("Attività in corso:");
  tasks.forEach((task) => {
    console.log(`id:${index} - Attività: ${task}`);
    index++;
  });
}

async function print() {
  try {
    let result = await addTask("Pulire la casa");
    console.log(`Aggiunta l'attività:
${result}`);
    result = await addTask("Portare fuori il cane");
    console.log(`Aggiunta l'attività:
${result}`);
    await listTasks();
    result = await completeTask(1);
    console.log(`L'attività completata è
${result}`);
    await listTasks();
  } catch (error) {
    console.error(error);
  }
}
print();

