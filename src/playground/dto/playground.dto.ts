import { ApiProperty } from "@nestjs/swagger";

export class UserAuthDto
{
    @ApiProperty({
        name: "email",
        description: "User's Email",
        type: String,
        example: "dev@gmail.com"
    })
    readonly email: string;

    @ApiProperty({
        name: "password",
        description: "User's password",
        type: String,
        example: "abcd"
    })
    readonly password: string;

}