import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, CacheInterceptor, Query } from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@UseInterceptors(CacheInterceptor)
@Controller('todo-items')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  async create(@Body() createTodoDto: CreateTodoDto) {
    const data = await this.todosService.create(createTodoDto);

    return {
      status: "Success",
      message: "Success",
      data
    }
  }

  @Get()
  async findAll(@Query("activity_group_id") id:number) {
    const data = await this.todosService.findAll(id);

    return {
      status: "Success",
      message: "Success",
      data
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.todosService.findOne(+id);

    return {
      status: "Success",
      message: "Success",
      data
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    const data = await this.todosService.update(+id, updateTodoDto);

    return {
      status: "Success",
      message: "Success",
      data
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.todosService.remove(+id);

    return {
      status: "Success",
      message: "Success",
      data: {}
    } 
  }
}
