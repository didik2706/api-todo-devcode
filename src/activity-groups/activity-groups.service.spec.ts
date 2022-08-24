import { Test, TestingModule } from '@nestjs/testing';
import { ActivityGroupsService } from './activity-groups.service';

describe('ActivityGroupsService', () => {
  let service: ActivityGroupsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActivityGroupsService],
    }).compile();

    service = module.get<ActivityGroupsService>(ActivityGroupsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
