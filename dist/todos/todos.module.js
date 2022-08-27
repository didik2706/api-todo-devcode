"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todosModule = void 0;
const common_1 = require("@nestjs/common");
const todos_service_1 = require("./todos.service");
const todos_controller_1 = require("./todos.controller");
const sequelize_1 = require("@nestjs/sequelize");
const todo_entity_1 = require("./entities/todo.entity");
const activity_group_entity_1 = require("../activity-groups/entities/activity-group.entity");
let todosModule = class todosModule {
};
todosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forFeature([activity_group_entity_1.activity, todo_entity_1.todo])
        ],
        controllers: [todos_controller_1.todosController],
        providers: [todos_service_1.todosService]
    })
], todosModule);
exports.todosModule = todosModule;
//# sourceMappingURL=todos.module.js.map