import { EntityRepository, Repository } from "typeorm"
import { User } from "./user.entity"
import { CreateUserDto } from "./dtos/create_user.dto"

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  createUser = async (data: CreateUserDto) => {
    const user = await User.of(data)
    await this.save(user)
    return user
  }
}
