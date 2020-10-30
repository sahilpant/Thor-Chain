import { Controller, Get,Query } from '@nestjs/common';
import { midgardPoolDto } from 'src/Midgard.dtos/midgar.pooldetails.dto';
import { stakerPoolDataDTO } from 'src/Midgard.dtos/midgard.stakerPoolData.dto';
import { midgardTxnDto } from 'src/Midgard.dtos/midgard.txndetails.dto';
import { MidgardService } from './midgard.service';
import { History } from 'src/Midgard.dtos/midgard.history.dto';
import { ApiBadRequestResponse, ApiOkResponse } from '@nestjs/swagger';

@Controller('midgard')
export class MidgardController {
    constructor(
        private midgardService:MidgardService,
    ){}

    @Get('txn')
    @ApiOkResponse()
    @ApiBadRequestResponse()
    gettxn(@Query() data:midgardTxnDto):Promise<string>{
        return this.midgardService.gettxn(data);
    }

    @Get('asset')
    @ApiOkResponse()
    @ApiBadRequestResponse()
    getAssetInfo(@Query('asset') data:string):Promise<string>{
        return this.midgardService.getAssetInfo(data);
    }

    @Get('pools')
    @ApiOkResponse()
    @ApiBadRequestResponse()
    getpools():Promise<string>{
        return this.midgardService.getPools();
    }

    @Get('pooldetails')
    @ApiOkResponse()
    @ApiBadRequestResponse()
    getPoolsDetails(@Query() data:midgardPoolDto):Promise<string>{
        return this.midgardService.getPoolsDetails(data);
    }

    @Get('stakers')
    @ApiOkResponse()
    @ApiBadRequestResponse()
    getStakers():Promise<string>{
        return this.midgardService.getStakers();
    }

    @Get('stakerdata')
    @ApiOkResponse()
    @ApiBadRequestResponse()
    getStakerData(@Query('address') data:string):Promise<string>{
        return this.midgardService.getStakerData(data);
    }

    @Get('stakerpooldata')
    @ApiOkResponse()
    @ApiBadRequestResponse()
    getStakerPoolData(@Query() data:stakerPoolDataDTO):Promise<string>{
        return this.midgardService.getStakerPoolData(data);
    }

    @Get('history')
    @ApiOkResponse()
    @ApiBadRequestResponse()
    getHistory(@Query() data: History): Promise<string> {
        return this.midgardService.getHistory(data);
    }

    @Get('earning')
    @ApiOkResponse()
    @ApiBadRequestResponse()
    getPoolEarningDetails(@Query('data') data:string):Promise<string>{
        return this.midgardService.getPoolEarningDetails(data)
    }

}
