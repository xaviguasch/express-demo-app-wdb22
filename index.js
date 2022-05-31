const express = require('express')
const app = express()

// app.use((req, res) => {
//   console.log('We got a new request!')
//   // res.send('Hello, we got your request!')
//   // res.send({ color: 'red' })
//   res.send('<h1>This is my webpage</h1>')
// })

app.get('/', (req, res) => {
  res.send('This is the homepage!')
})

app.get('/r/:subreddit', (req, res) => {
  const { subreddit } = req.params
  res.send(`<h1>Browsing the ${subreddit} sub</h1>`)
})

app.get('/r/:subreddit/:postId', (req, res) => {
  const { subreddit, postId } = req.params
  res.send(`<h1>Viewing post ID ${postId} on the ${subreddit} sub</h1>`)
})

app.get('/cats', (req, res) => {
  res.send('MEOW!!!!')
})
app.post('/cats', (req, res) => {
  res.send('This is a POST request to /cats')
})
app.get('/dogs', (req, res) => {
  res.send('WOOOOF!!!!')
})

app.get('/search', (req, res) => {
  const { q } = req.query
  res.send(`<h1>Search results for: ${q}</h1>`)
})

app.get('*', (req, res) => {
  res.send(`I don't know that path`)
})

app.listen(3000, () => {
  console.log('LISTENING ON PORT 3000!!!!')
})
