import { lazy, Suspense } from 'react'

const InlineWidget = lazy(() =>
  import('react-calendly').then(module => ({ default: module.InlineWidget }))
)

const Calendly = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-[#0A0A0A]/95 z-[100] flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-[#1A1A1A] max-w-5xl w-full rounded-3xl p-6 relative max-h-[95vh] overflow-hidden border border-[#3A3A3A] shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-[#E5E4E2] text-2xl hover:text-[#D4AF37] transition-all duration-300 z-[110] bg-[#0A0A0A] w-10 h-10 rounded-full flex items-center justify-center border border-[#3A3A3A]"
          aria-label="Cerrar"
        >
          ✕
        </button>
        <div className="overflow-y-auto max-h-[85vh]">
          <Suspense fallback={
            <div className="text-[#E5E4E2] flex flex-col items-center justify-center py-40 gap-4">
              <div className="w-10 h-10 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin"></div>
              <p className="font-bold tracking-widest uppercase text-xs">Cargando calendario...</p>
            </div>
          }>
            <InlineWidget
              url="https://calendly.com/duraventures/auditoria-20min"
              styles={{
                height: '700px'
              }}
              pageSettings={{
                backgroundColor: '0A0A0A',
                primaryColor: 'D4AF37',
                textColor: 'FFFFFF',
                hideEventTypeDetails: false,
                hideLandingPageDetails: false
              }}
            />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default Calendly
