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
      "Neste projeto Reactjs, eu fiz um website Fitness responsivo incrível. Este site usou React hooks, CSS moderno, Framer motion e biblioteca Email js para tornar este site mais funcional e prático.",
    link: "https://levi-valverde.github.io/gym-website/",
    github: "https://github.com/Levi-Valverde/gym-website",
  },
  {
    id: 5,
    image: restaurant,
    title: "Restaurante",
    category: "websites",
    internalLink: "restaurant-website",
    description:
      "Neste projeto React, crie um site de restaurante. Este site usou React, TypeScript e Tailwind CSS para torna-lo mais funcional e amigável ao usuário.",
    link: "https://restaurant-weld-sigma.vercel.app/",
    github: "https://github.com/Levi-Valverde/restaurant",
  },
  {
    id: 4,
    image: hangmanGame,
    title: "Jogo da Forca",
    category: "projects",
    internalLink: "hangman-game",
    description:
      "O jogo da forca (hangman em inglês) é um jogo para dois em que um jogador tenta adivinhar as letras de uma palavra, e as tentativas frustradas são registradas desenhando uma forca e alguém pendurado nela, linha por linha. This project uses JavaScript, HTML and CSS.",
    link: "https://levi-valverde.github.io/hangman-game/",
    github: "https://github.com/Levi-Valverde/hangman-game",
  },
  {
    id: 3,
    image: stopwatch,
    title: "Cronômetro",
    category: "projects",
    internalLink: "stopwatch",
    description:
      "Este projeto é um cronômetro que usa JavaScript, HTML e CSS. O dispositivo é usado quando períodos de tempo devem ser medidos com precisão e com o mínimo de complicações.",
    link: "https://levi-valverde.github.io/stopwatch/",
    github: "https://github.com/Levi-Valverde/stopwatch",
  },
  {
    id: 2,
    image: toDoList,
    title: "Lista de Tarefas",
    category: "projects",
    internalLink: "to-do-list",
    description:
      "Este projeto é uma lista de tarefas. Uma lista de tarefas é apenas uma lista de coisas que você tem que fazer. Acompanhar efetivamente quando seu trabalho vence pode ajudar você a priorizar e fazer um ótimo trabalho. Este projeto usa JavaScript, HTML e CSS.",
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
