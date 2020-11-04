// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  Table of Contents
  * [Description]${data.description}
  * [Github Repository]${data.githubRepo}
`;
}

module.exports = generateMarkdown;
