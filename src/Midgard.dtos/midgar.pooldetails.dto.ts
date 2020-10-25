import { ApiProperty } from "@nestjs/swagger";
import { IsIn, IsNotEmpty, IsOptional } from "class-validator";

export class midgardPoolDto{

    @IsIn(['balances','simple','full'])
    @IsOptional()
    @ApiProperty({type:String})
    view:string

    @IsNotEmpty()
    @ApiProperty({type:String})
    asset:string
}
