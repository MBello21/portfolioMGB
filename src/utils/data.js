export const DATA = {
name: "MGB Devops",
role: "Fullstack Developer",
available: true,
heroDesc:
"Desarrollo soluciones web completas, desde la interfaz hasta el servidor. Obsesionado con el rendimiento, la accesibilidad y el código limpio.",

about: {
title: "Código + diseño\nen equilibrio.",
paragraphs: [
  "Soy un desarrollador fullstack apasionado por crear productos que funcionen bien y se vean bien. Me muevo con comodidad entre frontend y backend, buscando siempre la mejor solución técnica.",
  "Cuando no estoy programando, estoy aprendiendo algo nuevo. La tecnología avanza rápido y me gusta avanzar con ella.",
],
stats: [
  { number: "3+", label: "Años de experiencia" },
  { number: "12", label: "Proyectos completados" },
  { number: "8",  label: "Clientes satisfechos" },
  { number: "∞",  label: "Ganas de aprender" },
],
},

projects: [
{
  featured: true,
  tag: "Proyecto destacado",
  name: "Sistema de gestión de urgencias",
  desc: "Descripción del proyecto: Siempre se vuelve tediosa la espera en urgencia debido, por lo que hemos creado un sistema de gestion de triaje con implementación de IA",
  tech: ["React", "JavaScript", "Flask", "Cloudinary", "Grok", "Mailtrap", "PostgreSQL", "Docker"],
  url: "https://github.com/MBello21/SistemaMedicoUrgencias",
},
{
  tag: "Web App",
  name: "Contact List",
  desc: "Proyecto basado en el anime DANDADAN el cual funciona como agenda personal de contactos",
  tech: ["React", "JavaScript", "Bootstrap"],
  url: "https://github.com/MBello21/fs-pt-128-MGBello-ListaDeContactos",
},
{
  tag: "API REST",
  name: "Modelo de datos de Los Simpsons",
  desc: "Basandonos en la famosa API de Los Simpsons, cree esta para un proyecto personal con vision de personajes y posibilidad de almacenar favoritos",
  tech: ["Python", "Flask", "Redis"],
  url: "https://github.com/MBello21/fs-pt-128-MGBello-ModeloDatosLosSimpsons",
},
{
  tag: "Server",
  name: "RDP con Cloudflared Tunnel",
  desc: "Virtualizacion de escritorio remoto mediante Myrtille y tunel de Cloudflared",
  tech: ["Cloudflare", "Windows Server", "Myrtille"],
  url: "#",
},
{
  tag: "NextCloud",
  name: "Privatización de Datos en NextCloud",
  desc: "Sistema privado de almacenamiento de información similar a Google Drive, de forma privada y segura con Cloudflared Tunnel",
  tech: ["Cloudflare", "Ubuntu", "María DB", "NextCloud"],
  url: "#",
},
],

skills: [
{
  category: "Frontend",
  items: ["React", "JavaScript", "TypeScript", "Bootstrap", "Sass"],
},
{
  category: "Backend",
  items: ["Python", "Flask", "FastAPI"],
},
{
  category: "Bases de datos & Cloud",
  items: ["PostgreSQL", "MongoDB", "Maria DB", "AWS", "Docker"],
},
{
  category: "Herramientas",
  items: ["Git", "CI/CD", "Figma", "Linux", "Windows Server"],
},
],

contact: [
{ label: "Email",      value: "info@mgbdevops.es",         url: "mailto:info@mgbdevops.es" },
{ label: "LinkedIn",   value: "miguel-ángel-garcía-bello-ab962311b/",   url: "miguel-ángel-garcía-bello-ab962311b/" },
{ label: "GitHub",     value: "github.com/MBello21",        url: "https://github.com/MBello21/" },
],

footer: " © Miguel Ángel Garcia Bello 2026",
};
