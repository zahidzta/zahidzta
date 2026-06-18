import listCartImg from '../assets/list-cart.jpg';
import weatherAppImg from '../assets/weather-app.jpg';
import contactFormImg from '../assets/contact-form.jpg';
import extensionManagerImg from '../assets/extension-manager.jpg';
import loopstudiosImg from '../assets/loopstudios.jpg';

export const skills = [
  "Node", "C", "c++", "Java", "PHP", "API",
  "Visual Studio", "Python", "C#", "Git", "GitHub",
  "JavaScript", "React", "SQL", "HTML",
  "CSS", "Styled-Components", "TypeScript", "Tailwindcss"
];

export const projectTags = [
  "frontend", "backend", "api", "tailwindcss", "react", "bases de datos", "c#"
] as const;

export type ProjectTag = typeof projectTags[number];

export interface Project {
  id: string;
  title: string;
  description_es: string;
  description_en: string;
  tags: ProjectTag[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  downloadUrl?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Product List with Cart",
    description_es: "Aplicación web interactiva para la simulación de una tienda de postres en línea. Cuenta con un flujo completo de carrito de compras y una experiencia de usuario fluida. Incluye un Custom Hook optimizado para la gestión global del estado del carrito.",
    description_en: "Interactive web application simulating an online dessert shop. It features a complete shopping cart flow and a smooth user experience. Includes an optimized Custom Hook for global cart state management.",
    tags: ["frontend", "react", "tailwindcss"],
    imageUrl: listCartImg,
    githubUrl: "https://github.com/zahidzta/Product-list-with-cart",
    liveUrl: "https://zahidzta.github.io/Product-list-with-cart/"
  },
  {
    id: "2",
    title: "Weather App",
    description_es: "Aplicación meteorológica que proporciona el pronóstico del clima en tiempo real consultando la API externa de weatherapi.com. Arquitectura escalable mediante el uso de Context API para centralizar el estado global.",
    description_en: "Weather application that provides real-time climate forecasts by querying the external weatherapi.com API. Scalable architecture using Context API to centralize the global state.",
    tags: ["frontend", "api", "react", "tailwindcss"],
    imageUrl: weatherAppImg,
    githubUrl: "https://github.com/zahidzta/weather-app",
    liveUrl: "https://zahidzta.github.io/weather-app/"
  },
  {
    id: "3",
    title: "Contact Form",
    description_es: "Formulario web interactivo enfocado en una experiencia de usuario (UX) impecable. Desarrollo de un Custom Hook especializado en la validación en tiempo real de todos los campos de entrada.",
    description_en: "Interactive web form focused on a flawless user experience (UX). Development of a specialized Custom Hook for real-time validation of all input fields.",
    tags: ["frontend", "react", "tailwindcss"],
    imageUrl: contactFormImg,
    githubUrl: "https://github.com/zahidzta/contact-form",
    liveUrl: "https://zahidzta.github.io/contact-form/"
  },
  {
    id: "4",
    title: "Extension Manager",
    description_es: "Panel de administración web interactivo diseñado para la gestión y control de extensiones de software. Interfaz dinámica que permite activar, desactivar y eliminar elementos en tiempo real.",
    description_en: "Interactive web administration panel designed for the management and control of software extensions. Dynamic interface that allows activating, deactivating, and removing elements in real-time.",
    tags: ["frontend", "react", "tailwindcss"],
    imageUrl: extensionManagerImg,
    githubUrl: "https://github.com/zahidzta/extensions-manager",
    liveUrl: "https://zahidzta.github.io/extensions-manager/"
  },
  {
    id: "5",
    title: "Renta de Autos Zeta CR",
    description_es: "Aplicación de escritorio en C# orientada a la gestión integral de un negocio de alquiler de vehículos. Integra una arquitectura de capas y conexión a un sistema de Bases de Datos relacional.",
    description_en: "C# desktop application aimed at the comprehensive management of a car rental business. Integrates a layered architecture and connection to a relational Database system.",
    tags: ["frontend", "backend", "bases de datos", "c#"],
    imageUrl: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2400&auto=format&fit=crop",
    githubUrl: "https://github.com/zahidzta/proyecto_cs",
    downloadUrl: "/downloads/zeta-cr.zip"
  },
  {
    id: "6",
    title: "Loopstudios landing page",
    description_es: "Landing page responsiva para una empresa de realidad virtual. Presenta un diseño moderno con cuadrículas adaptables, menú de navegación móvil interactivo y animaciones suaves.",
    description_en: "Responsive landing page for a virtual reality company. Features a modern design with adaptive grids, an interactive mobile navigation menu, and smooth animations.",
    tags: ["frontend", "react", "tailwindcss"],
    imageUrl: loopstudiosImg,
    githubUrl: "https://github.com/zahidzta/loopstudios-landing-page.git",
    liveUrl: "https://zahidzta.github.io/loopstudios-landing-page/"
  }
];
