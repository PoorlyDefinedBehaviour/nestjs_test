import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { UsersController } from "./users.controller"
import { UsersService } from "./users.service"
import { UsersRepository } from "./user.repository"

@Module({
  imports: [TypeOrmModule.forFeature([UsersRepository])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
