import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { ID } from "../core/types/id"
import { TasksRepository } from "./tasks.repository"
import { TaskStatus } from "./task_status.enum"

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TasksRepository)
    private readonly tasksRepository: TasksRepository
  ) {}

  getTasks = this.tasksRepository.getTasks

  createTask = this.tasksRepository.createTask

  getTaskById = (id: ID) => this.tasksRepository.findOne({ id })

  deleteTaskById = (id: ID) =>
    this.tasksRepository.delete(id).then(result => Boolean(result.affected))

  updateTaskStatus = async (id: ID, status: TaskStatus) => {
    const task = await this.tasksRepository.findOneOrFail({ id })
    task.status = status
    await this.tasksRepository.save(task)
    return task
  }
}
