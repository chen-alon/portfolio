import hitchhiker from "../files/hitchhiker.png";
import susan from "../files/susan'shouse.jpeg";
import tictactoc from "../files/tictactoc.png";
// import portfolio from "../files/favicon.png";

const data = {
  works: [
    {
      index: 0,
      name: "Hitchhiker App",
      picture: hitchhiker,
      description:
        "I developed an Android app that will provide a solution to the problem of finding ‎partners for traveling in Israel and abroad, an app based on matching percentages ‎suitable for young and old alike.‎",
      frontend: "React Native, JavaScrpit",
      backend: "Firebase",
      git: "https://github.com/chen-alon/partners",
      message:
        "whatsapp://send?text=Hey Chen, I would like to contact you regarding your 'Hitchhiker' project.  &phone=+972526020358",
    },
    {
      index: 1,
      name: "Susan's House App",
      picture: susan,
      description:
        "As part of a group, developed an Android and IOS app for a real customer - Susan’s House organization. An application for managing employees’ presence control enforced by location-based authentication. Created two interfaces - administrator interface and user interface.",
      frontend: "React Native, JavaScrpit",
      backend: "Firebase",
      git: "https://github.com/chen-alon/SausanHouse",
      message:
        "whatsapp://send?text=Hey Chen, I would like to contact you regarding your 'Susan's House' project.  &phone=+972526020358",
    },
    {
      index: 2,
      name: "Tic-Tac-Toe Game",
      picture: tictactoc,
      description: "I developed a Tic-Tac-Toe game.",
      frontend: "ReactJS, JavaScrpit, CSS3, HTML5",
      backend: "Heroku",
      git: "https://github.com/chen-alon/tic-tac-toe",
      link: "https://chen-alon-tic-tac-toe.herokuapp.com/",
      message:
        "whatsapp://send?text=Hey Chen, I would like to contact you regarding your 'Tic-Tac-Toe Game' project.  &phone=+972526020358",
    },
    {
      index: 3,
      name: "Portfolio Web",
      description:
        "I built my developer portfolio using react.js. I kept the design and code minimalist so it would be clean.‎",
      frontend: "ReactJS, JavaScrpit, CSS3, HTML5, Material-UI, Semantic-UI",
      backend: "Heroku",
      git: "https://github.com/chen-alon/portfolio",
      message:
        "whatsapp://send?text=Hey Chen, I would like to contact you regarding your 'Portfolio' project.  &phone=+972526020358",
    },
  ],
};
export default data;
