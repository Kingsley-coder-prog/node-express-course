const express = require("express");
const app = express();
// const router = express.Router();

app.get("/hello", (req, res) => {
  res.send("Task Manager Page");
});

// app.get('/api/v1/tasks) - get all the tasks
// app.post('/api/v1/tasks) - create new tasks
// app.get('/api/v1/tasks/:id) - get a single task
// app.patch('/api/v1/tasks/:id) - update task
// app.delete('/api/v1/tasks/:id) - delete task

const port = 3000;

app.listen(3000, console.log(`Server is listening on port ${port}...`));
