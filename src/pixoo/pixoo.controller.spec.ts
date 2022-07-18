import { Test, TestingModule } from '@nestjs/testing';
import { PixooController } from './pixoo.controller';
import { PixooService } from './pixoo.service';

describe('PixooController', () => {
  let controller: PixooController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PixooController],
      providers: [PixooService],
    }).compile();

    controller = module.get<PixooController>(PixooController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
