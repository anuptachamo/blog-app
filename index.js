const express = require ('express') //require express module
const app = express()      //calls express function to start new Express app


const path = require ('path')
app.use(express.static('public'))

    app.get('/', (req, res ) => {  //called when request to /index comes in
        res.sendFile(path.resolve(__dirname,'index.html'))
    })
    app.get('/about', (req, res ) => {  //called when request to /about comes in
        res.sendFile(path.resolve(__dirname,'about.html'))
    })

    app.get('/contact', (req, res ) => {  //called when request to /contact comes in
        res.sendFile(path.resolve(__dirname,'contact.html'))
    })
    app.get('/notfound', (req, res ) => {  //called when request to /notfound comes in
        res.sendFile(path.resolve(__dirname,'notfound.html'))
    })












app.listen(3000 , () =>{
    console.log("App listening on port 3000")
})