import { IsNotEmpty, IsIn } from "class-validator"
import { TaskStatus } from "../task_status.enum"

export class CreateTaskDto {
  @IsNotEmpty()
  title: string

  @IsNotEmpty()
  description: string

  @IsIn([TaskStatus.open, TaskStatus.inProgress, TaskStatus.done])
  status: TaskStatus
}
