// Server-side code (Node.js)
const http = require("http");

http
  .createServer((req, res) => {
    // Send initial part of the page
    res.write("<html><body>");
    res.write('<div id="content">');

    // Simulate delay for loading pagelets

    setTimeout(() => {
      res.write(
        `
        <head>
    <title>BigPipe by Adel</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #fbf3f2;
        }
        .header {
            background-color: #1c768f;
            color: white;
            padding: 10px;
            text-align: center;
        }               
    </style>
</head>
<body>
    <div class="header">
        <h1>BigPipe Implementation by Adel</h1>
    </div>           
</body>
        `
      );
    }, 1000);

    setTimeout(() => {
      res.write(`
      <div class="main">
    <!--post 1-->
    <h2 style="font-size: 100;">First post</h2>
    <p style="font-size:50;">Image of a black cat</p>
    <img  src="images/black-cat.jpg" alt="Black cat" width="1080" height="720" >
  </div>

      <style>
        .main {
         margin-top:-15px;
         height:70%;
         background-color: white;
         color: #333;
         text-align: center;
         padding-top:150px;
           }
      </style>
      `);
    }, 3000);

    setTimeout(() => {
      res.write(`
      <div class="main">
      <!--post 1-->
      <h2 style="font-size: 100;">First post</h2>
      <p style="font-size:50;">Image of a black cat</p>
      <img  src="images/black-cat.jpg" alt="Black cat" width="1080" height="720" >
    </div>

      <style>
        .main {
         margin-top:-15px;
         height:70%;
         background-color: white;
         color: #333;
         text-align: center;
         padding-top:150px;
           }
      </style>
      `);
    }, 3000);


    setTimeout(() => {
      res.write(`
      <div class="main">
    <!--post 2-->
    <h2 style="font-size: 100;">Second Post</h2>
    <p style="font-size:50;">Image of Netflix logo</p>
    <img  src="images/Netflix.png" alt="Netflix" width="1080" height="720" >
  </div>

      <style>
        .main {
         margin-top:-15px;
         height:70%;
         background-color: white;
         color: #333;
         text-align: center;
         padding-top:150px;
           }
      </style>
      `);
    }, 3000);

    setTimeout(() => {
      res.write(`
      <div class="main">
      <div class="main">
      <!--post 3-->
      <h2 style="font-size: 100;">Third post</h2>
      <p style="font-size:50;">Image of a facebook Logo</p>
      <img  src="images/Fb.png" alt="facebook" width="1080" height="720" >
    </div>

      <style>
        .main {
         margin-top:-15px;
         height:70%;
         background-color: white;
         color: #333;
         text-align: center;
         padding-top:150px;
           }
      </style>
      `);
    }, 3000);

    setTimeout(() => {
      res.write(`<div class="footer">
      Example for a footer
  </div>
      <style>
       .footer {
         background-color: #333;
         color: white;
         text-align: center;
         padding: 10px;
         position: fixed;
         bottom: 0;
         width: 100%;
    }
      </style>
  `);
    }, 2000);
  })
    .listen(8080);
