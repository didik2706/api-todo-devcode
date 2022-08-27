import { Model } from "sequelize-typescript";
import { todo } from "src/todos/entities/todo.entity";
export declare class activity extends Model {
    email: string;
    title: string;
    todos: todo[];
}
