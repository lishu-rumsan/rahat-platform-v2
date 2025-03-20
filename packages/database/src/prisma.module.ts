import { Module } from '@nestjs/common';
import { PrismaService } from '@rumsan/prisma';

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
