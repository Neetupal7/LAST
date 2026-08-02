const cds = require('@sap/cds');
const {Stringify} = require('querystring');

module.exports = cds.service.impl(async function (srv) {
   srv.on('printhelloworld', req => {
       console.log(req.data.input)
       return `${req.data.input} world`
   })

   
})

