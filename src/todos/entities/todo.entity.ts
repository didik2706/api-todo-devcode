import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { activity } from "src/activity-groups/entities/activity-group.entity";

@Table
export class todo extends Model {
  @ForeignKey(() => activity)
  @Column({ allowNull: false })
  activity_group_id: number

  @Column({ allowNull: false })
  title: string

  @Column({ defaultValue: true })
  is_active?: boolean

  @Column({ type: DataType.ENUM, values: ["very-high", "high", "medium", "low", "very-low"], defaultValue: "very-high" })
  priority?: string
}
