const host = 'localhost';
const username = process.env.POSTGRES_USER
const password = process.env.POSTGRES_PASSWORD
const dbUrl = process.env.POSTGRES_DATABASE

const localConfig = {
  port: 5432,
  host: host,
  keepConnectionAlive: true,
  autoLoadEntities: true,
  database: dbUrl,
  username: username,
  password: password,  
};

const prodConfig = {
  url: process.env.DATABASE_URL,
};

module.exports = {
  type: 'postgres',
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migration/**/*.ts'],
  ...(host === 'localhost' ? localConfig : prodConfig),
};