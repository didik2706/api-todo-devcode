import { Test, TestingModule } from '@nestjs/testing';
import { ActivityGroupsController } from './activity-groups.controller';
import { ActivityGroupsService } from './activity-groups.service';

describe('ActivityGroupsController', () => {
  let controller: ActivityGroupsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActivityGroupsController],
      providers: [ActivityGroupsService],
    }).compile();

    controller = module.get<ActivityGroupsController>(ActivityGroupsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
