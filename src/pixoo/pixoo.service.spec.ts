import { Test, TestingModule } from '@nestjs/testing';
import { PixooService } from './pixoo.service';

describe('PixooService', () => {
  let service: PixooService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PixooService],
    }).compile();

    service = module.get<PixooService>(PixooService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
