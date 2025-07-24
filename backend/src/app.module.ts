import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MsgModule } from './msg/msg.module';

@Module({
  imports: [AuthModule, MsgModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
