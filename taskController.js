const { Task } = require('../models/task');
const { Op } = require('sequelize');

exports.createTask = async (req, res) => {
  const { title, description, status, priority, dueDate, userId } = req.body;
  const task = await Task.create({ title, description, status, priority, dueDate, userId });
  res.status(201).json(task);
};

exports.getTasks = async (req, res) => {
    const { status, priority, dueDate, search } = req.query;
    const where = {};
  
    if (status) where.status = status;
    if (priority) where.priority = priority;
    if (dueDate) where.dueDate = dueDate;
  
    if (search) {
      where[Op.or] = [
        { title: { [Op.iLike]: `%${search}%` } },
        { description: { [Op.iLike]: `%${search}%` } }
      ];
    }
  
    try {
      const tasks = await Task.findAll({ where });
      res.json(tasks);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching tasks' });
    }
  };
  

exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, status, priority, dueDate } = req.body;
  await Task.update({ title, description, status, priority, dueDate }, { where: { id } });
  res.send('Task updated');
};

exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  await Task.destroy({ where: { id } });
  res.send('Task deleted');
};