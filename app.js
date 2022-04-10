const express = require('express')
const app = express()

app.use('', (req, res) => {
    res.sendFile(__dirname + '/resume.html')
})

const PORT = 8888
app.listen(PORT, () => {
    console.log('server is running on port ' + PORT )
})