// images
import quiz from "../../images/quiz_app.jpg";
import youtube from "../../images/youtube.jpg";
import tony from "../../images/tony.jpg";

const portfolio = [
  {
    name: "Quiz App",
    image: quiz,
    description: `The Quiz App with using vanilla Javascript. As an database i have used "https://opentdb.com/api_config.php".`,
    liveUrl: "https://quizapp-2.netlify.app/",
    github: "https://github.com/Emin-M/quiz-app.git",
  },
  {
    name: "Youtube",
    image: youtube,
    description:
      "The Youtube with the youtube api using React Hooks. Advance search used on searchbar.",
    liveUrl: "https://youtube0.netlify.app/",
    github: "https://github.com/Emin-M/youtube_api.git",
  },
  {
    name: "Tony Clone",
    image: tony,
    description: "The Clone of Portfolio by using SCSS (SASS).",
    liveUrl: "https://tony-portfolio-clone.netlify.app/",
    github: "https://github.com/Emin-M/tony_portfolio_clone.git",
  },
];

export default portfolio;
