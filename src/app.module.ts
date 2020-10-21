import { Module } from '@nestjs/common';
import { MidgardModule } from './midgard/midgard.module';

@Module({
  imports: [MidgardModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
