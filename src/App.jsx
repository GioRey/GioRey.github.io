import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  ExternalLink,
  Code2,
  Layers,
  Smartphone,
  Database,
  Terminal,
  Cpu,
  ChevronDown,
  Menu,
  X,
  Briefcase,
  Award,
  Globe,
  Zap,
  Layout,
  BookOpen,
  User
} from 'lucide-react';

import ariIMG from '../images/ari.png';
import posIMG from '../images/pos.png';
import loadingPulseIMG from '../images/loading_pulse.gif';
import floatingMenuPanelIMG from '../images/floating_menu_panel.gif';
import animatedFavButtonIMG from '../images/animated_fav_button.gif';
import lomaTaurinaIMG from '../images/loma_taurina.jpg';
import oneEliteIMG from '../images/one_elite.png';
import superAppLiverpoolIMG from '../images/super_app_liverpool.jpeg';


const Portfolio = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('todos');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: <Github size={20} />, url: "https://github.com/GioRey", label: "GitHub" },
    { icon: <Linkedin size={20} />, url: "https://linkedin.com/in/jeovani-reyes-9556ab1b0/", label: "LinkedIn" },
    { icon: <Mail size={20} />, url: "mailto:gliorey87@gmail.com", label: "Email" },
    { icon: <MessageCircle size={20} />, url: "https://wa.me/527299438560", label: "WhatsApp" }
  ];

  const services = [
    {
      icon: <Smartphone className="text-cyan-400" size={32} />,
      title: "Desarrollo Móvil Nativo & Cross",
      desc: "Especialista en Flutter y ecosistemas nativos (Android/iOS). Creación de Super Apps modulares y optimización de rendimiento en dispositivos gama media."
    },
    {
      icon: <Layers className="text-purple-400" size={32} />,
      title: "Arquitectura de Software",
      desc: "Diseño de soluciones escalables, Clean Architecture, patrones de diseño y refactorización de código legacy para misión crítica."
    },
    {
      icon: <Terminal className="text-green-400" size={32} />,
      title: "Backend & Cloud",
      desc: "APIs RESTful robustas con Node.js/Express. Integración de bases de datos SQL/NoSQL y despliegue automatizado (CI/CD)."
    }
  ];

  const experience = [
    {
      company: "RECLUIT (Liverpool)",
      role: "Desarrollador SR Full Stack",
      period: "Jul 2024 - Actualidad",
      description: "Diseño e implementación de una Super App modular en Flutter. Reducción del 30% en tiempos de despliegue mediante miniaplicaciones independientes. Optimización de backend en Node.js reduciendo tiempos de respuesta en un 25%. Integración de Deeplinks nativos.",
      tech: ["Flutter", "Node.js", "Micro-frontends", "CI/CD"],
      highlight: "Liderazgo Técnico"
    },
    {
      company: "MINSAIT",
      role: "Consultor SR",
      period: "Oct 2023 - Jun 2024",
      description: "Liderazgo técnico en Super App bancaria. Desarrollo e implementación de un teclado personalizado seguro para operaciones financieras, además de módulos de transferencias, pagos QR y autenticación biométrica. Reducción del 40% en uso de recursos y definición de guidelines de arquitectura.",
      tech: ["Flutter", "Security", "Custom Keyboard", "Banking"],
      highlight: "Fintech"
    },
    {
      company: "LION INTEL SOLUTION",
      role: "Desarrollador SR",
      period: "May 2023 - Oct 2023",
      description: "Desarrollo de solución de transporte tipo InDrive. Gestión de geolocalización en tiempo real para 5,000+ usuarios. Migración de legacy Java/Kotlin a Flutter (35% menos tiempo de mantenimiento).",
      tech: ["Maps SDK", "Firebase", "Real-time", "Migration"],
      highlight: "Movilidad"
    },
    {
      company: "BIC SOFTWARE SOLUTION",
      role: "Desarrollador SSR",
      period: "Jul 2022 - Dic 2022",
      description: "Mantenimiento de apps médicas en Flutter y Java. Reducción de errores críticos en un 15% mediante refactorización y unit testing.",
      tech: ["Flutter", "Java", "Healthcare"],
      highlight: "Salud"
    }
  ];

  const allProjects = [
    {
      id: 1,
      title: "Super App Liverpool (Recluit)",
      category: "mobile",
      image: superAppLiverpoolIMG,//"https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800",
      description: "Arquitectura modular para retail masivo. Mini-apps independientes y deep linking avanzado.",
      tech: ["Flutter", "Micro-frontends", "Node.js"],
      link: "#"
    },
    {
      id: 2,
      title: "Loma Taurina",
      category: "mobile",
      image: lomaTaurinaIMG,//"https://images.unsplash.com/photo-1540575467063-17e6fc48cf44?auto=format&fit=crop&q=80&w=800",
      description: "Sistema completo de boletaje y gestión de eventos integrado con pasarela de pagos Stripe.",
      tech: ["mobile", "Stripe API", "Backend"],
      link: "#"
    },
    {
      id: 3,
      title: "One Elite",
      category: "mobile",
      image: oneEliteIMG,//"https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800",
      description: "App de coaching de salud y ayuno intermitente con seguimiento de métricas personales.",
      tech: ["mobile", "Charts", "Health", "Flutter"],
      link: "#"
    },
    {
      id: 4,
      title: "ARI - Admin de Rentas",
      category: "mobile",
      image: ariIMG,//"https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
      description: "Plataforma administrativa para gestión inmobiliaria, control de inquilinos y pagos.",
      tech: ["mobile", "api rest", "firebase", "push notifications", "maps", "payments"],
      link: "#"
    },
    {
      id: 5,
      title: "Floating Menu Panel",
      category: "open-source",
      image: floatingMenuPanelIMG,
      description: "Paquete Flutter publicado en pub.dev para menús flotantes interactivos.",
      tech: ["Dart", "Flutter", "Package", "UI/UX"],
      link: "https://pub.dev/packages/floating_menu_panel"
    },
    {
      id: 6,
      title: "Loading Pulse",
      category: "open-source",
      image: loadingPulseIMG,
      description: "Librería de animación de carga optimizada para alto rendimiento en Flutter.",
      tech: ["Dart", "Flutter", "Animation"],
      link: "https://pub.dev/packages/loading_pulse"
    },
    {
      id: 7,
      title: "POS Admin Store",
      category: "web",
      image: posIMG,
      description: "Backend robusto desarrollado con AdonisJS (Node.js) para la gestión de una tienda online. Implementa un API RESTful para administrar productos, inventario, usuarios y pedidos, enfocado en la eficiencia y seguridad.",
      tech: ["Node.js", "AdonisJS", "API RESTful", "SQL", "Reporting"],
      link: "#"
    },
    {
      id: 8,
      title: "Animated Fav Button",
      category: "open-source",
      image: animatedFavButtonIMG,
      description: "Librería de animación de carga optimizada para alto rendimiento en Flutter.",
      tech: ["Dart", "Flutter", "Animation"],
      link: "https://pub.dev/packages/loading_pulse"
    }
  ];

  const filteredProjects = activeTab === 'todos'
    ? allProjects
    : allProjects.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">

      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[100px] animate-pulse delay-700"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0B1120]/90 backdrop-blur-md border-b border-slate-800 py-4 shadow-lg' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter text-white">
            Gio<span className="text-cyan-400">Rey</span>
          </div>

          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
            {['Sobre mí', 'Servicios', 'Proyectos', 'Experiencia', 'Certificaciones'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className="hover:text-cyan-400 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollToSection('contacto')}
            className="hidden md:flex px-5 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5"
          >
            Contratar
          </button>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#0B1120] border-b border-slate-800 p-6 flex flex-col space-y-4 shadow-xl z-50">
            {['Sobre mí', 'Servicios', 'Proyectos', 'Experiencia', 'Certificaciones', 'Contacto'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className="text-left text-lg font-medium text-white hover:text-cyan-400"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header id="sobre-mí" className="relative pt-32 pb-20 md:pt-48 md:pb-20 container mx-auto px-6 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-2/3 pr-0 md:pr-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-cyan-400 text-sm font-medium mb-8 backdrop-blur-sm">
              <span className="flex h-2 w-2 relative mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Senior Full Stack & Mobile Developer
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white mb-6">
              Construyendo el futuro <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                móvil y escalable.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed border-l-4 border-slate-700 pl-6">
              Experto en <span className="text-cyan-300">Flutter</span>, Arquitectura Limpia y escalado de Backend con <span className="text-cyan-300">Node.js</span>. Transformando requerimientos complejos en soluciones robustas.
            </p>

            <div className="flex flex-wrap gap-4">
              <button onClick={() => scrollToSection('proyectos')} className="px-8 py-4 bg-white text-[#0B1120] font-bold rounded-lg hover:bg-slate-200 transition-all flex items-center shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                Ver Portafolio <Layout size={20} className="ml-2" />
              </button>
              <a href="https://github.com/giorey" target="_blank" rel="noreferrer" className="px-8 py-4 bg-transparent border border-slate-600 text-white font-medium rounded-lg hover:border-cyan-400 hover:bg-cyan-400/10 transition-all flex items-center">
                <Github size={20} className="mr-2" /> GitHub
              </a>
            </div>
          </div>

          {/* Hero Visual/Graphic */}
          <div className="hidden md:block w-1/3 relative">
            <div className="relative z-10 bg-slate-800/50 backdrop-blur-xl border border-slate-700 p-6 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500">
              <div className="flex items-center gap-2 mb-4 border-b border-slate-700 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-auto text-xs text-slate-500 font-mono">developer_profile.dart</span>
              </div>
              <div className="font-mono text-xs leading-relaxed">
                <p><span className="text-purple-400">class</span> <span className="text-yellow-400">Jeovani</span> <span className="text-purple-400">extends</span> <span className="text-yellow-400">Developer</span> {'{'}</p>
                <p className="pl-4 text-slate-400">// Expert in Mobile Solutions</p>
                <p className="pl-4"><span className="text-cyan-400">String</span> get level =&gt; <span className="text-green-400">'Senior'</span>;</p>
                <p className="pl-4"><span className="text-cyan-400">int</span> get experience =&gt; <span className="text-orange-400">10</span>;</p>
                <p className="pl-4"><span className="text-cyan-400">List</span>&lt;<span className="text-cyan-400">String</span>&gt; get stack =&gt; [</p>
                <p className="pl-8"><span className="text-green-400">'Flutter'</span>,</p>
                <p className="pl-8"><span className="text-green-400">'Node.js'</span>,</p>
                <p className="pl-8"><span className="text-green-400">'Android/iOS'</span>,</p>
                <p className="pl-8"><span className="text-green-400">'CI/CD'</span></p>
                <p className="pl-4">];</p>
                <p className="pl-4 mb-2"><span className="text-blue-400">void</span> buildFuture() {'{'}</p>
                <p className="pl-8 text-slate-400">code.clean();</p>
                <p className="pl-8 text-slate-400">architecture.scalable();</p>
                <p className="pl-4">{'}'}</p>
                <p>{'}'}</p>
              </div>
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-lg opacity-30 -z-10"></div>
          </div>
        </div>
      </header>

      {/* About Me Section (New) */}
      <section id="sobre-mí" className="py-16 bg-slate-900/30 border-y border-slate-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="md:w-1/3 relative">
              <div className="absolute inset-0 bg-cyan-500 blur-3xl opacity-10 rounded-full"></div>
              <div className="relative bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-xl">
                <User size={48} className="text-cyan-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-2">Sobre mí</h3>
                <p className="text-slate-400 text-sm">Pasión por la tecnología y la excelencia técnica.</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {['Liderazgo', 'Clean Code', 'Scrum', 'Mentoring', 'Flutter', 'Node.js', 'Android/iOS', 'CI/CD', 'kotlin', 'java', 'dart', 'python'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-slate-900 rounded-full text-xs font-medium text-cyan-300 border border-slate-700">{skill}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-white mb-6">Perfil Profesional</h2>
              <div className="prose prose-invert max-w-none text-slate-300 space-y-4 leading-relaxed">
                <p>
                  Soy un <strong>Desarrollador de Software Senior</strong> con más de <strong>10 años de experiencia profesional</strong> diseñando, desarrollando e implementando soluciones tecnológicas de alto impacto. Mi especialización se centra en el ecosistema móvil (Flutter, Android Java/Kotlin, iOS Swift) y backend (Node.js), donde he perfeccionado la integración de arquitecturas de software robustas.
                </p>
                <p>
                  He colaborado en proyectos de misión crítica para sectores exigentes como <strong>Banca Digital, Movilidad y E-commerce</strong>. Mi enfoque no es solo escribir código, sino crear sistemas escalables mediante la integración de APIs RESTful, automatización de CI/CD y despliegues seguros en entornos productivos.
                </p>
                <p className="border-l-4 border-cyan-500 pl-4 italic text-slate-400">
                  "Me desempeño con naturalidad en roles de liderazgo técnico y consultoría, aplicando rigurosamente buenas prácticas de Clean Code, patrones de diseño (SOLID, MVVM) y metodologías ágiles para garantizar la máxima calidad del software."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-slate-900/50 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Especialización Técnica</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Más allá de escribir código, diseño ecosistemas digitales robustos y eficientes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-[#0f172a] p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/30 hover:bg-slate-800/80 transition-all group">
                <div className="mb-6 p-4 bg-slate-900 rounded-xl inline-block group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section with Preview Cards */}
      <section id="proyectos" className="py-24 bg-[#0B1120]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Portafolio de Proyectos</h2>
              <p className="text-slate-400">
                Selección de trabajos destacados, open source y desarrollos empresariales.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex space-x-2 mt-6 md:mt-0 bg-slate-900 p-1 rounded-lg border border-slate-800">
              {['todos', 'mobile', 'web', 'open-source'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all capitalize ${activeTab === tab
                    ? 'bg-cyan-600 text-white shadow-lg'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                >
                  {tab.replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-900/10 transition-all duration-300 flex flex-col h-full">

                {/* Image Preview Area */}
                <div className="relative h-48 overflow-hidden bg-slate-800">
                  {project.image ? (
                    <>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
                      <Code2 size={48} className="text-slate-700 group-hover:text-cyan-500 transition-colors" />
                    </div>
                  )}

                  <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white border border-slate-700">
                    {project.category.toUpperCase()}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t, i) => (
                        <span key={i} className="text-xs font-mono text-cyan-300 bg-cyan-900/20 px-2 py-1 rounded border border-cyan-900/30">
                          {t}
                        </span>
                      ))}
                    </div>

                    {project.link !== '#' && (
                      <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-bold text-white hover:text-cyan-400 transition-colors">
                        Ver Proyecto <ExternalLink size={16} className="ml-2" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiencia" className="py-20 bg-slate-900 relative overflow-hidden">
        {/* Decoration */}
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[80px]"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center mb-16">
            <div className="p-3 bg-cyan-500/10 rounded-xl mr-4">
              <Briefcase className="text-cyan-400" size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Trayectoria Profesional</h2>
          </div>

          <div className="space-y-8 relative pl-8 md:pl-0">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-slate-800 transform -translate-x-1/2 hidden md:block"></div>
            <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-800 md:hidden"></div>

            {experience.map((job, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                {/* Timeline Dot */}
                <div className="absolute left-[-32px] md:left-1/2 w-4 h-4 rounded-full bg-cyan-500 border-4 border-[#0B1120] transform md:-translate-x-1/2 z-10 shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>

                {/* Spacer for the other side */}
                <div className="w-full md:w-1/2"></div>

                {/* Card */}
                <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-cyan-500/30 transition-all hover:-translate-y-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">{job.role}</h3>
                        <div className="text-cyan-400 font-medium flex items-center mt-1">
                          {job.company}
                        </div>
                      </div>
                      <span className="mt-2 sm:mt-0 px-3 py-1 text-xs font-bold text-slate-300 bg-slate-700 rounded-full whitespace-nowrap">
                        {job.period}
                      </span>
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                      {job.description}
                    </p>

                    <div className="border-t border-slate-700/50 pt-4 flex flex-wrap gap-2 justify-between items-center">
                      <div className="flex gap-2 flex-wrap">
                        {job.tech.map((t, i) => (
                          <span key={i} className="text-xs text-slate-500 bg-slate-900 px-2 py-1 rounded">
                            {t}
                          </span>
                        ))}
                      </div>
                      <span className="text-xs font-mono text-cyan-500">{job.highlight}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="certificaciones" className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">

            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <BookOpen className="mr-3 text-purple-400" /> Educación
              </h3>
              <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 mb-4">
                <h4 className="text-lg font-bold text-white">Secundaria Técnica 78</h4>
                <p className="text-slate-400 text-sm">Certificado Obtenido (2009 - 2012)</p>
                <p className="text-slate-500 text-sm mt-2">CDMX, México</p>
              </div>
              <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 opacity-75">
                <h4 className="text-lg font-bold text-white">Colegio de Bachilleres 1</h4>
                <p className="text-slate-400 text-sm">Informática (Incompleto)</p>
              </div>
            </div>

            {/* Certifications & Languages */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <Award className="mr-3 text-yellow-400" /> Cursos & Idiomas
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between bg-slate-900 p-4 rounded-lg border border-slate-800">
                  <span className="font-medium text-slate-200">Aprende Scrum</span>
                  <Zap size={16} className="text-yellow-400" />
                </div>
                <div className="flex items-center justify-between bg-slate-900 p-4 rounded-lg border border-slate-800">
                  <span className="font-medium text-slate-200">Domina Kotlin</span>
                  <Smartphone size={16} className="text-purple-400" />
                </div>
              </div>

              <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                <h4 className="font-bold text-white mb-4">Idiomas</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-300">Español</span>
                      <span className="text-cyan-400">Nativo</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-cyan-500 w-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-300">Inglés</span>
                      <span className="text-cyan-400">Lectura Técnica</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 w-[60%]"></div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contacto" className="bg-[#050914] py-20 border-t border-slate-900">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-block p-4 rounded-full bg-cyan-900/20 mb-6 animate-bounce">
            <Mail className="text-cyan-400" size={32} />
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">¿Hablamos?</h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-10 text-lg">
            Actualmente abierto a oportunidades para roles de <strong>Liderazgo Técnico</strong>, <strong>Flutter Senior</strong> y <strong>Full Stack</strong>.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
            <a href="mailto:gliorey87@gmail.com" className="group flex items-center justify-center px-8 py-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-cyan-500 hover:bg-slate-800 transition-all">
              <div className="text-left">
                <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Envíame un correo</div>
                <div className="text-white font-bold group-hover:text-cyan-400 transition-colors">gliorey87@gmail.com</div>
              </div>
              <Mail className="ml-4 text-slate-600 group-hover:text-cyan-400" />
            </a>

            <a href="https://wa.me/527299438560" className="group flex items-center justify-center px-8 py-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-green-500 hover:bg-slate-800 transition-all">
              <div className="text-left">
                <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">WhatsApp Directo</div>
                <div className="text-white font-bold group-hover:text-green-400 transition-colors">+52 7299438560</div>
              </div>
              <MessageCircle className="ml-4 text-slate-600 group-hover:text-green-400" />
            </a>
          </div>

          <div className="flex justify-center gap-8 mb-8">
            {socialLinks.map((link, idx) => (
              <a key={idx} href={link.url} className="text-slate-500 hover:text-white transition-colors transform hover:scale-110">
                {link.icon}
              </a>
            ))}
          </div>

          <div className="text-slate-600 text-sm border-t border-slate-900 pt-8">
            <p>© {new Date().getFullYear()} Jeovani Reyes Mendoza.</p>
            <p className="mt-2 text-slate-700">Hecho con React & Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;