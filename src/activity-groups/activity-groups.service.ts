import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateActivityGroupDto } from './dto/create-activity-group.dto';
import { UpdateActivityGroupDto } from './dto/update-activity-group.dto';
import { ActivityGroup } from './entities/activity-group.entity';

@Injectable()
export class ActivityGroupsService {
  constructor(
    @InjectModel(ActivityGroup)
    private activityGroupModel: typeof ActivityGroup
  ){}
  
  async create(createActivityGroupDto: CreateActivityGroupDto): Promise<ActivityGroup> {
    try {
      return await this.activityGroupModel.create({
        email: createActivityGroupDto.email,
        title: createActivityGroupDto.title
      });
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll(): Promise<ActivityGroup[]> {
    try {
      return this.activityGroupModel.findAll({
        order: [["updatedAt", "DESC"]]
      });
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async findOne(id: number): Promise<ActivityGroup> {
    const data = await this.activityGroupModel.findByPk(id);

    if (!data) {
      throw new NotFoundException(`Activity with ID ${id} Not Found`);
    }

    return data;
  }

  async update(id: number, updateActivityGroupDto: UpdateActivityGroupDto): Promise<ActivityGroup> {
    const data = await this.activityGroupModel.findByPk(id);

    if (!data) {
      throw new NotFoundException(`Activity with ID ${id} Not Found`);
    }

    return await data.update({
      title: updateActivityGroupDto.title
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
