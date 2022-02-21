import { Test, TestingModule } from '@nestjs/testing';
import { CommonDtoService } from './common-dto.service';

describe('CommonDtoService', () => {
  let service: CommonDtoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommonDtoService],
    }).compile();

    service = module.get<CommonDtoService>(CommonDtoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
