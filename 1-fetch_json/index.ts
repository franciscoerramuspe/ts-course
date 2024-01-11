import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  // response.data has properties of Todo, therefore, every time we reference todo we have to follow the rules stated in Todo interface
  const todo = response.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const finished = todo.completed;

  console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished? ${finished}
  `);
});
