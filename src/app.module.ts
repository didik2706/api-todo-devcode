import { CacheModule, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config } from "dotenv";
import { ActivityGroupsModule } from './activity-groups/activity-groups.module';
import { ActivityGroup } from './activity-groups/entities/activity-group.entity';
import { TodosModule } from './todos/todos.module';
import { Todo } from './todos/entities/todo.entity';
config();

const {
  MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DBNAME
} = process.env;

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: MYSQL_HOST,
      port: +MYSQL_PORT,
      username: MYSQL_USER,
      password: MYSQL_PASSWORD,
      database: MYSQL_DBNAME,
      models: [ActivityGroup, Todo],
      autoLoadModels: true
    }),
    CacheModule.register({
      isGlobal: true
    }),
    ActivityGroupsModule,
    TodosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
