import { Global, Module } from '@nestjs/common';
import { PrismaService } from './extended-prisma.service';
@Global()
@Module({
  controllers: [],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
