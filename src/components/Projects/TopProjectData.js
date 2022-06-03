// images
import onlineShop from "../../images/online-shop.jpg";
import expense from "../../images/expense-tracker.jpg";
import movie from "../../images/movie-app.jpg";

const portfolio = [
  {
    name: "Movie App",
    image: movie,
    description: `The Movie Search App, I used HTML5, CSS3 and React(redux, redux-thunk, react-router-dom, axios, aos(for animations)). The Data Getting from TMDP API. The icons were taken from the Font Awesome.`,
    liveUrl: "https://react-movieappp.netlify.app/",
    github: "https://github.com/Emin-M/react-movieapp",
  },
  {
    name: "Expense Tracker",
    image: expense,
    description: `The Budget Control App, I used HTML5, CSS3 and React(redux, react-hook-form, redux-thunk, react-router-dom, axios). As an backend I'he used "documenter.getpostman.com/view/11347698/TzRPiote" The icons were taken from the Font Awesome.`,
    liveUrl: "https://react-expense-trackerr.netlify.app",
    github: "https://github.com/Emin-M/react-expense-tracker",
  },
  {
    name: "Online Shop",
    image: onlineShop,
    description:
      "The fake shop, I used HTML5, CSS3 and React(redux, react-router-dom). The icons were taken from the Font Awesome. I also used React Toastify for making alerts.",
    liveUrl: "https://react-fakeshop.netlify.app",
    github: "https://github.com/Emin-M/react-fake-shop",
  },
];

export default portfolio;
