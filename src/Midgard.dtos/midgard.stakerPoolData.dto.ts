import { IsNotEmpty } from "class-validator";

export class stakerPoolDataDTO {

    @IsNotEmpty()
    address:string

    @IsNotEmpty()
    asset:string

}