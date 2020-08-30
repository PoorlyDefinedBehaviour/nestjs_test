import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import bcrypt from "bcrypt"
import * as Either from "fp-ts/lib/Either"
import { UsersRepository } from "../users/user.repository"
import { SignInDto } from "./dtos/signin.dto"
import { Failure } from "../core/types/failure"

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UsersRepository)
    private readonly usersRepository: UsersRepository
  ) {}

  signIn = async ({
    username,
    password,
  }: SignInDto): Promise<Either.Either<Failure[], string>> => {
    const user = await this.usersRepository.findOne({ username })

    if (!user) {
      return Either.left([{ message: "invalid username" }])
    }

    if (!(await bcrypt.compare(password, user.password))) {
      return Either.left([{ message: "invalid password" }])
    }

    return Either.right("session token")
  }
}
