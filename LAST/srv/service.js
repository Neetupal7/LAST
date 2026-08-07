const cds = require('@sap/cds');
const {Stringify} = require('querystring');

module.exports = cds.service.impl(async function (srv) {
   srv.on('printhelloworld', req => {
       console.log(req.data.input)
       return `${req.data.input} world`
   })

   srv.on('addition', req => {
       console.log(req.data)
       let result = req.data.num1 + req.data.num2;
       return result
   })

   srv.on('myfunction', req =>{
    let result={}
    if(req.data.category==1){
        result.product ='BMW' ,
        result.price ='1200 USD ',
        result.location='new delhi'
    }else {
        result.product='audi',
        result.stock= 120,
        result.priceArray =[
            {
                "price": 475767,
                "discount":"20%"
            }
        ]
    }
    console.log(result);
    return result;
   }

   )
})

