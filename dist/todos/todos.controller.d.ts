import { todosService } from './todos.service';
import { CreatetodoDto } from './dto/create-todo.dto';
import { UpdatetodoDto } from './dto/update-todo.dto';
export declare class todosController {
    private readonly todosService;
    constructor(todosService: todosService);
    create(createtodoDto: CreatetodoDto): Promise<{
        status: string;
        message: string;
        data: import("./entities/todo.entity").todo;
    }>;
    findAll(id: number): Promise<{
        status: string;
        message: string;
        data: {
            id: any;
            title: string;
            activity_group_id: number;
            is_active: string;
            priority: string;
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
            title: string;
            activity_group_id: number;
            is_active: string;
            priority: string;
            created_at: any;
            updated_at: any;
            deleted_at: any;
        };
    }>;
    update(id: string, updatetodoDto: UpdatetodoDto): Promise<{
        status: string;
        message: string;
        data: {
            id: any;
            title: string;
            activity_group_id: number;
            is_active: string;
            priority: string;
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
