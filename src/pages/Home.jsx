import React from "react";

export default function Home() {
  const sections = [
    {
      id: 1,
      image: "/images/group1_clean.png",
      heading: "Lorem ipsum lorem",
      subheading: "Poétika",
    },
    {
      id: 2,
      image: "/images/group2_clean.png",
      heading: "Lorem ipsum lorem",
      subheading: "Poétika",
    },
    {
      id: 3,
      image: "/images/group3_clean.png",
      heading: "Lorem ipsum lorem",
      subheading: "Poétika",
    },
    {
      id: 4,
      image: "/images/group4_clean.png",
      heading: "Lorem ipsum lorem",
      subheading: "Poétika",
    },
  ];

  return (
    <div className="w-full">
      {/* 
      // Hero banner commented out
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src="/images/group4.png"
          alt="Poétika Hero Banner"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-light leading-tight mb-4 tracking-wide">
              POÉTIKA
            </h1>
            <p className="text-lg md:text-xl font-light">
              Criando arte com propósito e impacto
            </p>
          </div>
        </div>
      </section>
      */}

      {/* Content Sections */}
      {sections.map((section) => (
        <section
          key={section.id}
          className="relative w-full aspect-video md:aspect-[3/1] overflow-hidden"
        >
          <img
            src={section.image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end justify-end p-6 md:p-12">
            <div className="text-right text-white max-w-lg">
              <h2 className="text-2xl md:text-3xl font-light leading-tight">
                {section.heading}
              </h2>
              <p className="text-sm md:text-base mt-2">{section.subheading}</p>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
