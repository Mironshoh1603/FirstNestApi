
import { AppService } from './app.service';
import { Controller,HttpCode, Get,Req ,Res,Post, Header, Redirect, Query, Param, HostParam} from '@nestjs/common';
// import { Request } from '@nestjs/common/decorators/http/route-params.decorator';
import {Request, Response} from "express"



@Controller("cats")
export class CatsController{
  
  @Get()
  findAll(@Req() request:Request,@Res() response:Response):string{
    response.status(200).json({
        status:"Succes",
        data:{
            name:"Mironshoh",
            age:19
        }
    })
    return;
}
// @Get("docs")
//   @Redirect()
//   getDocs(@Query('version') version){
//     if(version && version==='5'){
//         return { url: 'https://nestjs.com' };;
        
//     }
//     else return "Error"
//   }
  @Get("/:id")
  findOne(@Param('id') id:string):string {
    console.log(id);
    return  `This is params id : ${id}`

  }
@Post()
@HttpCode(202)
// @Header('Cache-Control','none')
// @Redirect("https://google.com",301)

create() {
  return 'This action adds a new cat';
}

}



@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  
}
@Controller({host:":demo.localhost"})
export class AdminController{
    @Get()
    getInfo(@HostParam("account") account:string):string{
        return "This is Admin Page"+account;
    }
}
