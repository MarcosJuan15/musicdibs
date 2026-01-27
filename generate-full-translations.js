const fs = require('fs');
const path = require('path');

// Todas las claves que necesitan todas tus páginas
const allTranslations = {
  en: {
    Home: { title: "MusicDibs" },
    Navigation: { home: "Home" },
    
    // Support page
    support: {
      metadata: {
        title: "Support - MusicDibs",
        description: "MusicDibs support center",
        keywords: "support, help, contact, faq",
        og_title: "Support - MusicDibs",
        og_description: "MusicDibs support center",
        og_alt: "Support image"
      },
      hero: {
        title: "Need help?",
        subtitle: "We are here to help you",
        schema_name: "MusicDibs Support",
        schema_description: "MusicDibs technical support and customer service",
        schema_service_type: "Technical support and customer service",
        schema_phone: "+1 123 456 7890",
        schema_email: "support@musicdibs.com",
        schema_sms: "+1 234 567 8901"
      }
    },
    
    // Partners page
    partners: {
      metadata: {
        title: "Partners - MusicDibs",
        description: "Become a MusicDibs partner",
        keywords: "partners, alliances, business",
        og_title: "Partners - MusicDibs",
        og_description: "Become a MusicDibs partner",
        og_alt: "Partners image"
      },
      hero: {
        title: "Become a Partner",
        subtitle: "Join our network of strategic alliances"
      }
    },
    
    // FAQ page
    faq: {
      metadata: {
        title: "FAQ - MusicDibs",
        description: "Frequently asked questions",
        keywords: "faq, questions, help",
        og_title: "FAQ - MusicDibs",
        og_description: "Frequently asked questions",
        og_alt: "FAQ image"
      },
      hero: {
        title: "Frequently Asked Questions",
        subtitle: "Find answers to common questions"
      }
    },
    
    // Auth pages
    auth: {
      login: {
        title: "Login",
        button: "Sign In"
      },
      signup: {
        title: "Sign Up",
        button: "Create Account"
      }
    },
    
    // Other pages - claves mínimas
    market: { title: "Market" },
    shop: { title: "Shop" },
    certification: { title: "Certification" },
    "dibs-token": { title: "DIBS Token" },
    distribution: { title: "Distribution" },
    privacy: { title: "Privacy Policy" },
    terms: { title: "Terms and Conditions" },
    tech: { title: "Tech & Legal" },
    verification: { title: "Verification" },
    sla: { title: "SLA" },
    "cookie-policy": { title: "Cookie Policy" }
  },
  
  es: {
    Home: { title: "MusicDibs" },
    Navigation: { home: "Inicio" },
    
    support: {
      metadata: {
        title: "Soporte - MusicDibs",
        description: "Centro de soporte de MusicDibs",
        keywords: "soporte, ayuda, contacto, preguntas frecuentes",
        og_title: "Soporte - MusicDibs",
        og_description: "Centro de soporte de MusicDibs",
        og_alt: "Imagen de soporte"
      },
      hero: {
        title: "¿Necesitas ayuda?",
        subtitle: "Estamos aquí para ayudarte",
        schema_name: "Soporte MusicDibs",
        schema_description: "Servicio de soporte técnico y atención al cliente de MusicDibs",
        schema_service_type: "Soporte técnico y atención al cliente",
        schema_phone: "+34 123 456 789",
        schema_email: "soporte@musicdibs.com",
        schema_sms: "+34 612 345 678"
      }
    },
    
    partners: {
      metadata: {
        title: "Socios - MusicDibs",
        description: "Conviértete en socio de MusicDibs",
        keywords: "socios, alianzas, negocio",
        og_title: "Socios - MusicDibs",
        og_description: "Conviértete en socio de MusicDibs",
        og_alt: "Imagen de socios"
      },
      hero: {
        title: "Conviértete en Socio",
        subtitle: "Únete a nuestra red de alianzas estratégicas"
      }
    },
    
    faq: {
      metadata: {
        title: "Preguntas Frecuentes - MusicDibs",
        description: "Preguntas frecuentes",
        keywords: "preguntas frecuentes, preguntas, ayuda",
        og_title: "Preguntas Frecuentes - MusicDibs",
        og_description: "Preguntas frecuentes",
        og_alt: "Imagen de preguntas frecuentes"
      },
      hero: {
        title: "Preguntas Frecuentes",
        subtitle: "Encuentra respuestas a preguntas comunes"
      }
    },
    
    auth: {
      login: {
        title: "Iniciar Sesión",
        button: "Acceder"
      },
      signup: {
        title: "Registrarse",
        button: "Crear Cuenta"
      }
    },
    
    market: { title: "Mercado" },
    shop: { title: "Tienda" },
    certification: { title: "Certificación" },
    "dibs-token": { title: "Token DIBS" },
    distribution: { title: "Distribución" },
    privacy: { title: "Política de Privacidad" },
    terms: { title: "Términos y Condiciones" },
    tech: { title: "Tecnología y Legal" },
    verification: { title: "Verificación" },
    sla: { title: "SLA" },
    "cookie-policy": { title: "Política de Cookies" }
  },
  
  pt: {
    Home: { title: "MusicDibs" },
    Navigation: { home: "Início" },
    
    support: {
      metadata: {
        title: "Suporte - MusicDibs",
        description: "Centro de suporte da MusicDibs",
        keywords: "suporte, ajuda, contato, perguntas frequentes",
        og_title: "Suporte - MusicDibs",
        og_description: "Centro de suporte da MusicDibs",
        og_alt: "Imagem de suporte"
      },
      hero: {
        title: "Precisa de ajuda?",
        subtitle: "Estamos aqui para ajudá-lo",
        schema_name: "Suporte MusicDibs",
        schema_description: "Serviço de suporte técnico e atendimento ao cliente da MusicDibs",
        schema_service_type: "Suporte técnico e atendimento ao cliente",
        schema_phone: "+55 11 1234 5678",
        schema_email: "suporte@musicdibs.com",
        schema_sms: "+55 11 98765 4321"
      }
    },
    
    partners: {
      metadata: {
        title: "Parceiros - MusicDibs",
        description: "Torne-se um parceiro da MusicDibs",
        keywords: "parceiros, alianças, negócio",
        og_title: "Parceiros - MusicDibs",
        og_description: "Torne-se um parceiro da MusicDibs",
        og_alt: "Imagem de parceiros"
      },
      hero: {
        title: "Torne-se um Parceiro",
        subtitle: "Junte-se à nossa rede de alianças estratégicas"
      }
    },
    
    faq: {
      metadata: {
        title: "Perguntas Frequentes - MusicDibs",
        description: "Perguntas frequentes",
        keywords: "perguntas frequentes, perguntas, ajuda",
        og_title: "Perguntas Frequentes - MusicDibs",
        og_description: "Perguntas frequentes",
        og_alt: "Imagem de perguntas frequentes"
      },
      hero: {
        title: "Perguntas Frequentes",
        subtitle: "Encontre respostas para perguntas comuns"
      }
    },
    
    auth: {
      login: {
        title: "Iniciar Sessão",
        button: "Acessar"
      },
      signup: {
        title: "Registrar-se",
        button: "Criar Conta"
      }
    },
    
    market: { title: "Mercado" },
    shop: { title: "Loja" },
    certification: { title: "Certificação" },
    "dibs-token": { title: "Token DIBS" },
    distribution: { title: "Distribuição" },
    privacy: { title: "Política de Privacidade" },
    terms: { title: "Termos e Condições" },
    tech: { title: "Tecnologia e Legal" },
    verification: { title: "Verificação" },
    sla: { title: "SLA" },
    "cookie-policy": { title: "Política de Cookies" }
  }
};

// Crea o actualiza los archivos
['en', 'es', 'pt'].forEach(locale => {
  const filePath = path.join(__dirname, 'src', 'messages', `${locale}.json`);
  
  let current = {};
  if (fs.existsSync(filePath)) {
    try {
      current = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } catch (e) {
      console.error(`Error reading ${filePath}:`, e.message);
    }
  }
  
  // Fusiona manteniendo traducciones existentes
  const merged = deepMerge(allTranslations[locale], current);
  
  fs.writeFileSync(filePath, JSON.stringify(merged, null, 2));
  console.log(`✓ ${locale}.json updated`);
});

function deepMerge(target, source) {
  const output = { ...target };
  
  for (const key in source) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      output[key] = deepMerge(target[key] || {}, source[key]);
    } else if (!(key in output)) {
      output[key] = source[key];
    }
  }
  
  return output;
}

console.log('\n✅ All translation files updated for static rendering!');
