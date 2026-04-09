"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-16">
      <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Info */}
        <div className="space-y-6">
          <div className="space-y-1">
            <p className="text-blue-600 text-sm font-semibold tracking-widest uppercase">
              Consulta Online &amp; Presencial
            </p>
            <h1 className="text-4xl font-bold text-gray-900 leading-tight">
              Dr. João da Silva
            </h1>
            <p className="text-lg text-gray-500 font-medium">
              Clínico Geral • CRM 12345-SP
            </p>
          </div>

          <p className="text-gray-600 text-base leading-relaxed">
            Atendimento humanizado e personalizado para cuidar da sua saúde com
            excelência. Agende sua consulta de forma rápida e simples.
          </p>

          <ul className="space-y-3 text-gray-700">
            {[
              "Mais de 15 anos de experiência",
              "Atendimento online e presencial",
              "Retorno em até 24 horas",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">
                  ✓
                </span>
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Form */}
        <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-1">
            Agende sua consulta
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Preencha o formulário e entraremos em contato.
          </p>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nome completo
              </label>
              <input
                id="name"
                type="text"
                placeholder="Maria Oliveira"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                required
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                WhatsApp
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="(11) 9 9999-9999"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                E-mail
              </label>
              <input
                id="email"
                type="email"
                placeholder="maria@email.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                required
              />
            </div>

            <div>
              <label
                htmlFor="reason"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Motivo da consulta
              </label>
              <textarea
                id="reason"
                rows={3}
                placeholder="Descreva brevemente o motivo da consulta..."
                className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg text-sm transition-colors cursor-pointer"
            >
              Solicitar agendamento
            </button>

            <p className="text-xs text-gray-400 text-center">
              Seus dados estão seguros e não serão compartilhados.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
