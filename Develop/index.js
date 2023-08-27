// TODO: Include packages needed for this application
//vairables for Qs:
const inquirer = require("inquirer")
const fs =require("fs")
const util = require("util")

//vairables fpr connecting modsules and app
const generateMarkdown = require("./utils/generateMarkdown")
const licenseBadge = require("./utils/licenseBadge")
const questions = require("./utils/questions")
const writeFileAsync = util.promisify(fs.writeFile)

async function init() {
    try {
        const answers= await inquirer.createPromptModule(questions)
        answers.licenseBadge = licenseBadge(answers.license)
        let readMeData = generateMarkdown(answers)
        await writeFileAsync("created-REAME.md", readMeData)
    } catch (err) {
        throw err
    }
}

// Function call to initialize app
init();
