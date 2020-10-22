import { Controller, Get,Query } from '@nestjs/common';
import { midgardPoolDto } from 'src/Midgard.dtos/midgar.pooldetails.dto';
import { stakerPoolDataDTO } from 'src/Midgard.dtos/midgard.stakerPoolData.dto';
import { midgardTxnDto } from 'src/Midgard.dtos/midgard.txndetails.dto';
import { MidgardService } from './midgard.service';

@Controller('midgard')
export class MidgardController {
    constructor(
        private midgardService:MidgardService,
    ){}

    @Get('txn')
    gettxn(@Query() data:midgardTxnDto):Promise<any>{
        return this.midgardService.gettxn(data);
    }

    @Get('asset')
    getAssetInfo(@Query('asset') data:string):Promise<any>{
        return this.midgardService.getAssetInfo(data);
    }

    @Get('pools')
    getpools():Promise<any>{
        return this.midgardService.getPools();
    }

    @Get('pooldetails')
    getPoolsDetails(@Query() data:midgardPoolDto):Promise<any>{
        return this.midgardService.getPoolsDetails(data);
    }

    @Get('stakers')
    getStakers():Promise<any>{
        return this.midgardService.getStakers();
    }

    @Get('stakerdata')
    getStakerData(@Query('address') data:string):Promise<any>{
        return this.midgardService.getStakerData(data);
    }

    @Get('stakerpooldata')
    getStakerPoolData(@Query() data:stakerPoolDataDTO):Promise<any>{
        return this.midgardService.getStakerPoolData(data);
    }

}
