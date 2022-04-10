const express = require('express')
const app = express()

app.get('', (req, res) => {
    res.sendFile(__dirname + '/resume.html')
})

const PORT = 8888 || process.env.PORT
app.listen(PORT, () => {
    console.log('server is running on port ' + PORT )
})