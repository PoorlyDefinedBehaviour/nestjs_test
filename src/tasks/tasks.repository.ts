import { Repository, EntityRepository } from "typeorm"
import { Task } from "./task.entity"
import { CreateTaskDto } from "./dtos/create_task.dto"
import { GetTasksFilterDto } from "./dtos/get_tasks_filter.dto"

@EntityRepository(Task)
export class TasksRepository extends Repository<Task> {
  getTasks = async (filters?: GetTasksFilterDto) => {
    const query = this.createQueryBuilder("task")

    if (filters?.status) {
      query.andWhere("task.status = :status", { status: filters.status })
    }

    if (filters?.search) {
      query.andWhere(
        "task.title like %:search% or task.description like %:search%",
        { search: filters.search }
      )
    }

    return query.getMany()
  }

  createTask = async (data: CreateTaskDto) => {
    const task = Task.of(data)
    await this.save(task)
    return task
  }
}
