import { activitysService } from './activity-groups.service';
import { CreateactivityDto } from './dto/create-activity-group.dto';
import { UpdateactivityDto } from './dto/update-activity-group.dto';
export declare class activitysController {
    private readonly activityGroupsService;
    constructor(activityGroupsService: activitysService);
    create(createactivityDto: CreateactivityDto): Promise<{
        status: string;
        message: string;
        data: {
            id: any;
            email: string;
            title: string;
            created_at: any;
            updated_at: any;
        };
    }>;
    findAll(): Promise<{
        status: string;
        message: string;
        data: {
            id: any;
            email: string;
            title: string;
            created_at: any;
            updated_at: any;
            deleted_at: any;
        }[];
    }>;
    findOne(id: string): Promise<{
        status: string;
        message: string;
        data: {
            id: any;
            email: string;
            title: string;
            created_at: any;
            updated_at: any;
            deleted_at: any;
        };
    }>;
    update(id: string, updateactivityDto: UpdateactivityDto): Promise<{
        status: string;
        message: string;
        data: {
            id: any;
            email: string;
            title: string;
            created_at: any;
            updated_at: any;
            deleted_at: any;
        };
    }>;
    remove(id: string): Promise<{
        status: string;
        message: string;
        data: {};
    }>;
}
