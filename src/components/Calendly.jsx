import { lazy, Suspense } from 'react'

const InlineWidget = lazy(() => 
  import('react-calendly').then(module => ({ default: module.InlineWidget }))
)

const Calendly = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
      <div className="bg-zinc-oscuro max-w-4xl w-full rounded-lg p-4 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl hover:text-oro-ejecutivo transition-colors duration-200 z-10"
          aria-label="Cerrar"
        >
          ✕
        </button>
        <Suspense fallback={
          <div className="text-white text-center py-20">
            Cargando calendario...
          </div>
        }>
          <InlineWidget
            url="https://calendly.com/duraventures/auditoria-20min"
            styles={{
              height: '700px'
            }}
            pageSettings={{
              backgroundColor: '09090b',
              primaryColor: 'D4AF37',
              textColor: 'FFFFFF'
            }}
          />
        </Suspense>
      </div>
    </div>
  )
}

export default Calendly
