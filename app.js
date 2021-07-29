const express = require ("express")
const app = express ()
app.listen (process.env.PORT || 3000, ()=>{
    console.log ("La app esta funcionando en la url http://localhost:3000")
})
const path =require ("path")
app.get ("/404", function (req, res){
    res.send ("Error página no encontrada")
})
app.get('/', (req, res) => {
    res.sendFile (path.join (__dirname, '/views/home.html'))
});
app.get('/register', (req, res) => {
    res.sendFile (path.join (__dirname, '/views/register.html'))
});
const publicPath = path.resolve(__dirname,"./public")
app.use (express.static('public'))
app.get('/', (req, res) => {
    res.sendFile (path.join (__dirname, '/public/image/image'))
});
