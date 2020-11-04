// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  Table of Contents
  * [Description]${data.description}
  * [Github Repository]${data.githubRepo}
  * [Homepage Project]${data.homepage}
  * [Project Author]${data.author}
  * [Installation]${data.installation}
  * [Usage]${data.usage}
  * [Project Contributors]${data.contributors}
  * [License]${data.license}
  * [User Email]${data.email}


  When creating an open source project on GitHub, it’s important to have a high-quality README for the app. This should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions&mdash;this last part increases the likelihood that other developers will contribute to the success of the project. 

You can quickly and easily create a README file by using a command-line application to generate one. This allows the project creator to devote more time to working on the project.

Your task is to create a command-line application that dynamically generates a professional README.md file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer). Review the [Good README Guide](../../01-HTML-Git-CSS/04-Important/Good-README-Guide/README.md) as a reminder of everything that a high-quality, professional README should contain. 

`;
}

module.exports = generateMarkdown;
