const questions =[
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a one-sentance description of your project:",
    },
    {
        type: "input",
        name: "about",
        message: "Please talk about your project",
    },
    {
        type: "input",
        name: "installation",
        message: "What are the installation instructions?",
    },
    {
        type: "input",
        name: "clone",
        message: "What is the link to clone the repo?",
    },
    {
        type: "input",
        name: "license",
        message: "Please select the license you used.",
        choices: [
            "GNU AGPLv3",
            "GNU GPLv3",
            "GNU LGPLv3",
            "MOzilla",
            "APache",
            "Boost",
        ],
    },
    {
        type: "input",
        name: "test",
        message: "Are there any testing protocols used for your project?",
    },
    {
        type: "input",
        name: "author",
        message: "What is the author's name ",
    },
    {
        type: "input",
        name: "userName",
        message: "What is your gitHub username?",
    },
    {
        type: "input",
        name: "userEmail",
        message: "What is your email?",
    },
    {
        type: "input",
        name: "URL",
        message: "What is the URL of the live site?",
    },
    {
        type: "input",
        name: "repo",
        message: "What is the URL of the github Repo?",
    },
];

module.exports ={
    question: questions,  
};