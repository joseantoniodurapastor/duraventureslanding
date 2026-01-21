const Numeros = () => {
  const numeros = [
    { valor: "85%+", label: "Margen bruto" },
    { valor: "48h", label: "Implementación Closer" },
    { valor: "7 días", label: "Implementación IA Feroz" },
    { valor: "100%", label: "Garantía brutal" }
  ]

  return (
    <section className="bg-zinc-oscuro px-4 md:px-8 lg:px-16 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {numeros.map((numero, index) => (
            <div key={index} className="text-center">
              <div className="font-mono text-oro-ejecutivo text-[26px] md:text-[32px] font-normal mb-4">
                {numero.valor}
              </div>
              <p className="font-body text-platino-dark text-base md:text-lg">
                {numero.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Numeros
