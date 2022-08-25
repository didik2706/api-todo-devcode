import { Column, HasMany, Model, Table } from "sequelize-typescript";
import { Todo } from "src/todos/entities/todo.entity";

@Table
export class ActivityGroup extends Model {
  @Column({ allowNull: false })
  email: string

  @Column({ allowNull: false })
  title: string

  @HasMany(() => Todo)
  todos: Todo[]
}
