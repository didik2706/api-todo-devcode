import { activity } from 'src/activity-groups/entities/activity-group.entity';
import { CreatetodoDto } from './dto/create-todo.dto';
import { UpdatetodoDto } from './dto/update-todo.dto';
import { todo } from './entities/todo.entity';
export declare class todosService {
    private todoModel;
    private activityGroupModel;
    constructor(todoModel: typeof todo, activityGroupModel: typeof activity);
    create(createtodoDto: CreatetodoDto): Promise<todo>;
    findAll(id?: number): Promise<todo[]>;
    findOne(id: number): Promise<todo>;
    update(id: number, updatetodoDto: UpdatetodoDto): Promise<todo>;
    remove(id: number): Promise<void>;
}
