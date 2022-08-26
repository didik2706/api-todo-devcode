import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { activity } from 'src/activity-groups/entities/activity-group.entity';
import { CreatetodoDto } from './dto/create-todo.dto';
import { UpdatetodoDto } from './dto/update-todo.dto';
import { todo } from './entities/todo.entity';

@Injectable()
export class todosService {
  constructor(
    @InjectModel(todo)
    private todoModel: typeof todo,
    @InjectModel(activity)
    private activityGroupModel: typeof activity
  ){}

  async create(createtodoDto: CreatetodoDto): Promise<todo> {
    const data = await this.activityGroupModel.findOne({
      where: { id: createtodoDto.activity_group_id }
    });

    if (!data) {
      throw new NotFoundException(`todo With ID ${createtodoDto.activity_group_id} Not Found`)
    }

    return this.todoModel.create({
      activity_group_id: createtodoDto.activity_group_id,
      title: createtodoDto.title
    });
  }

  findAll(id?: number): Promise<todo[]> {
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

  async findOne(id: number): Promise<todo> {
    const data = await this.todoModel.findByPk(id);
    
    if (!data) {
      throw new NotFoundException(`Todo with ID ${id} Not Found`)
    }

    return data;
  }

  async update(id: number, updatetodoDto: UpdatetodoDto): Promise<todo> {
    const data = await this.todoModel.findByPk(id);
    
    if (!data) {
      throw new NotFoundException(`Todo with ID ${id} Not Found`);
    }

    return await data.update({
      title: updatetodoDto.title,
      is_active: updatetodoDto.is_active
    });
  }

  async remove(id: number): Promise<void> {
    const data = await this.todoModel.findByPk(id);
    
    if (!data) {
      throw new NotFoundException(`Todo with ID ${id} Not Found`);
    }

    await data.destroy();
  }
}
