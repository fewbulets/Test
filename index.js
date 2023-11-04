/* This is a simple server that respond on port 5500
*/
const path = require('path')
const express = require('express')
const app = express()

// other express settings
app.use(express.static(path.resolve(__dirname, './Public')))
app.use(express.json())

app.get('*', (req, res) => {
  res.sendFile('index.html')
})

// Run the app:
const port = process.env.PORT || 5500
async function start() {
  try {
    // start server
    app.listen(port, () => {
      console.log(`Server listening on port ${port}...`);
    })
  } catch (error) {
    console.log('Error: ', error.message)
  }
}

start()
