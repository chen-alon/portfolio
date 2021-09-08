import hitchhiker from "../files/hitchhiker.png";
import susan from "../files/susan'shouse.jpeg";
import tictactoc from "../files/tictactoc.png";

const data = {
  works: [
    {
      index: 0,
      name: "Hitchhiker App",
      picture: hitchhiker,
      description:
        "I developed an Android application that helps travelers to find the perfect ‎partners for traveling in Israel and abroad - based on matching percentages.",
      frontend: "React Native, JavaScript",
      backend: "Firebase",
      git: "https://github.com/chen-alon/partners",
      message:
        'whatsapp://send?text=Hey Chen, I would like to talk with you about your "Hitchhiker" project.  &phone=+972526020358',
    },
    {
      index: 1,
      name: "Susan's House App",
      picture: susan,
      description:
        "I developed an Android and IOS applications (as part of a group) for a real customer - Susan’s House organization. An application for managing employees’ presence control enforced by location-based authentication. Provided two interfaces - Administrator interface and User interface.",
      frontend: "React Native, JavaScript",
      backend: "Firebase",
      git: "https://github.com/chen-alon/SausanHouse",
      message:
        'whatsapp://send?text=Hey Chen, I would like to talk with you about your "Susan\'s House" project.  &phone=+972526020358',
    },
    {
      index: 2,
      name: "Tic-Tac-Toe Game",
      picture: tictactoc,
      description: "I developed a Tic-Tac-Toe game for fun.",
      frontend: "ReactJS, JavaScript, CSS3, HTML5",
      backend: "Heroku",
      git: "https://github.com/chen-alon/tic-tac-toe",
      link: "https://chen-alon-tic-tac-toe.herokuapp.com/",
      message:
        'whatsapp://send?text=Hey Chen, I would like to talk with you about your "Tic-Tac-Toe Game" project.  &phone=+972526020358',
    },
    {
      index: 3,
      name: "Portfolio Web",
      description: "I built my developer portfolio using react.js.‎",
      frontend: "ReactJS, JavaScript, CSS3, HTML5, Material-UI, Semantic-UI",
      git: "https://github.com/chen-alon/portfolio",
      message:
        'whatsapp://send?text=Hey Chen, I would like to talk with you about your "Portfolio" project.  &phone=+972526020358',
    },
  ],
};
export default data;
