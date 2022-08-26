import { CacheModule, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config } from "dotenv";
import { activitysModule } from './activity-groups/activity-groups.module';
import { activity } from './activity-groups/entities/activity-group.entity';
import { todosModule } from './todos/todos.module';
import { todo } from './todos/entities/todo.entity';
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
      models: [activity, todo],
      autoLoadModels: true
    }),
    CacheModule.register({
      isGlobal: true,
      ttl: 10
    }),
    activitysModule,
    todosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
