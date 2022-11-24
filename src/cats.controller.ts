import { Controller,HttpCode, Get,Req ,Res,Post, Header, Redirect, Query} from '@nestjs/common';
// import { Request } from '@nestjs/common/decorators/http/route-params.decorator';
import {Request, Response} from "express"



@Controller("cats")
export class CatsController{
  @Get("docs")
  @Redirect('https://nestjs.com',302)
  getDocs(@Query('version') version){
    if(version && version==='5'){
        return {
            url:"https://docs.nestjs.com/v5/"
        }
    }
  }
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
@Post()
@HttpCode(202)
// @Header('Cache-Control','none')
// @Redirect("https://google.com",301)

create() {
  return 'This action adds a new cat';
}

}


