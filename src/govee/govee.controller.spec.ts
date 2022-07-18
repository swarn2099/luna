import { Test, TestingModule } from '@nestjs/testing';
import { GoveeController } from './govee.controller';
import { GoveeService } from './govee.service';

describe('GoveeController', () => {
  let controller: GoveeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GoveeController],
      providers: [GoveeService],
    }).compile();

    controller = module.get<GoveeController>(GoveeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
