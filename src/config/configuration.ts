export default () => ({
  app: {
    port: parseInt(process.env.PORT) || 3001,
  },
  database: {
    type: 'postgres',
    port: parseInt(process.env.DB_PORT) || 5433,
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
  },
});
