import { IsNotEmpty, Min, Max } from "class-validator"

export class CreateUserDto {
  @IsNotEmpty()
  @Min(6)
  @Max(255)
  username: string

  @IsNotEmpty()
  @Min(6)
  @Max(255)
  password: string
}
