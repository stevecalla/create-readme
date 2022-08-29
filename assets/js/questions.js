const { licenseList } = require("./badges");

const promptQuestion = [
  {
    prefix: "⠋🟡 1)",
    type: "input",
    message: "What is the title of your project?",
    name: "title",
    default: "Create Readme",
    suffix: " 🟡",
    validate(answer) {
      if (!answer) {
        return "Please, provide the project title!";
      }
      return true;
    },
    filter(answer) {
      return answer.trim();
    },
  },
  {
    prefix: "⠋🟡 2)",
    type: "input",
    message: "What is the description of your project?",
    name: "description",
    default: "The app will create a professional README for a project. A user answers each question. If a question is not answered a header for that section will appear in the README. After completion of all prompts, the README will be available in the current directory and should be edited to include the final content.",
    suffix: " 🟡",
    filter(answer) {
      return answer.trim();
    },
  },
  {
    prefix: "⠋🟡 3)",
    type: "input",
    message: "What are the steps required to install your project?",
    name: "instructions",
    default: "(1) Fork the repo, (2) Clone the forked repo locally, (3) Run \"npm install\" (to install dependencies), (4) Run \"node index.js\" (from the /assets/js directory).",
    suffix: " 🟡",
    filter(answer) {
      return answer.trim();
    },
  },
  {
    prefix: "⠋🟡 4)",
    type: "input",
    message: "Provide instructions and examples for use.",
    name: "usage",
    default: "This app creates a readme file based on user input.",
    suffix: " 🟡",
    filter(answer) {
      return answer.trim();
    },
  },
  {
    prefix: "⠋🟡 5)",
    type: "input",
    message: "Please detail the most important features?",
    name: "features",
    default: "This app includes features such as validation for required information and email, default answers for image, video and contribution, license badge append, instructions at the start and end of the program, modified question prefix and suffix, modular breakdown of the code (into section such as questions, answers, write to file et al), use of inquirer filter to trim and additional sections in the readme template to allow the user to customize the readme.",
    suffix: " 🟡",
    filter(answer) {
      return answer.trim();
    },
  },
  {
    prefix: "⠋🟡 6)",
    type: "input",
    message: "Please detail plans for future enhancements?",
    name: "enhancements",
    default: "This app can be enhanced by adding more detail instructions, functionality to upload images and video files, allow users to select sections of the readme then build the readme dynamically using the fs append feature and more.",
    suffix: " 🟡",
    filter(answer) {
      return answer.trim();
    },
  },
  {
    prefix: "⠋🟡 7)",
    type: "input",
    message:
      "Please add the path/URL for a static image of the project (i.e. ../images/example-image.png)?",
    name: "staticImage",
    default: "./assets/images/create-readme.png",
    suffix: " 🟡",
    filter(answer) {
      return answer.trim();
    },
  },
  {
    prefix: "⠋🟡 8)",
    type: "input",
    message:
      "Please add the video link for the project (i.e. https://www.youtube.com/watch?v=_hr9SKZC5Rc&feature=youtu.be)?",
    name: "videoLink",
    default: "https://www.youtube.com/watch?v=_hr9SKZC5Rc&feature=youtu.be",
    suffix: " 🟡",
    filter(answer) {
      return answer.trim();
    },
  },
  {
    prefix: "⠋🟡 9)",
    type: "input",
    message:
      "Please add the path/URL for a video GIF of the project (i.e. ../images/example-video.gif)?",
    name: "videoGif",
    default: "./assets/images/create-readme.gif",
    suffix: " 🟡",
    filter(answer) {
      return answer.trim();
    },
  },
  {
    prefix: "⠋🟡 10)",
    type: "input",
    message: "Please provide examples of how to run tests?",
    name: "tests",
    default: "No tests are setup at this time.",
    suffix: " 🟡",
    filter(answer) {
      return answer.trim();
    },
  },
  {
    prefix: "⠋🟡 11)",
    type: "input",
    message: "Please provide guidelines to contribute to your project?",
    name: "contributing",
    default: "Contributor Covenant Code of Conduct",
    suffix: " 🟡",
    filter(answer) {
      return answer.trim();
    },
  },
  {
    prefix: "⠋🟡 12)",
    type: "input",
    message: "Please enter your GitHub user name?",
    name: "userName",
    default: "stevecalla",
    suffix: " 🟡",
    filter(answer) {
      return answer.trim();
    },
  },

  {
    prefix: "⠋🟡 13)",
    type: "input",
    message:
      "Please enter the path/url for the GitHub repo?",
    name: "gitHubRepo",
    default: "https://github.com/stevecalla/create-readme",
    suffix: " 🟡",
    filter(answer) {
      return answer.trim();
    },
  },

  {
    prefix: "⠋🟡 14)",
    type: "input",
    message:
    "Please enter the path/url for the deployed website?",
    name: "deployedURL",
    default: "https://stevecalla.github.io/team-profile-generator/",
    suffix: " 🟡",
    filter(answer) {
      return answer.trim();
    },
  },

  {
    prefix: "⠋🟡 15)",
    type: "input",
    message: "Please enter your email address?",
    name: "emailAddress",
    default: "callasteven@gmail.com",
    validate(answer) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(answer)) {
        return "Please provide a valid email address!";
      }
      return true;
    },
  },
  {
    prefix: "⠋🟡 16)",
    type: "rawlist",
    message: "Please select a license?",
    name: "license",
    choices: licenseList,
    pageSize: 10,
    default: 19,
    suffix: " 🟡",
  },
];

module.exports = {
  promptQuestion,
};
