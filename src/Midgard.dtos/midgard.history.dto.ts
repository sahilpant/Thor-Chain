import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsIn } from "class-validator";

export class History {

    @IsNotEmpty()
    @ApiProperty({type:String})
    pool: string

    @IsNotEmpty()
    @ApiProperty({type:String})
    @IsIn(["5min", "hour", "day", "week", "month", "year"])
    interval: string

    @IsNotEmpty()
    @ApiProperty({type:String})
    from: string
}