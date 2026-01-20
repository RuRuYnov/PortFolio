"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  Github, Linkedin, Mail, Shield, Terminal, Download, 
  Check, Menu, X, Fingerprint, Phone, Database, Server as ServerIcon, 
  Network, Layers, Code2, Trophy, Calendar, Target
} from 'lucide-react';

const RDLogo = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className={className}>
    <defs>
      <linearGradient id="vertDuriez" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#34c759" stopOpacity="1" />
        <stop offset="100%" stopColor="#50c878" stopOpacity="1" />
      </linearGradient>
    </defs>
    <text 
      x="50%" 
      y="50%" 
      dominantBaseline="middle" 
      textAnchor="middle" 
      fontFamily="Arial, sans-serif" 
      fontWeight="bold" 
      fontSize="100" 
      fill="url(#vertDuriez)"
      dy=".1em"
    >
      RD
    </text>
  </svg>
);

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('Reseau');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ruben.duriez@icloud.com");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const navItems = [
    { label: 'À propos', id: 'apropos' },
    { label: 'Compétences', id: 'competences' },
    { label: 'Projets', id: 'projets' },
    { label: 'Événements', id: 'evenements' },
    { label: 'Contact', id: 'contact' },
  ];

  const skills = {
    Reseau: [
      { 
        title: "Architecture & Protocoles", 
        icon: <Network className="w-6 h-6 text-emerald-500" />,
        tags: ["TCP/IP", "DNS / DHCP", "Modèle OSI", "VLAN", "VPN", "Routing"] 
      },
      { 
        title: "Outils & Configuration", 
        icon: <Layers className="w-6 h-6 text-emerald-500" />,
        tags: ["Cisco Packet Tracer", "Wireshark", "Pare-feu", "Switching", "Troubleshooting"] 
      },
    ],
    Systeme: [
      { 
        title: "Environnement Windows", 
        icon: <Shield className="w-6 h-6 text-emerald-500" />,
        tags: ["Windows Server", "Active Directory", "GPO", "PowerShell", "Hyper-V"] 
      },
      { 
        title: "Environnement Linux", 
        icon: <Terminal className="w-6 h-6 text-emerald-500" />,
        tags: ["Debian / Ubuntu", "Bash Scripting", "Droits & Permissions", "SSH", "Cron"] 
      },
    ],
    DevData: [
      { 
        title: "Développement & Web", 
        icon: <Code2 className="w-6 h-6 text-emerald-500" />,
        tags: ["Python", "Golang (Go)", "JavaScript", "HTML5 / CSS3", "Git / GitHub"] 
      },
      { 
        title: "Data & Virtualisation", 
        icon: <Database className="w-6 h-6 text-emerald-500" />,
        tags: ["MySQL", "SQLite", "Docker", "VirtualBox", "VMware"] 
      },
    ]
  };

  const projects = [
    {
      title: "SIEM",
      category: "Scolaire / Pro",
      desc: "Conception d'une solution SIEM scalable à visée commerciale. Pipeline complet : ingestion (Kafka), indexation (ElasticSearch) et conteneurisation.",
      techs: ["ElasticSearch", "Kafka", "Docker", "Python"],
      image: "/projet-siem.jpg"
    },
    {
      title: "Forum",
      category: "Scolaire",
      desc: "Forum en ligne complet : système d'inscription/connexion, publication de posts et commentaires, gestion de likes/dislikes et filtrage par catégories.",
      techs: ["Go", "SQLite", "Auth"],
      image: "/projet-forum.jpg"
    },
    {
      title: "The Brave Little Drop",
      category: "Scolaire",
      desc: "Jeu RogueLike en 2D où l'on incarne une goutte d'eau devant survivre dans des milieux hostiles. Génération procédurale de niveaux.",
      techs: ["C#", "Unity"],
      image: "/projet-drop.jpg"
    },
    {
      title: "QuizBattle",
      category: "Scolaire",
      desc: "Application web interactive de duel de culture générale. Deux joueurs s'affrontent sur une série de 10 QCM pour déterminer le vainqueur au score.",
      techs: ["HTML", "CSS", "JavaScript"],
      image: "/projet-quizz.jpg"
    },
    {
      title: "Rocket",
      category: "Scolaire",
      desc: "À la conquête de l'univers JS ! Exercice de manipulation du DOM : programmation du compte à rebours, de l'allumage et du décollage de la fusée.",
      techs: ["JavaScript", "DOM", "CSS"],
      image: "/projet-rocket.gif"
    },
    {
      title: "Groupie Tracker",
      category: "Scolaire",
      desc: "Application de suivi d'artistes utilisant une API REST publique. Permet de visualiser les dates de concerts et informations.",
      techs: ["Go", "HTML/CSS", "API REST"],
      image: "/projet-groupie.jpg" 
    },
    {
      title: "Hangman Web",
      category: "Scolaire",
      desc: "Adaptation du célèbre jeu du Pendu en version Web. Logique serveur robuste gérant les états de jeu.",
      techs: ["Go", "HTML/CSS"],
      image: "/projet-hangman.jpg"
    },
    {
      title: "RocketCar",
      category: "Scolaire",
      desc: "Jeu type 'Subway Surfer' 2D affiché sur PC mais contrôlé en temps réel via le gyroscope d'un téléphone mobile.",
      techs: ["TypeScript", "WebSockets"],
      image: "/projet-rocketcar.jpg"
    }
  ];

  const events = [
    {
      title: "CTF Ynov",
      date: "Décembre 2025",
      type: "Compétition",
      desc: "Compétition nationale inter-campus par équipes de 5. Épreuves variées : Développement, OSINT et Cryptographie.",
      result: "🥇 1ère place (Campus Lille)",
      image: "/event-ctf-ynov.jpg"
    },
    {
      title: "Challenge 48h",
      date: "Janvier 2025",
      type: "Compétition B1 vs B3",
      desc: "Scénario d'intrusion en temps limité : extraction critique de la mémoire d'un serveur de base de données sur un réseau inconnu.",
      result: "🥉 3ème place", 
      image: "/event-challenge48h.jpg"
    },
    {
      title: "Hackvens 2024",
      date: "Novembre 2024",
      type: "Conférence", 
      desc: "Participation à la conférence annuelle organisée par Advens. Veille technologique sur les nouvelles menaces et solutions en cybersécurité.", 
      result: null, 
      image: "/event-hackvens.jpg"
    },
    {
      title: "Hackathon", 
      date: "Octobre 2024",
      type: "Tournoi",
      desc: "Compétition intensive organisée par le mentorat filière. Configuration d'Active Directory, épreuves de CTF et investigation OSINT.",
      result: null, 
      image: "/event-hackathon.jpg"
    },
    {
      title: "Hack The Box",
      date: "Entraînement Continu",
      type: "Training",
      desc: "Pratique régulière du pentesting via une licence académique. Résolution de machines virtuelles (Box) et challenges CTF variés.",
      result: "Progression constante",
      image: "/event-htb.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-stone-950 text-stone-300 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-stone-950/90 backdrop-blur-md border-b border-stone-800 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-4 flex justify-center items-center relative">
          
          <div className="hidden md:flex gap-8 text-sm font-medium text-stone-400">
            {navItems.map((item) => (
                <a key={item.label} href={`#${item.id}`} className="relative hover:text-emerald-400 transition duration-300 group">
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
            ))}
          </div>

          <button className="md:hidden absolute right-4 text-stone-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <header className="pt-40 pb-20 px-4 flex flex-col items-center justify-center text-center min-h-screen relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-stone-900 via-stone-950 to-stone-950">
        
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1c1917_1px,transparent_1px),linear-gradient(to_bottom,#1c1917_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

        <div className="relative z-10 animate-fade-in-up max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-emerald-950/30 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-widest shadow-[0_0_10px_rgba(16,185,129,0.2)]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Recherche Stage & Alternance
            </div>

            <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter">
            RUBEN <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-600">DURIEZ</span>
            </h1>

            <h2 className="text-xl md:text-3xl font-mono text-stone-400 mb-8 h-8 flex justify-center items-center">
            <span className="border-r-2 border-emerald-500 animate-pulse pr-2">
                Admin. Sys. & Réseaux
            </span>
            </h2>
            
            <p className="text-stone-400 mb-10 text-lg leading-relaxed max-w-2xl mx-auto">
              Actuellement en 2ème année de Bachelor. Au-delà de l'administration Windows et Linux, 
              je mets mes compétences techniques au service de la <span className="text-emerald-400 font-medium">surveillance</span> et de la <span className="text-emerald-400 font-medium">protection active</span> des systèmes d'information.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
                <a href="#projets" className="px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-stone-950 rounded font-bold transition hover:scale-105 shadow-[0_0_20px_rgba(5,150,105,0.4)]">
                Voir mes projets
                </a>
                <a href="#contact" className="px-8 py-3 border border-stone-700 hover:border-emerald-500 text-stone-300 hover:text-emerald-400 rounded font-medium transition hover:bg-stone-900">
                Me contacter
                </a>
            </div>
        </div>
      </header>

      <section id="apropos" className="py-20 px-4 bg-stone-900/30 border-y border-stone-800">
         <div className="max-w-4xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2 justify-center md:justify-start">
                    <RDLogo className="w-10 h-10 mr-2" /> Profil
                </h3>
                <p className="text-stone-400 leading-relaxed mb-4">
                    Passionné par la CyberSécurité, je suis à la recherche d’un <strong className="text-emerald-400">stage (min. 5 semaines) à partir de Juin</strong> et d’une <strong className="text-emerald-400">alternance pour Septembre</strong> (rythme 2 sem. entreprise / 1 sem. école).
                </p>
                <p className="text-stone-400 leading-relaxed mb-6">
                    Mon objectif est de monter en compétences sur des architectures complexes et de participer activement à la sécurisation des infrastructures.
                </p>

                <div className="flex justify-center md:justify-start">
                    <a 
                        href="/cv.pdf" 
                        download="CV Ruben DURIEZ Admin. Sys. & Réseaux.pdf"
                        className="flex items-center gap-2 px-6 py-2 border border-emerald-600 text-emerald-500 rounded hover:bg-emerald-600 hover:text-stone-950 transition font-medium group"
                    >
                        <Download size={18} className="group-hover:animate-bounce" /> 
                        Télécharger mon CV
                    </a>
                </div>

            </div>
            <div className="flex-1 flex justify-center">
                <div className="p-6 bg-stone-950 border border-stone-800 rounded-xl relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-lime-500"></div>
                    <div className="text-center">
                        <div className="w-24 h-24 bg-stone-800 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">👨‍💻</div>
                        <div className="text-white font-bold text-lg">Ruben DURIEZ</div>
                        <div className="text-emerald-500 text-sm mb-4">@RuRuYnov</div>
                        <a href="https://github.com/RuRuYnov" target="_blank" className="text-xs border border-stone-700 px-3 py-1 rounded hover:bg-emerald-500 hover:text-stone-950 transition">GitHub Profile</a>
                    </div>
                </div>
            </div>
         </div>
      </section>

      <section id="competences" className="py-24 px-4 relative">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-stone-800 pb-6">
            <div>
                <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                    <Fingerprint className="text-emerald-500" />
                    Compétences Techniques
                </h3>
                <p className="text-stone-500 mt-2">Stack technique & outils maîtrisés</p>
            </div>
            
            <div className="flex bg-stone-900/50 p-1 rounded-lg border border-stone-800 mt-4 md:mt-0">
                {Object.keys(skills).map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-5 py-2 rounded-md text-sm font-medium transition-all ${
                    activeTab === tab 
                    ? 'bg-emerald-600 text-stone-950 shadow-lg' 
                    : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800'
                    }`}
                >
                    {tab === 'Reseau' && <Network className="inline w-4 h-4 mr-2" />}
                    {tab === 'Systeme' && <ServerIcon className="inline w-4 h-4 mr-2" />}
                    {tab === 'DevData' && <Database className="inline w-4 h-4 mr-2" />}
                    
                    {tab === 'Reseau' ? 'Réseaux' : tab === 'Systeme' ? 'Systèmes' : 'Dev & Données'}
                </button>
                ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {/* @ts-ignore */}
            {skills[activeTab].map((skill: any, index: number) => (
              <div key={index} className="group bg-stone-900/50 border border-stone-800 p-6 rounded-xl hover:border-emerald-500/50 transition-all duration-300 hover:bg-stone-900 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-900/20">
                
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-stone-950 rounded-lg border border-stone-800 group-hover:border-emerald-500/30 transition">
                        {skill.icon}
                    </div>
                    <h4 className="font-bold text-lg text-white">{skill.title}</h4>
                </div>

                <div className="flex flex-wrap gap-2">
                    {skill.tags.map((tag: string, i: number) => (
                        <span key={i} className="px-3 py-1 text-xs font-mono bg-emerald-950/30 text-emerald-400 border border-emerald-900/50 rounded-full group-hover:border-emerald-500/30 transition">
                            {tag}
                        </span>
                    ))}
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projets" className="py-24 px-4 bg-stone-900/20 border-y border-stone-900">
        <div className="max-w-6xl mx-auto">
           <div className="mb-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Projets & Réalisations</h3>
            <div className="w-20 h-1 bg-emerald-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="group relative bg-stone-950 border border-stone-800 rounded-xl overflow-hidden hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                
                <div className="h-40 bg-stone-900 relative overflow-hidden">
                   <Image 
                     src={project.image} 
                     alt={project.title}
                     fill
                     className="object-cover opacity-60 transition duration-500 transform group-hover:scale-110 group-hover:opacity-100"
                   />
                </div>
                
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="inline-block px-2 py-0.5 rounded text-[10px] font-bold font-mono bg-emerald-950/50 text-emerald-400 border border-emerald-900">
                        {project.category}
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-bold text-stone-100 mb-2 group-hover:text-emerald-400 transition">{project.title}</h4>
                  <p className="text-stone-400 text-xs mb-4 leading-relaxed line-clamp-3">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.techs.map((tech, i) => (
                        <span key={i} className="text-[10px] text-stone-500 bg-stone-900 px-2 py-0.5 rounded border border-stone-800">
                            {tech}
                        </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="evenements" className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h3 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
               <Trophy className="text-emerald-500" /> Événements & Entraînement
            </h3>
            <div className="w-20 h-1 bg-emerald-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <div key={index} className="group relative bg-stone-950 border border-stone-800 rounded-xl overflow-hidden hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                 
                 <div className="h-40 bg-stone-900 relative overflow-hidden">
                    <Image 
                      src={event.image} 
                      alt={event.title}
                      fill
                      className="object-cover opacity-60 transition duration-500 transform group-hover:scale-110 group-hover:opacity-100"
                    />
                 </div>

                 <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                        <div className="inline-block px-2 py-0.5 rounded text-[10px] font-bold font-mono bg-emerald-950/50 text-emerald-400 border border-emerald-900">
                           {event.type}
                        </div>
                        <span className="text-[10px] text-stone-500 flex items-center gap-1 font-mono uppercase tracking-wider">
                           <Calendar size={12} /> {event.date}
                        </span>
                    </div>

                    <h4 className="text-lg font-bold text-stone-100 mb-2 group-hover:text-emerald-400 transition">{event.title}</h4>
                    <p className="text-stone-400 text-xs mb-4 leading-relaxed line-clamp-3">
                        {event.desc}
                    </p>

                    {event.result && (
                       <div className="mt-auto pt-3 border-t border-stone-800 flex items-center gap-2 text-xs font-medium text-emerald-400">
                           {event.title === "Hack The Box" ? <Target size={14} /> : <Trophy size={14} />}
                           {event.result}
                       </div>
                    )}
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="py-12 bg-stone-950 border-t border-stone-900 text-center md:text-left">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h4 className="font-bold text-stone-200 text-lg">Ruben DURIEZ</h4>
            <p className="text-stone-500 text-sm">Admin. Sys. & Réseaux en formation</p>
          </div>
          
          <div className="flex gap-6 items-center">
            <a href="https://github.com/RuRuYnov" target="_blank" title="GitHub" className="p-2 rounded-full bg-stone-900 text-stone-400 hover:text-emerald-400 hover:bg-stone-800 transition"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/ruben-duriez-a09a092a2/" target="_blank" title="LinkedIn" className="p-2 rounded-full bg-stone-900 text-stone-400 hover:text-emerald-400 hover:bg-stone-800 transition"><Linkedin size={20} /></a>
            
            <button 
                onClick={handleCopyEmail}
                className={`p-2 rounded-full bg-stone-900 transition relative group ${isCopied ? 'text-emerald-500 hover:bg-stone-900' : 'text-stone-400 hover:text-emerald-400 hover:bg-stone-800'}`}
                title="Copier l'email"
            >
                {isCopied ? <Check size={20} /> : <Mail size={20} />}
                
                {isCopied && (
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-xs bg-emerald-600 text-white px-2 py-1 rounded shadow-lg animate-bounce whitespace-nowrap">
                        Copié !
                    </span>
                )}
            </button>
          </div>

          <div className="text-right text-stone-600 text-xs">
            <p className="mb-1 font-mono flex items-center gap-2 justify-end">
                <Phone size={14} className="text-emerald-500" />
                +33 7 86 61 39 67
            </p>
            <p>Développé par mes soins avec Next.js & Tailwind</p>
          </div>
        </div>
      </footer>
    </div>
  );
}