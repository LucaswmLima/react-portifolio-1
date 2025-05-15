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
import meterReaderImg from "../../assets/img/projects/meter-reader-img.png";
import xentryAutomationImg from "../../assets/img/projects/xentry-automation-img.png";
import hookFormImg from "../../assets/img/projects/hook-form-img.png";
import linearRegressorImg from "../../assets/img/projects/linear-regressor-img.png";
import logisticRegressorImg from "../../assets/img/projects/logistic-regressor-img.png";
import reduxProfileImg from "../../assets/img/projects/profile-redux-img.png";
import kayadocImg from "../../assets/img/projects/kayadoc-img.png";

export const projectsList = [
  {
    title: "Kayadoc",
    description:
      "Sistema Full Stack desenvolvido para uma empresa especializada na gestão de médicos e consultas.",
    imgUrl: kayadocImg,
    linkOnline: "https://github.com/LucaswmLima/kayadoc",
    linkGitHub: "https://github.com/LucaswmLima/kayadoc",
    technologies: ["Python", "Django", "SQLite", "Tailwind CSS", "Docker"],
    bgColor: ["#eafaf1","white"]
  },
  {
    title: "Measure Manager",
    description:
      "Sistema Full Stack para medição de medidores por leitura de imagem e integração com LLM AI.",
    imgUrl: meterReaderImg,
    linkOnline: "https://meter-read-managment-tool-client.onrender.com",
    linkGitHub: "https://github.com/LucaswmLima/meter-reader",
    technologies: ["Node.Js", "Typescript", "React", "LLM", "Axios"],
    bgColor: ["#eafaf1","white"]
  },

  {
    title: "Xentry Portal",
    description:
      "Sistema automatizado para coleta, pré-processamento e geração de planilhas formatadas a partir de dados online",
    imgUrl: xentryAutomationImg,
    linkOnline: "",
    linkGitHub: "https://github.com/LucaswmLima/python-xentry-automation",
    technologies: ["Python", "Pandas", "Numpy", "Matplotlib", "Selenium"],
    bgColor: ["#808b96","white"]
  },

  {
    title: "React Hook Form",
    description:
      "Aplicativo que compara dois tipos de formulários: Um construído de forma HTML padrão e outro com Hook Form",
    imgUrl: hookFormImg,
    linkOnline: "https://react-hook-form-1.vercel.app",
    linkGitHub: "https://github.com/LucaswmLima/react-hook-form",
    technologies: ["Javascript", "React", "Hook Form"],
    bgColor: ["#d6eaf8","white"]
  },
  {
    title: "Redux Profile App",
    description:
      "Aplicativo desenvolvido para explorar o uso do Redux no controle de estados globais em aplicações complexas.",
    imgUrl: reduxProfileImg,
    linkOnline: "https://react-redux-profile-app.vercel.app",
    linkGitHub: "https://github.com/LucaswmLima/react-profile-app",
    technologies: ["Javascript", "React", "Redux"],
  },
  {
    title: "Sistema Financeiro",
    description:
      "Sistema financeiro que categoriza despesas e receitas. (Dados de teste de março a maio de 2023).",
    imgUrl: financialSystemImg,
    linkOnline: "https://sistema-financeiro-lw.vercel.app",
    linkGitHub: "https://github.com/LucaswmLima/react-financial-system",
    technologies: ["React", "Typescript", "Chakra UI"],
    bgColor: ["#d6eaf8","white"]
  },

  {
    title: "Linear Regressor",
    description:
      "Aplicativo que realiza regressão linear baseado em arquivo CSV",
    imgUrl: linearRegressorImg,
    linkOnline: "",
    linkGitHub: "https://github.com/LucaswmLima/python-logistic-regressor",
    technologies: ["Python", "Pandas", "Numpy", "Matplotlib", "Scikit-Learn"],
    bgColor: ["#fdedec","white"]
  },
  {
    title: "Logistic Regressor",
    description:
      "Aplicativo que realiza regressão logística baseado em arquivo CSV",
    imgUrl: logisticRegressorImg,
    linkOnline: "",
    linkGitHub: "https://github.com/LucaswmLima/python-logistic-regressor",
    technologies: ["Python", "Pandas", "Numpy", "Matplotlib", "Scikit-Learn"],
    bgColor: ["#fdedec","white"]
  },
  {
    title: "Food Max",
    description:
      "Landing Page de Fast-Food com design clean, menu interativo e foco em eficiência.",
    imgUrl: fastFoodImg,
    linkOnline: "https://javascript-food-site.vercel.app",
    linkGitHub: "https://github.com/LucaswmLima/javascript-food-site",
    technologies: ["Javascript", "Figma"],
    bgColor: ["#fcf3cf","#d5d8dc "]
  },
  {
    title: "Pastelaria Foodie",
    description:
      "Site de um restaurante, que destaca a simplicidade, com foco nas imagens dos pratos para atrair os consumidores.",
    imgUrl: landingPage1Img,
    linkOnline: "https://react-landingpage-1.vercel.app",
    linkGitHub: "https://github.com/LucaswmLima/react-landingpage-1",
    technologies: ["React", "Javascript", "MUI"],
    bgColor: ["#f9e79f","white"]
  },

  {
    title: "Previsão Do Tempo",
    description:
      "Site de previsão do tempo com informações essenciais sobre o clima. ",
    imgUrl: weatherSiteImg,
    linkOnline: "https://lucaswmlima.github.io/javascript-weather-app",
    linkGitHub: "https://github.com/LucaswmLima/javascript-weather-app",
    technologies: ["Javascript", "Rest API"],
    bgColor: ["#ebf5fb","#d5d8dc"]
  },
  {
    title: "TO-DO List",
    description: "Lista de tarefas desenvolvida em React com Typescript.",
    imgUrl: todoListImg,
    linkOnline: "https://todo-list-01.vercel.app",
    linkGitHub: "https://github.com/LucaswmLima/react-todo-list",
    technologies: ["React", "Javascript"],
  },
  {
    title: "Pokedex",
    description:
      "Uma Pokedex interativa que utiliza a base de dados da PokeAPI.",
    imgUrl: pokedexImg,
    linkOnline: "https://lucaswmlima.github.io/javascript-pokedex",
    linkGitHub: "https://github.com/LucaswmLima/javascript-pokedex",
    technologies: ["Javascript", "Rest API"],
    bgColor: ["#c0392b","white"]
  },
  {
    title: "Calculadora",
    description: "Calculadora desenvolvida em Javascript.",
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
