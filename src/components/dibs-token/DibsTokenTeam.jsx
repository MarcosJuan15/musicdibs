// src/components/dibs-token/DibsTokenTeam.jsx
import { Users, Award, Briefcase, Rocket, Linkedin } from "lucide-react";
import Image from 'next/image';

export default function DibsTokenTeam() {
    const foundingTeam = [
        {
            name: "Miguel Pérez",
            role: "CEO",
            description: "Doc. en Telco e Ing. Computación. +20 años en proyectos y negocios TIC",
            companies: ["OTAN", "ISDEFE", "EALDE"],
            image: "/assets/team/miguel-pérez.png",
            linkedin: "https://www.linkedin.com/in/mapg1972/"
        },
        {
            name: "Álvaro Chico",
            role: "CTO",
            description: "Ingeniero de software full-stack y experto en Blockchain. +15 años en proyectos TI",
            companies: ["IBM", "Telefónica", "Ericsson"],
            image: "/assets/team/álvaro-chico.jpg",
            linkedin: "https://www.linkedin.com/in/%C3%A1lvaro-chico-gonz%C3%A1lez-024501285/"
        },
        {
            name: "Mario García",
            role: "CMO",
            description: "Experto en marketing de negocio Blockchain. +10 años en marketing",
            companies: ["Welov Labs", "SCI Films"],
            image: "/assets/team/mario-garcía.jpg",
            linkedin: "https://www.linkedin.com/in/mario-garcia-prados/"
        },
        {
            name: "Luis Couto",
            role: "COO",
            description: "MBA, BBA y ADE. Auditor certificado. +20 años en operaciones y finanzas",
            companies: ["Abengoa", "PwC", "IE"],
            image: "/assets/team/luis-couto.jpg",
            linkedin: "https://www.linkedin.com/in/luismcouto/"
        },
    ];

    const teamMembers = [
        { name: "Pablo Cumpián", role: "Software Engineer", image: "/assets/team/pablo-cumpián.png" },
        { name: "Fernanda Gomes", role: "Fullstack Developer", image: "/assets/team/fernanda-gomes.png" },
        { name: "Salvador Roig", role: "Fullstack Developer", image: "/assets/team/salvador-roig.png" },
        { name: "Ricardo Campos", role: "Fullstack Developer", image: "/assets/team/ricardo-campos.png" },
        { name: "Pedro Gil", role: "Business Developer Manager", image: "/assets/team/pedro-gil.png" },
        { name: "Ana Isabel Rodado", role: "Business Development Lead", image: "/assets/team/ana-isabel-rodado.png" },
        { name: "Clara Sánchez de Toca", role: "Business Development Assistant", image: "/assets/team/clara-sánchez.png" },
        { name: "Noélia Rodríguez", role: "Business Development Assistant", image: "/assets/team/noelia-rodríguez.png" },
        { name: "Marta Escabias", role: "Marketing Manager", image: "/assets/team/marta-escabias.png" },
        { name: "Jorge Gomes Durán", role: "Tech Advisor", image: "/assets/team/jorge-gomes.png" },
        { name: "David Pestana", role: "Tech Advisor", image: "/assets/team/david-pestana.png" },
        { name: "José Bravo", role: "Legal Advisor", image: "/assets/team/josé-bravo.png" },
    ];

    // Colores para las cajitas del equipo extendido
    const colorVariants = [
        "from-blue-900/10 to-purple-800/10 border-blue-900/20",
        "from-purple-800/10 to-pink-600/10 border-purple-800/20", 
        "from-pink-600/10 to-blue-900/10 border-pink-600/20",
        "from-blue-900/10 to-pink-600/10 border-blue-900/20"
    ];

    return (
        <section className="py-20 px-4 bg-white" itemScope itemType="https://schema.org/WebPageElement">
            <div className="container mx-auto max-w-6xl">
                {/* Header centrado */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" itemProp="headline">
                        Conoce a Nuestro Equipo
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-900 via-purple-800 to-pink-600 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto" itemProp="description">
                        Musicdibs y el token DIBS cuenta con el equipo fundador de iCommunity. Un equipo emprendedor y multidisciplinar con una media de más de 20 años de experiencia contrastada en el mundo tecnológico e innovación corporativa. Profesionales apasionados, dinámicos y con gran capacidad para alcanzar los objetivos marcados.
                    </p>
                </div>

                {/* Equipo Fundador */}
                <div className="mb-10">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {foundingTeam.map((member, index) => (
                            <div 
                                key={index} 
                                className="text-center bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-6 group relative"
                            >
                                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-900/20 group-hover:border-blue-900/40 transition-colors">
                                    <Image 
                                        src={member.image}
                                        alt={member.name}
                                        width={128}
                                        height={128}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                
                                {/* LinkedIn Icon */}
                                <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute top-4 right-4 w-8 h-8 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                                    aria-label={`LinkedIn de ${member.name}`}
                                >
                                    <Linkedin className="w-4 h-4 text-white" />
                                </a>

                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-900 to-purple-800 text-white mb-3">
                                    {member.role}
                                </span>
                                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{member.description}</p>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {member.companies.map((company, idx) => (
                                        <span 
                                            key={idx} 
                                            className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors"
                                        >
                                            {company}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Descripción del equipo extendido */}
                <div className="text-center mb-8 max-w-4xl mx-auto">
                    <p className="text-lg text-gray-600 leading-relaxed">
                        A ellos se une un experimentado grupo de profesionales de primer nivel: desarrolladores Full Stack, blockchain y expertos en comunicación y promoción en los mercados asiático, europeo, estadounidense y latinoamericano.
                    </p>
                </div>

                {/* Resto del Equipo */}
                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {teamMembers.map((member, index) => {
                        const colorVariant = colorVariants[index % colorVariants.length];
                        return (
                            <div 
                                key={index} 
                                className={`text-center bg-gradient-to-br ${colorVariant} rounded-xl border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-4 group`}
                            >
                                <div className="relative w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden border-2 border-white/50 group-hover:border-white/80 transition-colors">
                                    <Image 
                                        src={member.image}
                                        alt={member.name}
                                        width={80}
                                        height={80}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <h4 className="text-base font-semibold text-gray-900 mb-1">{member.name}</h4>
                                <p className="text-xs text-gray-700 font-medium">{member.role}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Schema.org for Organization and Team Members */}
                <div itemScope itemType="https://schema.org/Organization" className="hidden">
                    <meta itemProp="name" content="MusicDIBS Team" />
                    <meta itemProp="description" content="Experienced team behind MusicDIBS and DIBS Token" />
                    {[...foundingTeam, ...teamMembers].map((member, index) => (
                        <div key={index} itemScope itemType="https://schema.org/Person">
                            <meta itemProp="name" content={member.name} />
                            <meta itemProp="jobTitle" content={member.role} />
                            {member.description && <meta itemProp="description" content={member.description} />}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}