// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  Table of Contents
  * [Description]
  *
`;
}

module.exports = generateMarkdown;
