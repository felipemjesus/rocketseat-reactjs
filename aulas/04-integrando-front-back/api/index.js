import http from 'node:http'

const server = http.createServer(async (req, res) => {
    return res.writeHead(200).end('Rocketseat ReactJS!')
})

server.listen(9001, () => {
    console.log('HTTP server running on http://localhost:9001') 
})
