import { CreateactivityDto } from './dto/create-activity-group.dto';
import { UpdateactivityDto } from './dto/update-activity-group.dto';
import { activity } from './entities/activity-group.entity';
export declare class activitysService {
    private activityGroupModel;
    constructor(activityGroupModel: typeof activity);
    create(createactivityDto: CreateactivityDto): Promise<activity>;
    findAll(): Promise<activity[]>;
    findOne(id: number): Promise<activity>;
    update(id: number, updateactivityDto: UpdateactivityDto): Promise<activity>;
    remove(id: number): Promise<void>;
}
