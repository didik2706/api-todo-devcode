import { Module } from '@nestjs/common';
import { todosService } from './todos.service';
import { todosController } from './todos.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { todo } from './entities/todo.entity';
import { activity } from 'src/activity-groups/entities/activity-group.entity';

@Module({
  imports: [
    SequelizeModule.forFeature([activity, todo])
  ],
  controllers: [todosController],
  providers: [todosService]
})
export class todosModule {}
