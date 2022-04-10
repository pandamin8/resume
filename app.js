const express = require('express')
const app = express()

app.get('', (req, res) => {
    res.sendFile(__dirname + '/resume.html')
})

const PORT = process.env.PORT || 8888 
app.listen(PORT, () => {
    console.log('server is running on port ' + PORT )
})