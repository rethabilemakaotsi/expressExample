import express from 'express'

// create an express app
const app = express()
const port = +process.env.PORT || 4000

// Router
app.get('/', (req, res)=>{
    // res.status(200).json({
    //    msg: 'you\'re home' 
    res.json({
        status: res.statusCode,
        msg: 'you\'re home'
    })
    })
    app.get('/about', (req, res)=>{
        
        res.json({
            status: res.statusCode,
            msg: 'about Page'
        })
        })
        app.all('*', (req, res)=>{
        
            res.json({
                status: 404,
                msg: '404 page'
            })
            })



app.listen(port)