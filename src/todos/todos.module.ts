import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Todo } from './entities/todo.entity';
import { ActivityGroup } from 'src/activity-groups/entities/activity-group.entity';

@Module({
  imports: [
    SequelizeModule.forFeature([ActivityGroup, Todo])
  ],
  controllers: [TodosController],
  providers: [TodosService]
})
export class TodosModule {}
