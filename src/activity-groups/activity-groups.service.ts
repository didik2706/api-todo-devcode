import { Injectable } from '@nestjs/common';
import { CreateActivityGroupDto } from './dto/create-activity-group.dto';
import { UpdateActivityGroupDto } from './dto/update-activity-group.dto';

@Injectable()
export class ActivityGroupsService {
  create(createActivityGroupDto: CreateActivityGroupDto) {
    return 'This action adds a new activityGroup';
  }

  findAll() {
    return `This action returns all activityGroups`;
  }

  findOne(id: number) {
    return `This action returns a #${id} activityGroup`;
  }

  update(id: number, updateActivityGroupDto: UpdateActivityGroupDto) {
    return `This action updates a #${id} activityGroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} activityGroup`;
  }
}
