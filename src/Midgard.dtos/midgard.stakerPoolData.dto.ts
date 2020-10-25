import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class stakerPoolDataDTO {

    @IsNotEmpty()
    @ApiProperty({type:String})
    address:string

    @IsNotEmpty()
    @ApiProperty({type:String})
    asset:string

}