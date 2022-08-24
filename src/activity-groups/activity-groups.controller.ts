import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ActivityGroupsService } from './activity-groups.service';
import { CreateActivityGroupDto } from './dto/create-activity-group.dto';
import { UpdateActivityGroupDto } from './dto/update-activity-group.dto';

@Controller('activity-groups')
export class ActivityGroupsController {
  constructor(private readonly activityGroupsService: ActivityGroupsService) {}

  @Post()
  create(@Body() createActivityGroupDto: CreateActivityGroupDto) {
    return this.activityGroupsService.create(createActivityGroupDto);
  }

  @Get()
  findAll() {
    return this.activityGroupsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.activityGroupsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateActivityGroupDto: UpdateActivityGroupDto) {
    return this.activityGroupsService.update(+id, updateActivityGroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.activityGroupsService.remove(+id);
  }
}
