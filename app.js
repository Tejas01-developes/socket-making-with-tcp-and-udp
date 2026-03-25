import net from 'net';


const clients = [];
const server = net.createServer((socket) => {
    console.log("client connected")

    clients.push(socket);
    console.log(server);


    socket.on("data", (data) => {
        const message = data.toString().trim();
        console.log("recived", message)

        clients.forEach((client) => {
            if (client !== socket) {
                client.write(message + "\n");
            }
        })
    })

   

    

    socket.on("end", () => {
        console.log("client disconnected")
    })

    socket.on("error", (err) => {
        console.log("error", err.message)
    })
})


server.listen(3000, () => {
    console.log("server started on the port 3000")
})