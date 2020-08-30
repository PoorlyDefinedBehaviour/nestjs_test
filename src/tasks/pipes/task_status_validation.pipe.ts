import {
  PipeTransform,
  ArgumentMetadata,
  BadRequestException,
} from "@nestjs/common"
import { TaskStatus } from "../task_status.enum"

export class TaskStatusValidationPipe implements PipeTransform {
  private static readonly allowedStatuses = [
    TaskStatus.open,
    TaskStatus.inProgress,
    TaskStatus.done,
  ]

  transform = (value: any, _metadata: ArgumentMetadata) => {
    const isStatusAlllowed = TaskStatusValidationPipe.allowedStatuses.includes(
      value
    )

    if (!isStatusAlllowed) {
      throw new BadRequestException(
        `status must be one of ${TaskStatusValidationPipe.allowedStatuses.join(
          ", "
        )}`
      )
    }

    return value
  }
}
