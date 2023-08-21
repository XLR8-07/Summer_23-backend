import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserAuthDto } from './dto/playground.dto';
import { PlaygroundService } from './playground.service';

@Controller('playground')
export class PlaygroundController {

    constructor(private readonly playgroundService: PlaygroundService){}
    @Get()
    me(): any
    {
        return "ME API CAllED";
    }

    @Get('shariful')
    getMeShariful(): string
    {
        return "SHARIFUL IS SCARED! HIS ID IS 011181226"
    }

    @Post('auth')
    userAuth(@Body() userAuthBody: UserAuthDto): any
    {
        if(this.playgroundService.userAuth(userAuthBody))
        {
            return "LOGGED IN SUCCESSFULLY"
        }
        else
        {
            return "CREDENTIAL ERROR"
        }
    }
}
