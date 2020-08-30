import { BaseEntity, PrimaryColumn, Column, Entity } from "typeorm"
import uuid from "uuid"
import bcrypt from "bcrypt"
import { ID } from "../core/types/id"
import { CreateUserDto } from "./dtos/create_user.dto"

@Entity()
export class User extends BaseEntity {
  @PrimaryColumn()
  id: ID

  @Column()
  username: string

  @Column()
  password: string

  public static of = async (props: CreateUserDto) => {
    const user = new User()

    Object.assign(user, props)
    user.id = uuid.v4()
    user.password = await bcrypt.hash(user.password, 10)

    return user
  }
}
