import fitnessWebsite from "../../assets/work1.png";
import hangmanGame from "../../assets/work2.png";
import stopwatch from "../../assets/work3.png";
import colorFlipper from "../../assets/work4.png";
import toDoList from "../../assets/todolist.png";
import BMICalculator from "../../assets/bmicalculator.png";
import restaurant from "../../assets/restaurant.png";

export const projectsData = [
  {
    id: 6,
    image: fitnessWebsite,
    title: "Fitness Website",
    category: "websites",
    internalLink: "fitness-website",
    description:
      "In this Reactjs project, I made an awesome responsive Fitness Application. This website used React hooks, modern CSS, Framer motion, and Email js library to make this site more functional and practical.",
    link: "https://levi-valverde.github.io/gym-website/",
    github: "https://github.com/Levi-Valverde/gym-website",
  },
  {
    id: 5,
    image: restaurant,
    title: "Restaurant",
    category: "websites",
    internalLink: "restaurant-website",
    description:
      "In this React project, create a Restaurant website. This site has used React, TypeScript and Tailwind CSS to make this site more functional and user-friendly.",
    link: "https://restaurant-weld-sigma.vercel.app/",
    github: "https://github.com/Levi-Valverde/restaurant",
  },
  {
    id: 4,
    image: hangmanGame,
    title: "Hangman Game",
    category: "projects",
    internalLink: "hangman-game",
    description:
      "Hangman is a game for two in which one player tries to guess the letters of a word, and failed attempts are recorded by drawing a gallows and someone hanging on it, line by line. This project uses JavaScript, HTML and CSS.",
    link: "https://levi-valverde.github.io/hangman-game/",
    github: "https://github.com/Levi-Valverde/hangman-game",
  },
  {
    id: 3,
    image: stopwatch,
    title: "Stopwatch",
    category: "projects",
    internalLink: "stopwatch",
    description:
      "This project is a stopwatch that uses JavaScript, HTML and CSS. The device is used when time periods must be measured precisely and with a minimum of complications.",
    link: "https://levi-valverde.github.io/stopwatch/",
    github: "https://github.com/Levi-Valverde/stopwatch",
  },
  {
    id: 2,
    image: toDoList,
    title: "To do list",
    category: "projects",
    internalLink: "to-do-list",
    description:
      "This project is a To-do-list. A to-do list is just a list of things you have to-do. Effectively tracking when your work is due can help you prioritize and get great work done. This project uses JavaScript, HTML and CSS",
    link: "https://levi-valverde.github.io/to-do-list/",
    github: "https://github.com/Levi-Valverde/to-do-a-list",
  },
  {
    id: 1,
    image: BMICalculator,
    title: "BMI",
    category: "projects",
    internalLink: "bmi-calculator",
    description:
      "This is a BMI calculator (Body Mass Index). Only HTML, CSS and JavaScript were used. The body mass index (BMI) classification can help identify obesity or malnutrition problems in children, adolescents, adults and the elderly.",
    link: "https://levi-valverde.github.io/imc-calculator/",
    github: "https://github.com/Levi-Valverde/imc-calculator",
  },
  {
    id: 0,
    image: colorFlipper,
    title: "Color Flipper",
    category: "projects",
    internalLink: "color-flipper",
    description:
      "This is a color flipper. Color Flipper is a fun mini javascript project where you create a simple button, that on click, runs a function that generates a random color and then sets the background/color of an element you preselected to that random color.",
    link: "https://levi-valverde.github.io/color-flipper/",
    github: "https://github.com/Levi-Valverde/color-flipper",
  },
];

export const projectNav = [
  {
    name: "all",
  },
  {
    name: "websites",
  },
  {
    name: "projects",
  },
];
