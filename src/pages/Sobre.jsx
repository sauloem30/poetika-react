import React, { useState } from "react";

export default function Sobre() {
  const [active, setActive] = useState(null);

  const team = [
    {
      id: 1,
      image: "/images/item.png",
      name: "Nome do Integrante",
      bio: "Breve descrição do integrante com detalhes e histórico profissional.",
    },
    {
      id: 2,
      image: "/images/item.png",
      name: "Nome do Integrante",
      bio: "Especialista em cinema e projetos visuais, traz inovação e estética.",
    },
    {
      id: 3,
      image: "/images/item.png",
      name: "Nome do Integrante",
      bio: "Diretor artístico com foco em teatro e narrativa social.",
    },
  ];

  return (
    <div className="w-full">
      {/* Section 1: Hero + Text */}
      <section className="w-full">
        <img
          src="/images/container.png"
          alt="Sobre Nós"
          className="w-full h-auto object-cover"
        />
        <div className="max-w-3xl mx-auto px-4 py-12 text-center">
          <p className="text-gray-700 leading-relaxed text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
          <p className="text-sm mt-6 text-gray-500 font-medium">Leia mais ↓</p>
        </div>
      </section>

      {/* Section 2: Team */}
      <section className="bg-white py-16 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="mx-auto w-[60%] border-t border-gray-300 mb-8"></div>
          <h2 className="text-3xl font-light tracking-wide mb-2">NOSSO TIME</h2>
          <div className="mx-auto w-[60%] border-b border-gray-300 mb-10"></div>

          <div className="flex flex-col md:flex-row gap-4">
            {team.map((member) => (
              <div
                key={member.id}
                onMouseEnter={() => setActive(member.id)}
                onMouseLeave={() => setActive(null)}
                className={`group flex-1 relative bg-black text-white overflow-hidden transition-all duration-500 ease-in-out ${
                  active === member.id ? "md:flex-[1.3]" : "md:flex-[1]"
                }`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 scale-100"
                />

                {/* Right-side drawer text with animation + transparency */}
                <div
                  className={`absolute inset-y-0 right-0 w-0 overflow-hidden bg-white/80 backdrop-blur-sm text-black text-left px-6 py-8 transition-all duration-500 ${
                    active === member.id ? "w-[60%] md:w-[50%]" : ""
                  }`}
                >
                  <div
                    className={`transition-all duration-500 ease-out transform ${
                      active === member.id
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-10"
                    }`}
                  >
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-sm">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
