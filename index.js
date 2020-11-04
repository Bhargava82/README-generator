const inquirer = require("inquirer");
const fs = require("fs");
const utility = require("util");

const generateMarkdown = require ('./utils/generateMarkdown');

// const writeFileAsync = utility.promisify(fs.writeFile);

const promptUser = () => {
return inquirer.prompt([
        {
            type: 'input',
            message: "what is the title of your project?",
            name: 'title',
        },
        {
            type: "input",
            message: "what is the name of your github repo?",
            name: "githubRepo",
        },
        {
            type: "input",
            message: "What is the description of your project?",
            name: "description",
        },
        {
            type: "input",
            message: "What is your Homepage Project?",
            name: "homepage",
        },
])
// .then((response) => {
// const htmlTemplate = `<!DOCTYPE html>
// <html>
//     <head>
//         <meta charset="utf-8">
//         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//         <title></title>
//         <meta name="description" content="">
//         <meta name="viewport" content="width=device-width, initial-scale=1">
//         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
//     </head>
//     <body>
//         <div class="jumbotron">
//             <h1 class="display-4">${response.name}</h1>
//             <p class="lead"> ${response.location}</p>
//             <hr class="my-4">
//             <p>${response.github}</p>
//             <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
//           </div>
//         <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
//         <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>    
//     </body>
// </html>`;
// const fileName = `${response.name.toLowerCase().split(" ").join('-')}.html`;
// fs.writeFile(fileName,htmlTemplate, (err) => err ? console.log(err) : console.log("success"));
// // writeFileAsync(fileName, htmlTemplate).then(()=> console.log("success")).catch(error => console.log(error));
// });
        .then(function (data) {
            console.log(data);
            writeMarkdown(data)
        });
};

function writeMarkdown(data) {
    fs.writeFile("README.md", generateMarkdown(data), null, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Successfully wrote ReadMe!")
    });
};
promptUser();