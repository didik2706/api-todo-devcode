import { Test, TestingModule } from '@nestjs/testing';
import { activitysService } from './activity-groups.service';

describe('activitysService', () => {
  let service: activitysService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [activitysService],
    }).compile();

    service = module.get<activitysService>(activitysService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
