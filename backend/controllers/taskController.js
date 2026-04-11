const tasks = [];
let nextId = 1;

const getTasks = (req, res) => {
  res.json(tasks);
};

const createTask = (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: 'title is required' });
  }

  const newTask = {
    id: nextId++,
    title,
    completed: false,
  };

  tasks.push(newTask);
  return res.status(201).json(newTask);
};

const updateTask = (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find((item) => item.id === id);

  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }

  const { title, completed } = req.body;

  if (typeof title === 'string') {
    task.title = title;
  }

  if (typeof completed === 'boolean') {
    task.completed = completed;
  }

  return res.json(task);
};

const deleteTask = (req, res) => {
  const id = Number(req.params.id);
  const taskIndex = tasks.findIndex((item) => item.id === id);

  if (taskIndex === -1) {
    return res.status(404).json({ message: 'Task not found' });
  }

  tasks.splice(taskIndex, 1);
  return res.json({ message: 'Task deleted successfully' });
};

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};
