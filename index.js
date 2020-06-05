// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);

    },

    markComplete: function() {
      this.complete = true;
    }

  };
  return task;
  // taskTitles.push(title);
  // taskDescription.push(description);
  // taskComplete.push(false);
}


// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1

// logTaskState(0); // Clean Cat Litter has not been completed
// completeTask(0);
// logTaskState(0); // Clean Cat Litter has been completed

const task1 = newTask("Clean Cat Litter", "Take all the poop out of the litter box");
const task2 = newTask("Do Laundry", "😢😢");
const tasks = [task1, task2];

// console.log(task1.title)
task1.logState()
task1.markComplete();
task1.logState();