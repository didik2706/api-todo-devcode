import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { ActivityGroup } from "src/activity-groups/entities/activity-group.entity";

@Table
export class Todo extends Model {
  @ForeignKey(() => ActivityGroup)
  @Column({ allowNull: false })
  activity_group_id: number

  @Column({ allowNull: false })
  title: string

  @Column({ defaultValue: false })
  is_active?: boolean

  @Column({ allowNull: false, type: DataType.ENUM, values: ["very-high", "high", "medium", "low", "very-low"] })
  priority: string
}
