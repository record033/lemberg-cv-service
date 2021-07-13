const host = process.env.DATABASE_HOST || 'localhost';
const username = process.env.POSTGRES_USER;
const password = process.env.POSTGRES_PASSWORD;
const dbUrl = process.env.POSTGRES_DATABASE;

const localConfig = {
  port: process.env.POSTGRES_PORT,
  host: process.env.DATABASE_HOST,
  keepConnectionAlive: true,
  autoLoadEntities: true,
  database: dbUrl,
  username: username,
  password: password,
  synchronize: true,
};

module.exports = {
  type: 'postgres',
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migration/**/*.ts'],
  ...(host === 'localhost' ? localConfig : prodConfig),
};
