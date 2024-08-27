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
    category: "projetos",
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
    category: "projetos",
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
    category: "projetos",
    internalLink: "to-do-list",
    description:
      "Este projeto é uma lista de tarefas. Uma lista de tarefas é apenas uma lista de coisas que você tem que fazer. Acompanhar efetivamente quando seu trabalho vence pode ajudar você a priorizar e fazer um ótimo trabalho. Este projeto usa JavaScript, HTML e CSS.",
    link: "https://levi-valverde.github.io/to-do-list/",
    github: "https://github.com/Levi-Valverde/to-do-a-list",
  },
  {
    id: 1,
    image: BMICalculator,
    title: "IMC",
    category: "projetos",
    internalLink: "bmi-calculator",
    description:
      "Esta é uma calculadora de IMC (Índice de Massa Corporal). Apenas HTML, CSS e JavaScript foram usados. A classificação do índice de massa corporal (IMC) pode ajudar a identificar problemas de obesidade ou desnutrição em crianças, adolescentes, adultos e idosos.",
    link: "https://levi-valverde.github.io/imc-calculator/",
    github: "https://github.com/Levi-Valverde/imc-calculator",
  },
  {
    id: 0,
    image: colorFlipper,
    title: "Color Flipper",
    category: "projetos",
    internalLink: "color-flipper",
    description:
      "Color Flipper (Fliperama de Cores) é um mini projeto javascript divertido onde você cria um botão simples, que ao clicar, executa uma função que gera uma cor aleatória e então define o fundo/cor de um elemento que você pré-selecionou para essa cor aleatória.",
    link: "https://levi-valverde.github.io/color-flipper/",
    github: "https://github.com/Levi-Valverde/color-flipper",
  },
];

export const projectNav = [
  {
    name: "todos",
  },
  {
    name: "websites",
  },
  {
    name: "projetos",
  },
];
