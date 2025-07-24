import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MsgService } from './msg.service';
import { CreateMsgDto } from './dto/create-msg.dto';

@Controller('msg')
export class MsgController {
  constructor(private readonly msgService: MsgService) {}

  @Post('/send')
  create(@Body() createMsgDto: CreateMsgDto) {
    return this.msgService.create(createMsgDto);
  }
}