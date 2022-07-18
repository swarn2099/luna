import { Test, TestingModule } from '@nestjs/testing';
import { GoveeService } from './govee.service';

describe('GoveeService', () => {
  let service: GoveeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GoveeService],
    }).compile();

    service = module.get<GoveeService>(GoveeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
