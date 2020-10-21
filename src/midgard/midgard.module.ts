import { Module } from '@nestjs/common';
import { MidgardController } from './midgard.controller';
import { MidgardService } from './midgard.service';

@Module({
  controllers: [MidgardController],
  providers: [MidgardService]
})
export class MidgardModule {}
