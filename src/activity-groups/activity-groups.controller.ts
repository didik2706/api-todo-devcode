import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, CacheInterceptor, NotFoundException } from '@nestjs/common';
import { activitysService } from './activity-groups.service';
import { CreateactivityDto } from './dto/create-activity-group.dto';
import { UpdateactivityDto } from './dto/update-activity-group.dto';

@UseInterceptors(CacheInterceptor)
@Controller('activity-groups')
export class activitysController {
  constructor(private readonly activityGroupsService: activitysService) {}

  @Post()
  async create(@Body() createactivityDto: CreateactivityDto) {
    const data = await this.activityGroupsService.create(createactivityDto);

    return {
      status: "Success",
      message: "Success",
      data: {
        id: data.id,
        email: data.email,
        title: data.title,
        created_at: data.createdAt,
        updated_at: data.updatedAt      
      }
    }
  }

  @Get()
  async findAll() {
    const data = await this.activityGroupsService.findAll();

    return {
      status: "Success",
      message: "Success",
      data: data.map(d => {
        return {
          id: d.id,
          email: d.email,
          title: d.title,
          created_at: d.createdAt,
          updated_at: d.updatedAt,
          deleted_at: null
        }
      })
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.activityGroupsService.findOne(+id);

    return {
      status: "Success",
      message: "Success",
      data: {
        id: data.id,
        email: data.email,
        title: data.title,
        created_at: data.createdAt,
        updated_at: data.updatedAt,
        deleted_at: null,
      }
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateactivityDto: UpdateactivityDto) {
    const data = await this.activityGroupsService.update(+id, updateactivityDto);

    return {
      status: "Success",
      message: "Success",
      data: {
        id: data.id,
        email: data.email,
        title: data.title,
        created_at: data.createdAt,
        updated_at: data.updatedAt,
        deleted_at: null
      }
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.activityGroupsService.remove(+id);

    return {
      status: "Success",
      message: "Success",
      data: {}
    }
  }
}
