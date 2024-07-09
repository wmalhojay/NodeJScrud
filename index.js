const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const { v4 : uuid } = require('uuid');

app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

let comments = [
    { id:uuid(), user : 'user1', comment: 'comment1' },
    { id:uuid(), user : 'user2', comment: 'comment2' },
    { id:uuid(), user : 'user3', comment: 'comment3' },
    { id:uuid(), user : 'user4', comment: 'comment4' },
    { id:uuid(), user : 'user5', comment: 'comment5' }
]

app.get('/', (req,res) => {
    res.render('comments/index', { comments });
})

app.get('/comment/new', (req,res) => {
    res.render('comments/new', { comments});
})

app.post('/comment/add', (req, res) => {
    const { user, comment } = req.body;
    comments.push({ id: uuid(), user: user, comment: comment });
    res.redirect('/');
})

app.get('/comment/edit/:id', (req, res) => {
    const { id } = req.params;
    const user = comments.find(c => c.id === id);
    res.render('comments/modify', { user , comments });
})

app.patch('/comment/update/:id', (req, res) => {
    const { id } = req.params;
    const { comment } = req.body;
    const index = comments.findIndex(c => c.id === id);
    comments[index].comment = comment;
    res.redirect('/');
})

app.delete('/comment/delete/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/');
})

app.listen(8080, () => {
    console.log('---------------------APP IS RUNNING ON PORT 8080---------------------');
})
