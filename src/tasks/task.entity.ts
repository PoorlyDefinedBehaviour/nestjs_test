import { BaseEntity, PrimaryColumn, Column, Entity } from "typeorm"
import uuid from "uuid"
import { ID } from "../core/types/id"
import { CreateTaskDto } from "./dtos/create_task.dto"
import { TaskStatus } from "./task_status.enum"

@Entity()
export class Task extends BaseEntity {
  @PrimaryColumn()
  id: ID

  @Column()
  title: string

  @Column()
  description: string

  @Column()
  status: TaskStatus

  public static of = (props: CreateTaskDto) => {
    const task = new Task()

    Object.assign(task, props)

    task.id = uuid.v4()

    return task
  }
}
