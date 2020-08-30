import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { TasksModule } from "./tasks/tasks.module"
import { typeOrmConfig } from "./config/typeorm.config"
import { AuthModule } from "./auth/auth.module"
import { UsersModule } from "./users/users.module"


@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TasksModule,
    AuthModule,
    UsersModule,
    
  ],
})
export class AppModule {}
