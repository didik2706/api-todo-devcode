import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateactivityDto } from './dto/create-activity-group.dto';
import { UpdateactivityDto } from './dto/update-activity-group.dto';
import { activity } from './entities/activity-group.entity';

@Injectable()
export class activitysService {
  constructor(
    @InjectModel(activity)
    private activityGroupModel: typeof activity
  ){}
  
  async create(createactivityDto: CreateactivityDto): Promise<activity> {
    try {
      return await this.activityGroupModel.create({
        email: createactivityDto.email,
        title: createactivityDto.title
      });
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll(): Promise<activity[]> {
    try {
      return this.activityGroupModel.findAll({
        order: [["updatedAt", "DESC"]]
      });
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async findOne(id: number): Promise<activity> {
    const data = await this.activityGroupModel.findByPk(id);

    if (!data) {
      throw new NotFoundException(`Activity with ID ${id} Not Found`);
    }

    return data;
  }

  async update(id: number, updateactivityDto: UpdateactivityDto): Promise<activity> {
    const data = await this.activityGroupModel.findByPk(id);

    if (!data) {
      throw new NotFoundException(`Activity with ID ${id} Not Found`);
    }

    return await data.update({
      title: updateactivityDto.title
    });
  }

  async remove(id: number) {
    const data = await this.activityGroupModel.findByPk(id);

    if (!data) {
      throw new NotFoundException(`Activity with ID ${id} Not Found`);
    }
    
    await data.destroy();
  }
}
