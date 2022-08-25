import { Controller, Get, Post, Body, Patch, Param, Delete, UseFilters } from '@nestjs/common';
import { ActivityGroupsService } from './activity-groups.service';
import { CreateActivityGroupDto } from './dto/create-activity-group.dto';
import { UpdateActivityGroupDto } from './dto/update-activity-group.dto';

@Controller('activity-groups')
export class ActivityGroupsController {
  constructor(private readonly activityGroupsService: ActivityGroupsService) {}

  @Post()
  async create(@Body() createActivityGroupDto: CreateActivityGroupDto) {
    const data = await this.activityGroupsService.create(createActivityGroupDto);

    return {
      success: "Success",
      message: "Success",
      data
    }
  }

  @Get()
  async findAll() {
    const data = await this.activityGroupsService.findAll();

    return {
      success: "Success",
      message: "Success",
      data
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.activityGroupsService.findOne(+id);

    return {
      success: "Success",
      message: "Success",
      data
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateActivityGroupDto: UpdateActivityGroupDto) {
    const data = await this.activityGroupsService.update(+id, updateActivityGroupDto);

    return {
      success: "Success",
      message: "Success",
      data
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.activityGroupsService.remove(+id);

    return {
      success: "Success",
      message: "Success",
      data: {}
    }
  }
}
