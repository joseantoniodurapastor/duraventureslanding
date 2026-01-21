// Google Tag Manager Event Tracking Helper

export const trackEvent = (eventName, properties = {}) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...properties
    });
  }
};

// Helper específicos para eventos comunes
export const trackCTAClick = (ctaText, location) => {
  trackEvent('cta_clicked', {
    cta_text: ctaText,
    location: location
  });
};

export const trackFormStart = () => {
  trackEvent('form_started');
};

export const trackFormFieldComplete = (fieldName) => {
  trackEvent('form_field_completed', {
    field_name: fieldName
  });
};

export const trackFormSubmit = (formData = {}) => {
  trackEvent('form_submitted', formData);
};

export const trackHemorragiaCalculated = (mensual, anual) => {
  trackEvent('hemorragia_calculated', {
    hemorragia_mensual: mensual,
    hemorragia_anual: anual
  });
};

export const trackCalendlyOpened = (source) => {
  trackEvent('calendly_opened', {
    source: source
  });
};

export const trackProductCTAClick = (productName) => {
  trackEvent('product_cta_clicked', {
    product_name: productName
  });
};

export const trackScrollDepth = (depth) => {
  trackEvent('scroll_depth', {
    depth: depth
  });
};

export default trackEvent;
