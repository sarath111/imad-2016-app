var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleThree = {
    title : "Article Three",
    heading : 'Article Three by Sarath',
    date : '30-OCT-2016',
    content : `<p>
                THIS IS RELATED TO ARTICLE THREE of constitution.THIS IS RELATED TO ARTICLE THREE of constitution.THIS IS RELATED TO ARTICLE TWO of constitution.THIS IS RELATED TO ARTICLE THREE of constitution.THIS IS RELATED TO ARTICLE THREE of constitution.THIS IS RELATED TO ARTICLE THREE of constitution.THIS IS RELATED TO ARTICLE THREE of constitution.
            </p>
            <p>
                 THIS IS RELATED TO ARTICLE THREE of constitution.THIS IS RELATED TO ARTICLE THREE of constitution.THIS IS RELATED TO ARTICLE TWO of constitution.THIS IS RELATED TO ARTICLE THREE of constitution.THIS IS RELATED TO ARTICLE THREE of constitution.THIS IS RELATED TO ARTICLE THREE of constitution.THIS IS RELATED TO ARTICLE THREE of constitution.
            </p>
            <p>
                 THIS IS RELATED TO ARTICLE THREE of constitution.THIS IS RELATED TO ARTICLE THREE of constitution.THIS IS RELATED TO ARTICLE TWO of constitution.THIS IS RELATED TO ARTICLE THREE of constitution.THIS IS RELATED TO ARTICLE THREE of constitution.THIS IS RELATED TO ARTICLE THREE of constitution.THIS IS RELATED TO ARTICLE THREE of constitution.
            </p>`
};

function createTemplate(data) {
    var title   = data.title;
    var heading = data.heading;
    var date    = data.date;
    var content = data.content;
    var htmlTemplate = 
    `<html>
        <head>
            <title>
                ${title}
            </title>
             <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div>
                <a href ="/">Home</a>
            </div>
            <hr/>
            <h3>
                ${heading}
            </h3>
            <div>
                ${date}
            </div>
            <div>
                ${content}
            </div>
        </body>
        
    </html>`
    ;
    return htmlTemplate;
}

var counter=0;
app.get('/counter', function (req, res) {
  counter=counter+1;
  res.send(counter.toString());
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/articleone', function (req, res) {
  //res.send("Article one is served");
  res.sendFile(path.join(__dirname, 'ui', 'articleone.html'));
});

app.get('/articletwo', function (req, res) {
  //res.send("Article two is served");
  res.sendFile(path.join(__dirname, 'ui', 'articletwo.html'));
});

app.get('/articlethree', function (req, res) {
   res.send(createTemplate(articleThree));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

var names = [];
app.get('/submit-name/:name',function(req,res){
    var name = req.params.name;
    names.push(name);
    //JSON -- JAVA script Object Notation.converts jasvascript objects into strings
    res.send(names);
    //res.send(JSON.stringify(names));
    
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
