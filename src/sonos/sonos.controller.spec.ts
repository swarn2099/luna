import { Test, TestingModule } from '@nestjs/testing';
import { SonosController } from './sonos.controller';
import { SonosService } from './sonos.service';

describe('SonosController', () => {
  let controller: SonosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SonosController],
      providers: [SonosService],
    }).compile();

    controller = module.get<SonosController>(SonosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
