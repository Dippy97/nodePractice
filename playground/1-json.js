const fs = require('fs')
const dataBuffer = fs.readFileSync('1-json.json')
const stringData = dataBuffer.toString()
const data = JSON.parse(stringData)
const user= {
    name:'dip'
}
user.name = 'dip'
const stringUser = user.toString()
fs.writeFileSync('1-json.json', stringUser)