/*
Exercise 3: Finding a blog post using an ID

This exercise is similar to the last. We are going to find
a person using the '.find()' array method, however we will
need to check two separate values this time.

This time round there is a much larget set of data that
is over 1000 lines of code. You can have a quick look at the file,
'exercise-3-data.js', which is in the same diectory as this file.

You will need to find a todo that has the following properties:
  userId: 3,
  id: 43,

*/
import { todos } from './exercise-3-data.js';

// The first solution is the most basic:
const foundTodo = todos.find((todo) => {
  if (todo.userId === 3 && todo.id === 43) {
    return true;
  }
  // We don't have to return false as it happens automatically
});

// We can improve the solution above to return the conditional
// check because a conditional check is always going to evaluate
// to true or false
const foundTodoConditionalCheck = todos.find((todo) => {
  return todo.userId === 3 && todo.id === 43;
});

// We can then make the solution even more conside by making use of the
// implicit return (automatic return) instead of explicitly giving a return
// (explicitly meaning that we wrote the "return" keyword)
const foundTodoImplicitReturn = todos.find(
  (todo) => todo.userId === 3 && todo.id === 43,
);

console.log(foundTodo);
