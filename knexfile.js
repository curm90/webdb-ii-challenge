module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/db/cars.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './src/migrations'
    },
    seeds: {
      directory: './src/seeds'
    }
  }
};
