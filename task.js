const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Task extends Model {}

Task.init({
  title: DataTypes.STRING,
  description: DataTypes.STRING,
  status: DataTypes.STRING,
  priority: DataTypes.STRING,
  dueDate: DataTypes.DATE,
  userId: DataTypes.INTEGER,
}, { sequelize, modelName: 'task' });

module.exports = Task;