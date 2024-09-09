import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
//SE Eu Colocar dentro do controller abaixo, um '/teste' tipo o "/hello" abaixo - Preciso colocar ele na URL também
@Controller()
export class AppController {
  constructor(
    private  appService: AppService,
    private prismaService: PrismaService
  ) {}
    

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/hello')
  async store() {
    return await this.prismaService.user.findMany();
  }

  // @Get()
  // getOi(): string {
  //   return this.prismaService.teste();
  // }
  
}
