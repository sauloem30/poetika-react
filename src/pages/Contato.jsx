import React from "react";

export default function Contato() {
  return (
    <div className="w-full">
      {/* Contact Background Section */}
      <section className="relative w-full min-h-screen bg-gray-200">
        {/* Background Image */}
        <img
          src="/images/background_contato.jpg"
          alt="Contato Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Form Container */}
        <div className="relative z-10 max-w-[900px] mx-auto px-6 py-20">
          <div className="bg-white p-8 rounded shadow-lg">
            <h2 className="text-2xl font-light mb-8 text-center">FALE COM A GENTE</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-1">Nome</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Telefone</label>
                <input
                  type="tel"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="(11) 99999-9999"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Mensagem</label>
                <textarea
                  rows="5"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Sua mensagem..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-300 transition px-6 py-2 rounded text-black font-semibold"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
