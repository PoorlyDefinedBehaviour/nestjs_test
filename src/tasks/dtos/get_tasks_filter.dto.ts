import { IsOptional, IsIn, IsNotEmpty } from "class-validator"
import { TaskStatus } from "../task_status.enum"

export class GetTasksFilterDto {
  @IsOptional()
  @IsNotEmpty()
  search: string

  @IsOptional()
  @IsIn([TaskStatus.open, TaskStatus.inProgress, TaskStatus.done])
  status: TaskStatus
}
