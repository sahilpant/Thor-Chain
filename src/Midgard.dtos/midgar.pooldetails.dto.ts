import { IsIn, IsNotEmpty, IsOptional } from "class-validator";

export class midgardPoolDto{

    @IsIn(['balances','simple','full'])
    @IsOptional()
    view:string

    @IsNotEmpty()
    asset:string
}
