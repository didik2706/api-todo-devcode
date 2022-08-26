import { Test, TestingModule } from '@nestjs/testing';
import { todosService } from './todos.service';

describe('todosService', () => {
  let service: todosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [todosService],
    }).compile();

    service = module.get<todosService>(todosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
