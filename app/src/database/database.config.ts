import "reflect-metadata";
import { DataSource } from "typeorm";
import { NoteEntity } from "./entities/NoteEntity";

const entities = [
    NoteEntity
];
export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "app.db",
  synchronize: true,
  logging: false,
  entities: entities,
  migrations: [],
  subscribers: [],
});
