//1. import json server
const jsonServer = require('json-server');
//2. create server application using json server
const mediaAppServer = jsonServer.create();
//3. create a middleware used by json server to handle requests
const middleware = jsonServer.defaults();
//4. create router : set up router for db.json file
const router = jsonServer.router('db.json');
//5. Applying middleware to server
mediaAppServer.use(middleware);
//6. Applying router to server
mediaAppServer.use(router);
//7. Define port
const PORT = 3000;
//8. Start server
mediaAppServer.listen(PORT,()=>{
    console.log(`Media App Server started on PORT ${PORT}`);
})