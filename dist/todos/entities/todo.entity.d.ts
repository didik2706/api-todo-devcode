import { Model } from "sequelize-typescript";
export declare class todo extends Model {
    activity_group_id: number;
    title: string;
    is_active?: boolean;
    priority?: string;
}
