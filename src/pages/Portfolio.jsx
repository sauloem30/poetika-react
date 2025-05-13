import React from "react";

const projetos = [
  { id: 1, image: "/images/item_2.png" },
  { id: 2, image: "/images/item_3.png" },
  { id: 3, image: "/images/item_4.png" },
  { id: 4, image: "/images/item_5.png" },
  { id: 5, image: "/images/item_6.png" },
  { id: 6, image: "/images/item_7.png" },
  { id: 7, image: "/images/item_8.png" },
  { id: 8, image: "/images/item_9.png" },
  { id: 9, image: "/images/item_10.png" },
];

export default function Portfolio() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <img
          src="/images/portfolio_hero.png"
          alt="Banner"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-light mb-4">
            Lorem ipsum lorem
          </h1>
          <p className="max-w-2xl text-sm md:text-base mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
          <button className="bg-white text-black px-6 py-2 font-semibold text-sm uppercase hover:bg-gray-100 transition">
            Veja aqui
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto bg-gray-100 shadow-lg rounded-lg p-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
            {[1, 2, 3, 4].map((i) => (
              <div key={i}>
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gray-100  border border-black rounded-full text-2xl text-black">
                  🎬
                </div>
                <h3 className="text-lg font-semibold mb-2">Lorem Ipsum</h3>
                <p className="text-sm text-gray-600">
                  Lorem Ipsum has been the industry's standard dummy text since the 1500s.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid gap-4 grid-cols-2 md:grid-cols-3">
          {projetos.map((item) => (
            <div key={item.id} className="overflow-hidden">
              <img
                src={item.image}
                alt={`Projeto ${item.id}`}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
