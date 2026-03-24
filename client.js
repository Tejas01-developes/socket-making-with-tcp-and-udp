import net from 'net';
import readline from 'readline';

const client=new net.Socket();

client.connect(3000,"127.0.0.1",()=>{
    console.log("connected to the server")
})

client.on("data",(data)=>{
    console.log("message",data.toString())
})
const rd=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rd.on("line",(input)=>{
    client.write(input)
})
