import { Module } from '@nestjs/common';
import { ActivityGroupsService } from './activity-groups.service';
import { ActivityGroupsController } from './activity-groups.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ActivityGroup } from './entities/activity-group.entity';

@Module({
  imports: [
    SequelizeModule.forFeature([ActivityGroup])
  ],
  controllers: [ActivityGroupsController],
  providers: [ActivityGroupsService]
})
export class ActivityGroupsModule {}
