import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  UnauthorizedException,
} from "@nestjs/common"
import * as Either from "fp-ts/lib/Either"
import { SignInDto } from "./dtos/signin.dto"
import { AuthService } from "./auth.service"

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  signin(@Body(ValidationPipe) credentials: SignInDto) {
    return this.authService.signIn(credentials).then(
      Either.mapLeft(failures => {
        throw new UnauthorizedException(failures)
      })
    )
  }
}
