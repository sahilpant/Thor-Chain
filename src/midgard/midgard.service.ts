import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { midgardTxnDto } from 'src/Midgard.dtos/midgard.txndetails.dto';
import midgard from '@thorchain/asgardex-midgard';
import axios from 'axios';
import { midgardPoolDto } from 'src/Midgard.dtos/midgar.pooldetails.dto';
import { stakerPoolDataDTO } from 'src/Midgard.dtos/midgard.stakerPoolData.dto';
import { History } from 'src/Midgard.dtos/midgard.history.dto';

@Injectable()
export class MidgardService {
    
    private logger = new Logger;


    async getBaseURL():Promise<string>{
        try {
            
            const baseURL = await midgard('chaosnet',true);
            this.logger.log(baseURL);
            return baseURL;
            
        } catch (error) {
            throw new BadRequestException('Cannot fetch baseURL');
        }

    }

    async gettxn(data:midgardTxnDto):Promise<any>{

            
        const baseURL = await this.getBaseURL();
        try{
            const txn = await axios.get(`${baseURL}/v1/txs`,{params:
            {
                'txid': data.txid,
                'offset' : data.offset,
                'limit' : data.limit
            }
            })
            return txn.data;
        }
        catch(err){
            throw new BadRequestException('Error in axios request');
        }
    }
    async getAssetInfo(data:string):Promise<any>{
        const baseURL = await this.getBaseURL();
        const asset = await axios.get(`${baseURL}/v1/assets`,{params:
            {
                'asset': data
            }
        })
        try {

            return asset.data;
        } catch (err) {
            throw new BadRequestException('Asset not fetched')
        }
    }

    async getPools():Promise<any>{
        const baseURL = await this.getBaseURL();

        try {
            const pool = await axios(`${baseURL}/v1/pools`)
            return pool.data;
        } catch (error) {
            throw new BadRequestException('No Pools found');
        }
    }


    async getPoolsDetails(data:midgardPoolDto):Promise<any>{
        const baseURL = await this.getBaseURL();

        try {
            const pool = await axios(`${baseURL}/v1/pools/detail`,{params:{
                'view': data.view,
                'asset': data.asset
            }})
            return pool.data
        } catch (error) {
            
            throw new BadRequestException('Pool deatils not found');

        }

    }

    async getStakers():Promise<any>{
        const baseURL = await this.getBaseURL();

        try{
            const stakers = await axios(`${baseURL}/v1/stakers`);
            return stakers.data;
        }catch(err){
            throw new BadRequestException('Stakers not found');
        }
    }

    async getStakerData(data:string):Promise<any>{
        const baseURL = await this.getBaseURL();

        try {
            const stakerdata = await axios(`${baseURL}/v1/stakers/${data}`)
            return stakerdata.data;
        } catch (error) {
            throw new BadRequestException(`staker data not found`);
        }
    }

    async getStakerPoolData(data:stakerPoolDataDTO):Promise<any>{
        const baseURL = await this.getBaseURL();

        try {
            const stakerdata = await axios(`${baseURL}/v1/stakers/${data.address}/pools`,{params:{
                'asset':data.asset
            }})
            return stakerdata.data;
        } catch (error) {
            throw new BadRequestException(`staker data not found`);
        }
    }

    async getHistory(data: History): Promise<any> {
        const baseURL = await this.getBaseURL();

        console.log(new Date(data.from).getTime());

        try {
            const history = await axios(`${baseURL}/v1/history/pools`, {
                params: {
                    "pool": data.pool,
                    "interval": data.interval,
                    "from": new Date(data.from).getTime(),
                    "to": Date.now()
                }
            })
            return history.data;
        }
        catch (err) {
            throw new BadRequestException("history not found");
        }
    }

}

