import { TypeOrmModuleOptions } from "@nestjs/typeorm"
import { join } from "path"

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "task_management",
  entities: [join(__dirname, "..", "**", "*.entity.(t|j)s")],
  synchronize: true,
}
