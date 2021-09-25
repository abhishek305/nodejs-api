const express = require('express')
const app = express()
let cors = require('cors')

app.use(cors())

const port = process.env.PORT || 3000

app.get('/', (req, res) => {

    if (req.query.name) {
        res.json({
            statusCode: 200,
            message: 'success',
            response: `Happy Birthday, ${req.query.name} !`
        })

    } else {
        res.json({
            statusCode: 400,
            message: `error`,
            response: 'Please provide name as query param.'
        })
    }

})

app.listen(port, () => {
    console.log('listening on 3000')
})