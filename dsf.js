const express =require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello');
  console.log('Получилось')
});

app.get('/Zack', (req, res) => {
  res.send('age: 20 , car:BMW');
});

app.get('/Zack/car', (req, res) => {
  res.send('car:BMW');
});

app.get('/Zack/age', (req, res) => {
  res.send('age: 20');
});

app.get('/Nick', (req, res) => {
  res.send('age: 24 , car:Audi');
});

app.get('/Nick/car', (req, res) => {
  res.send('car:Audi');
});

app.get('/Nick/age', (req, res) => {
  res.send('age: 24');

function hop () {
    if (statusCode === 200) {
      console.log('хорошо')
    } else {
      console.log('плохо')
    }
  }
  hop ()
});

var appp = false

function ap () {
  app.listen(3000, () => console.log('Listening on port 3000...') && appp == true)
  
}

ap ()

function gep () {
  if (appp = true) {
    console.log('Успешно')
  } else {
    console.log('плохо')
  }
}

setTimeout(gep, 500)
