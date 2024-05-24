const tasks = [];

function listTask() {
  let index = 0;
  setTimeout(() => {
    tasks.forEach((task) => {
      console.log(task, index);
      index++;
    });
  }, 2000);
}
