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
`;
}

module.exports = generateMarkdown;
