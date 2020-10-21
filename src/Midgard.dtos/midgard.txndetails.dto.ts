import { IsNotEmpty } from "class-validator"

export class midgardTxnDto{

    @IsNotEmpty()
    txid : string

    @IsNotEmpty()
    offset : number
    
    @IsNotEmpty()
    limit : number
}