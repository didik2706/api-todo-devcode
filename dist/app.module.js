"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const dotenv_1 = require("dotenv");
const activity_groups_module_1 = require("./activity-groups/activity-groups.module");
const activity_group_entity_1 = require("./activity-groups/entities/activity-group.entity");
const todos_module_1 = require("./todos/todos.module");
const todo_entity_1 = require("./todos/entities/todo.entity");
(0, dotenv_1.config)();
const { MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DBNAME } = process.env;
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'mysql',
                host: MYSQL_HOST,
                port: +MYSQL_PORT,
                username: MYSQL_USER,
                password: MYSQL_PASSWORD,
                database: MYSQL_DBNAME,
                models: [activity_group_entity_1.activity, todo_entity_1.todo],
                autoLoadModels: true
            }),
            common_1.CacheModule.register({
                isGlobal: true,
                ttl: 1000
            }),
            activity_groups_module_1.activitysModule,
            todos_module_1.todosModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map