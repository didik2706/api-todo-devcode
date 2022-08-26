import { Test, TestingModule } from '@nestjs/testing';
import { activitysController } from './activity-groups.controller';
import { activitysService } from './activity-groups.service';

describe('activitysController', () => {
  let controller: activitysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [activitysController],
      providers: [activitysService],
    }).compile();

    controller = module.get<activitysController>(activitysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
