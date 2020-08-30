import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
  Delete,
  Patch,
  Query,
  HttpCode,
  ValidationPipe,
} from "@nestjs/common"
import { TasksService } from "./tasks.service"
import { CreateTaskDto } from "./dtos/create_task.dto"
import { ID } from "../core/types/id"
import { GetTasksFilterDto } from "./dtos/get_tasks_filter.dto"
import { TaskStatus } from "./task_status.enum"

@Controller("tasks")
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getTasks(@Query() getTasksFilterDto: GetTasksFilterDto) {
    return this.tasksService.getTasks(getTasksFilterDto)
  }

  @Get("/:id")
  async getTaskById(@Param("id") id: ID) {
    const task = await this.tasksService.getTaskById(id)

    if (!task) {
      throw new NotFoundException()
    }

    return task
  }

  @Post()
  createTask(@Body(ValidationPipe) createTaskDto: CreateTaskDto) {
    return this.tasksService.createTask(createTaskDto)
  }

  @Delete("/:id")
  @HttpCode(204)
  deleteTask(@Param("id") id: ID) {
    const ok = this.tasksService.deleteTaskById(id)

    if (ok) {
      throw new NotFoundException()
    }
  }

  @Patch("/:id/status")
  updateTaskStatus(@Param("id") id: ID, @Body("status") status: TaskStatus) {
    return this.tasksService.updateTaskStatus(id, status)
  }
}
