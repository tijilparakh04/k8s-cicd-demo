const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Set view engine
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Sample student data
let students = [
  { id: 1, name: 'John Doe', grade: 'A', subject: 'Math' },
  { id: 2, name: 'Jane Smith', grade: 'B', subject: 'Science' },
  { id: 3, name: 'Bob Johnson', grade: 'A', subject: 'History' }
];

// Routes
app.get('/', (req, res) => {
  res.render('index', { students });
});

app.get('/add', (req, res) => {
  res.render('add');
});

app.post('/add', (req, res) => {
  const newStudent = {
    id: students.length + 1,
    name: req.body.name,
    grade: req.body.grade,
    subject: req.body.subject
  };
  students.push(newStudent);
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Student Dashboard app listening at http://localhost:${port}`);
});
