import axios from 'axios';

const data = await axios(`http://174.138.103.244:8080/v1/history/pools`,{params:{
    pool: "BNB.ETH-1C9",
    interval:"day",
    from:"1595462400000",
    to:"1603460097572"
}})

console.log(data.data)