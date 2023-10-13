// mail.controller.ts
import { Controller, Post, Body, Req } from '@nestjs/common';
import { MailService } from './mail.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { SendMailDto } from './dto/sendmail.dto';
import { Request } from 'express'; // Request 객체를 가져오도록 수정

@Controller('mail')
@ApiTags('Mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post('send')
  //이건 나중에 바디가 아니라 딴걸로 리펙토링예정
  @ApiBody({
    type: SendMailDto,
  })
  async sendMail(
    @Req() req: Request, // Request 객체를 주입
    @Body('to') to: string,
    @Body('subject') subject: string,
    @Body('content') content: string,
  ) {
    await this.mailService.sendMail(to, subject, content, req);
  }
}
