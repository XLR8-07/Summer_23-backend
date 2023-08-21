import { Injectable } from '@nestjs/common';
import { UserAuthDto } from './dto/playground.dto';

@Injectable()
export class PlaygroundService {
    private readonly email: string = "abcd@gmail.com"
    private readonly password: string = "123456"
    userAuth(userAuthBody: UserAuthDto)
    {
        if(userAuthBody.email == this.email && userAuthBody.password == this.password)
        {
            return true
        }
        return false
    }
}
