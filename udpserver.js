import dgram from 'dgram';

const server=dgram.createSocket("udp4")

server.on("message",(msg,rinfo)=>{
    console.log(`recived message: ${msg} from ${rinfo.address}: ${rinfo.port}`)


    const response=Buffer.from(`Hello udp client i got your message:${msg}`)

    server.send(response,rinfo.port,rinfo.address,(err)=>{
        if(err) console.log("error sending",err)
    })
})


server.on("listening",()=>{
    const address=server.address();
    console.log(`udp server listening on ${address.address}:${address.port}`)
})
server.bind(3000);