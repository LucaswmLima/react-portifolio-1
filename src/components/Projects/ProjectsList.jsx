import pokedexImg from "../../assets/img/projects/pokedex-img.png";
import financialSystemImg from "../../assets/img/projects/financial-system-img.png";
import landingPage1Img from "../../assets/img/projects/landing-page-1-img.png";
import todoListImg from "../../assets/img/projects/todo-list-img.png";
import ticTacToeImg from "../../assets/img/projects/tic-tac-toe-img.png";
import calculatorImg from "../../assets/img/projects/calculator-img.png";
import weatherSiteImg from "../../assets/img/projects/weather-site-img.png";
import site1Img from "../../assets/img/projects/site-1-img.png";
import lucyImg from "../../assets/img/projects/lucy-img.png";
import clockUnlockerImg from "../../assets/img/projects/clock-unlocker-img.png";
import imcCalculatorImg from "../../assets/img/projects/imc-calculator-img.png";
import currencyConverterImg from "../../assets/img/projects/currency-converter-img.png";
import gradeCalculatorImg from "../../assets/img/projects/grade-calculator-img.png";
import gasCalculatorImg from "../../assets/img/projects/gas-calculator-img.png";
import portifolio1 from "../../assets/img/projects/portifolio-1-img.png";
import portifolio2 from "../../assets/img/projects/portifolio-2-img.png";
import fastFoodImg from "../../assets/img/projects/fast-food-site.png";

