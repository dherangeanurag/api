module.exports = {
    development: {
      username: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || 'example',
      database: process.env.DB_NAME || 'task_management',
      host: process.env.DB_HOST || 'db',
      dialect: 'postgres',
    },
  };