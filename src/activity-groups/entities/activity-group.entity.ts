import { Column, Model, Table } from "sequelize-typescript";

@Table
export class ActivityGroup extends Model {
  @Column({ allowNull: false })
  email: string

  @Column({ allowNull: false })
  title: string
}
