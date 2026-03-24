import dgram from 'dgram';
import { stdin, stdout } from 'process';
import readline from 'readline';


const client=dgram.createSocket("udp4");


const rl=readline.createInterface({
    input:stdin,
    output:stdout
})


rl.on("line",(input)=>{
    const message=Buffer.from(input);


    client.send(message,3000,"127.0.0.1",(err)=>{
        if(err) console.log("error",err)
    })
})


client.on("message",(msg,rinfo)=>{
    console.log(`server says :${msg}`)
})