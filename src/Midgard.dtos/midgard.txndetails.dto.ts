import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"

export class midgardTxnDto{

    @IsNotEmpty()
    @ApiProperty({type:String})
    txid : string

    @IsNotEmpty()
    @ApiProperty({type:Number})
    offset : number
    
    @IsNotEmpty()
    @ApiProperty({type:Number})
    limit : number
}