import { Column, HasMany, Model, Table } from "sequelize-typescript";
import { todo } from "src/todos/entities/todo.entity";

@Table
export class activity extends Model {
  @Column({ allowNull: false })
  email: string

  @Column({ allowNull: false })
  title: string

  @HasMany(() => todo)
  todos: todo[]
}
