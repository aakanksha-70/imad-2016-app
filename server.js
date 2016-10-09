var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articleone={
    title: 'Article One: Aakanksha kuamri',
    heading: 'Article One',
    date: 'Sep 5,2016',
    Content: `<p>
                        This is my first article. This content is showned here in article one.This is my first article. This content is showned here in article one.This is my first article. This content is showned here in article one.This is my first article. This content is showned here in article one.This is my first article. This content is showned here in article one.This is my first article. This content is showned here in article one.
                </p>
                <p>
                        This is my first article. This content is showned here in article one.This is my first article. This content is showned here in article one.This is my first article. This content is showned here in article one.This is my first article. This content is showned here in article one.This is my first article. This content is showned here in article one.This is my first article. This content is showned here in article one.
                  </p>
                  <p>
                        This is my first article. This content is showned here in article one.This is my first article. This content is showned here in article one.This is my first article. This content is showned here in article one.This is my first article. This content is showned here in article one.This is my first article. This content is showned here in article one.This is my first article. This content is showned here in article one.
                  </p>
                `
    
};

function createTemplate (data) {
    var title = data.title;
    var heading = data.heading;
    var content = data.content;
    var date = data.date;
    var htmlTemplete= `
    <html>
        <head>
            <title>
                ${title}
            </title>
            <meta rane="viewport" content="width=device-width, inttial-scale=1" />
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
            <body>
                <div>
                    <a href='/'>Home </a>
                </div>
                <hr/>
                <div class= "container">
                    <h3>
                        ${heading}
                    </h3>
                    <div>
                        ${date}
                    </div>
                    <div>
                        ${Content}
                    </div>
                </div>
            </body>
    </html>
`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one',function (req, res){
    res.send(createTemplate(articleOne));
});

app.get('/article-two',function (req, res){
     res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three',function (req, res){
     res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
