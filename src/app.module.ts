import { CacheModule, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config } from "dotenv";
import { ActivityGroupsModule } from './activity-groups/activity-groups.module';
import { ActivityGroup } from './activity-groups/entities/activity-group.entity';
config();

const {
  MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_PASS, MYSQL_NAME
} = process.env;

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: MYSQL_HOST,
      port: +MYSQL_PORT,
      username: MYSQL_USER,
      password: MYSQL_PASS,
      database: MYSQL_NAME,
      models: [ActivityGroup],
      autoLoadModels: true
    }),
    CacheModule.register({
      isGlobal: true
    }),
    ActivityGroupsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
