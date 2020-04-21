//This code is structured as per the previous module of the course.

const express = require('express');
const path = require('path');
const port = 3000;

//accessing the database
const db = require('./config/mongoose');
const Note = require('./models/note')

//creating express app
const app = express();


//set up the view directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middleware
app.use(express.urlencoded({
    extended: true
}));
//access static files like html,css,js
app.use(express.static('assets'));


//controllers
app.get('/', function(req, res) {
    Note.find({}, function(err, notes) {
        if (err) {
            console.log('Error in Fetching');
            return;
        }
        return res.render('home', {
            title: 'Personal Notes',
            notes_list: notes
        });

    });
});

app.post('/create-note', function(req, res) {
    Note.create({ //we can also write req.body
        description: req.body.description,
        date: req.body.date,
        category: req.body.category
    }, function(err, newNote) {
        if (err) {
            console.log('error in creating a contact!');
            return;
        }
        console.log('*****', newNote);
        return res.redirect('back')
    })
});

app.get('/delete-note', function(req, res) {
    let id = req.query.id;

    Note.findByIdAndDelete(id, function(err) {
        if (err) {
            console.log('Error in deleting!');
            return;
        }
        return res.redirect('back')
    });

});

app.get('/about', function(req, res) {
    res.render('about');
})

app.get('*', function(req, res) {
    res.render('404')
})


//port listen
app.listen(port, function(err) {
    if (err) {
        console.log('Error!', err);
    }
    console.log('Running on port', port);
});