import { Test, TestingModule } from '@nestjs/testing';
import { HueController } from './hue.controller';
import { HueService } from './hue.service';

describe('HueController', () => {
  let controller: HueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HueController],
      providers: [HueService],
    }).compile();

    controller = module.get<HueController>(HueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