export const projectsList = [
  
  {
    title: "Xentry Portal Automation",
    description:
      "Sistema automatizado para coleta, pré-processamento e geração de planilhas formatadas a partir de dados online",
    imgUrl: "https://raw.githubusercontent.com/LucaswmLima/python-xentry-automation/main/assets/1.png",
    linkOnline: "",
    linkGitHub: "https://github.com/LucaswmLima/python-xentry-automation",
    technologies: ["Python", "Pandas", "Numpy", "Matplotlib", "Selenium"],
  },
  
  {
    title: "React Hook Form",
    description:
      "Aplicativo que compara dois tipos de formulários: Um construído de forma HTML padrão e outro com Hook Form",
    imgUrl: "https://raw.githubusercontent.com/LucaswmLima/react-forms/main/src/assets/img2.png",
    linkOnline: "https://react-hook-form-1.vercel.app",
    linkGitHub: "https://github.com/LucaswmLima/react-hook-form",
    technologies: ["Javascript", "React", "Hook Form"],
  },
  {
    title: "Food Max",
    description:
      "Landing Page de Fast-Food com design clean, menu interativo e foco em eficiência.",
    imgUrl: fastFoodImg,
    linkOnline: "https://javascript-food-site.vercel.app",
    linkGitHub: "https://github.com/LucaswmLima/javascript-food-site",
    technologies: ["Javascript", "Figma"],
  },
  {
    title: "Pokedex",
    description:
      "Uma Pokedex interativa que utiliza a base de dados da PokeAPI.",
    imgUrl: pokedexImg,
    linkOnline: "https://lucaswmlima.github.io/javascript-pokedex",
    linkGitHub: "https://github.com/LucaswmLima/javascript-pokedex",
    technologies: ["Javascript", "Rest API"],
  },
  {
    title: "Linear Regressor",
    description:
      "Aplicativo que realiza regressão linear baseado em arquivo CSV",
    imgUrl: "https://raw.githubusercontent.com/LucaswmLima/python-linear-regressor/main/assets/4.png",
    linkOnline: "",
    linkGitHub: "https://github.com/LucaswmLima/python-logistic-regressor",
    technologies: ["Python", "Pandas", "Numpy", "Matplotlib", "Scikit-Learn"],
  },
  {
    title: "Logistic Regressor",
    description:
      "Aplicativo que realiza regressão logística baseado em arquivo CSV",
    imgUrl: "https://raw.githubusercontent.com/LucaswmLima/python-logistic-regressor/main/assets/3.png",
    linkOnline: "",
    linkGitHub: "https://github.com/LucaswmLima/python-logistic-regressor",
    technologies: ["Python", "Pandas", "Numpy", "Matplotlib", "Scikit-Learn"],
  },
  {
    title: "Pastelaria Foodie",
    description:
      "Site de um restaurante, que destaca a simplicidade, com foco nas imagens dos pratos para atrair os consumidores.",
    imgUrl: landingPage1Img,
    linkOnline: "https://react-landingpage-1.vercel.app",
    linkGitHub: "https://github.com/LucaswmLima/react-landingpage-1",
    technologies: ["React", "Javascript", "MUI"],
  },
  {
    title: "Sistema Financeiro",
    description:
      "Sistema financeiro que categoriza despesas e receitas para fácil acompanhamento. (Dados de teste de março a maio de 2023).",
    imgUrl: financialSystemImg,
    linkOnline: "https://sistema-financeiro-lw.vercel.app",
    linkGitHub: "https://github.com/LucaswmLima/react-financial-system",
    technologies: ["React", "Typescript", "Chakra UI"],
  },

  {
    title: "Previsão Do Tempo",
    description:
      "Site de previsão do tempo que fornece informações essenciais sobre o clima. ",
    imgUrl: weatherSiteImg,
    linkOnline: "https://lucaswmlima.github.io/javascript-weather-app",
    linkGitHub: "https://github.com/LucaswmLima/javascript-weather-app",
    technologies: ["Javascript", "Rest API"],
  },
  {
    title: "TO-DO List",
    description: "Lista de tarefas desenvolvida em React com Typescript",
    imgUrl: todoListImg,
    linkOnline: "https://todo-list-01.vercel.app",
    linkGitHub: "https://github.com/LucaswmLima/react-todo-list",
  },
  {
    title: "Calculadora",
    description:
      "Calculadora desenvolvida em Javascript com validações de entrada",
    imgUrl: calculatorImg,
    linkOnline: "https://lucaswmlima.github.io/javascript-calculator",
    linkGitHub: "https://github.com/LucaswmLima/javascript-calculator",
  },
  {
    title: "Jogo Da Velha",
    description: "Jogo da velha desenvolvido em Javascript",
    imgUrl: ticTacToeImg,
    linkOnline: "https://lucaswmlima.github.io/Javascript-Tic-Tac-Toe",
    linkGitHub: "https://github.com/LucaswmLima/Javascript-Tic-Tac-Toe",
  },
  {
    title: "Site Comercial",
    description: "Site comercial desenvolvido em Javascript",
    imgUrl: site1Img,
    linkOnline: "https://site-01-lucas-william.netlify.app",
    linkGitHub: "https://github.com/LucaswmLima/javascript-website-1",
  },
  {
    title: "LUCY Assistent",
    description:
      "Assistente virtual para controle de estoque desenvolvido em Python",
    imgUrl: lucyImg,
    linkOnline: "",
    linkGitHub: "https://github.com/LucaswmLima/python-lucy-assistant",
  },
  {
    title: "Clock Unlocker",
    description: "Desbloqueador de relógios de ponto desenvolvido em Python",
    imgUrl: clockUnlockerImg,
    linkOnline: "",
    linkGitHub: "https://github.com/LucaswmLima/python-clock-unlocker",
  },
  {
    title: "Calculatora De IMC",
    description: "Calculatora de IMC desenvolvida em Flutter",
    imgUrl: imcCalculatorImg,
    linkOnline: "",
    linkGitHub: "https://github.com/LucaswmLima/flutter-IMC-calculator",
  },
  {
    title: "Conversor Monetário",
    description: "Conversor monetário de IMC desenvolvido em Flutter",
    imgUrl: currencyConverterImg,
    linkOnline: "",
    linkGitHub: "https://github.com/LucaswmLima/python-lucy-assistant",
  },
  {
    title: "Portfólio Pessoal 1",
    description: "Portfólio pessoal 1 desenvolvido em React",
    imgUrl: portifolio1,
    linkOnline: "",
    linkGitHub: "https://github.com/LucaswmLima/python-lucy-assistant",
  },
  {
    title: "Portfólio Pessoal 2",
    description: "Portfólio pessoal 2 desenvolvido em React",
    imgUrl: portifolio2,
    linkOnline: "https://portfolio-lucaswilliam-2.vercel.app",
    linkGitHub: "https://github.com/LucaswmLima/react-portfolio",
  },
];