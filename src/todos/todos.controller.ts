import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, CacheInterceptor, Query } from '@nestjs/common';
import { todosService } from './todos.service';
import { CreatetodoDto } from './dto/create-todo.dto';
import { UpdatetodoDto } from './dto/update-todo.dto';

@UseInterceptors(CacheInterceptor)
@Controller('todo-items')
export class todosController {
  constructor(private readonly todosService: todosService) {}

  @Post()
  async create(@Body() createtodoDto: CreatetodoDto) {
    const data = await this.todosService.create(createtodoDto);

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
      data: data.map(d => {
        return {
          id: d.id,
          title: d.title,
          activity_group_id: d.activity_group_id,
          is_active: "1",
          priority: d.priority,
          created_at: d.createdAt,
          updated_at: d.updatedAt,
          deleted_at: null
        }
      })
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.todosService.findOne(+id);

    return {
      status: "Success",
      message: "Success",
      data: {
        id: data.id,
        title: data.title,
        activity_group_id: data.activity_group_id,
        is_active: "1",
        priority: data.priority,
        created_at: data.createdAt,
        updated_at: data.updatedAt,
        deleted_at: null
      }
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatetodoDto: UpdatetodoDto) {
    const data = await this.todosService.update(+id, updatetodoDto);

    return {
      status: "Success",
      message: "Success",
      data: {
        id: data.id,
        title: data.title,
        activity_group_id: data.activity_group_id,
        is_active: "1",
        priority: data.priority,
        created_at: data.createdAt,
        updated_at: data.updatedAt,
        deleted_at: null
      }
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
