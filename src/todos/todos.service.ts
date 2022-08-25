import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ActivityGroup } from 'src/activity-groups/entities/activity-group.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectModel(Todo)
    private todoModel: typeof Todo,
    @InjectModel(ActivityGroup)
    private activityGroupModel: typeof ActivityGroup
  ){}

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const data = await this.activityGroupModel.findOne({
      where: { id: createTodoDto.activity_group_id }
    });

    if (!data) {
      throw new NotFoundException(`Todo With ID ${createTodoDto.activity_group_id} Not Found`)
    }

    return this.todoModel.create({
      activity_group_id: createTodoDto.activity_group_id,
      title: createTodoDto.title,
      priority: createTodoDto.priority,
    });
  }

  findAll(id?: number): Promise<Todo[]> {
    try {
      if (id == undefined) {
        return this.todoModel.findAll();
      } else {
        return this.todoModel.findAll({
          where: { activity_group_id: id }
        });
      }
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async findOne(id: number): Promise<Todo> {
    const data = await this.todoModel.findByPk(id);
    
    if (!data) {
      throw new NotFoundException(`Todo With ID ${id} Not Found`)
    }

    return data;
  }

  async update(id: number, updateTodoDto: UpdateTodoDto): Promise<Todo> {
    const data = await this.todoModel.findByPk(id);
    
    if (!data) {
      throw new NotFoundException(`Todo With ID ${id} Not Found`);
    }

    return await data.update({
      title: updateTodoDto.title,
      is_active: updateTodoDto.is_active
    });
  }

  async remove(id: number): Promise<void> {
    const data = await this.todoModel.findByPk(id);
    
    if (!data) {
      throw new NotFoundException(`Todo With ID ${id} Not Found`);
    }

    await data.destroy();
  }
}
