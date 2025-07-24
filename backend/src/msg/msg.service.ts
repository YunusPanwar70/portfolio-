import { Injectable } from '@nestjs/common';
import { CreateMsgDto } from './dto/create-msg.dto';
import { UpdateMsgDto } from './dto/update-msg.dto';

@Injectable()
export class MsgService {
  create(createMsgDto: CreateMsgDto) {
    return 'This action adds a new msg';
  }

  findAll() {
    return `This action returns all msg`;
  }

  findOne(id: number) {
    return `This action returns a #${id} msg`;
  }

  update(id: number, updateMsgDto: UpdateMsgDto) {
    return `This action updates a #${id} msg`;
  }

  remove(id: number) {
    return `This action removes a #${id} msg`;
  }
}
