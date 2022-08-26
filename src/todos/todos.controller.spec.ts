import { Test, TestingModule } from '@nestjs/testing';
import { todosController } from './todos.controller';
import { todosService } from './todos.service';

describe('todosController', () => {
  let controller: todosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [todosController],
      providers: [todosService],
    }).compile();

    controller = module.get<todosController>(todosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
