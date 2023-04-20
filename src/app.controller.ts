import { Controller, Get, Redirect, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  @Redirect('https://www.sharering.network', 302)
  RedirectLink(@Param('id') id: string) {
    return this.appService.RedirectLink(id);
  }
}
