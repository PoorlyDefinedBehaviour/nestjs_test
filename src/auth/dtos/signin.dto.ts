import { IsNotEmpty, Min } from "class-validator"

export class SignInDto {
  @IsNotEmpty()
  @Min(6)
  username: string

  @IsNotEmpty()
  @Min(6)
  password: string
}
