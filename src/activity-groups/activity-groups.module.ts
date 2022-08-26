import { Module } from '@nestjs/common';
import { activitysService } from './activity-groups.service';
import { activitysController } from './activity-groups.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { activity } from './entities/activity-group.entity';

@Module({
  imports: [
    SequelizeModule.forFeature([activity])
  ],
  controllers: [activitysController],
  providers: [activitysService]
})
export class activitysModule {}
