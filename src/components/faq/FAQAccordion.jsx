'use client';
import { useState } from "react";

export default function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Mantén tu faqData actual, pero agreguemos IDs únicos para accesibilidad
const faqData = [
  {
    question: 'Una vez registrada, ¿cómo puedo demostrar la autoría de mi obra frente a un tercero?',
    answer: (
      <div className="space-y-3">
        <p>El registro de la obra genera un <strong>hash y una marca de tiempo</strong>, donde están de forma encriptada los datos identificativos, que vinculan de manera automática al autor con su creación.</p>
        <p>Ante una disputa legal, cualquiera podrá validar dicho código y verificar que eres el autor original.</p>
        <p><strong>Una vez certificado, es importante no realizar ningún cambio al archivo original</strong>, para no modificar su huella digital.</p>
      </div>
    )
  },
  {
    question: 'Si puedo registrar una obra ya registrada, entonces ¿cualquier persona podría registrar una obra como suya (aunque ésta ya haya sido registrada antes)?',
    answer: (
      <div className="space-y-3">
        <p><strong>Sí, pero no hay problema!</strong> Lo importante es <strong>quién lo hizo primero y cuándo</strong> (y eso es justo lo que aparece en nuestros certificados de registro).</p>
        <p>Cada vez que registramos algo (aunque repetido) se genera un <strong>sellado de tiempo diferente</strong> asociado a:</p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>La identidad de quién hizo la certificación</li>
          <li>El contenido certificado</li>
          <li>El momento en el que se hace</li>
        </ul>
        <p>Musicdibs al ser una herramienta con validez y ámbito mundial no puede saber si alguien ya registró algo antes que otra persona en otro sistema de registro u otra parte del mundo.</p>
        <p>Pero eso como decimos no es lo relevante, si no <strong>¿QUIÉN LO HIZO ANTES de forma fehaciente?</strong>. Y eso es lo que tienes garantizado usando Musicdibs 😉</p>
      </div>
    )
  },
  {
    question: 'Si no renuevo mi cuota, ¿perderé mis registros?',
    answer: (
      <div className="space-y-3">
        <p><strong>Los registros (certificados) son permanentes, no caducan jamás</strong>, pero si una cuota no se renueva:</p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Perderá el acceso a la plataforma</li>
          <li>No podrá gestionar su lista de certificados y descargarlos</li>
        </ul>
        <p>Para acceder de nuevo a su cuenta y gestionar su lista de certificados, tendrá que volver a renovar su cuota.</p>
        <p><strong>Desde Musicdibs te recomendamos que en la medida de lo posible MANTENGAS tu plan</strong>, ya que en estos momentos el precio es muy atractivo gracias al esfuerzo que hemos realizado para ofrecer un precio reducido y asequible para todos.</p>
        <p>En el futuro planeamos añadir nuevas funcionalidades a las suscripciones, lo cual obviamente supondrá seguramente un incremento en el precio. <strong>Si mantienes ahora tu plan actual te aseguras de mantener también tu precio actual.</strong></p>
      </div>
    )
  },
  {
    question: '¿Un menor puede registrar una obra?',
    answer: (
      <div className="space-y-3">
        <p><strong>Los menores de edad pueden solicitar</strong> a través de sus padres o representantes legales el registro de su derecho de autor.</p>
        <p>Los representantes legales deberán acreditar mediante el documento oportuno su relación con el menor:</p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Libro de familia</li>
          <li>Documento legal que acredite la tutoría o representación legal sobre el menor</li>
        </ul>
      </div>
    )
  },
  {
    question: '¿Registrar mi obra en blockchain tiene validez legal?',
    answer: (
      <div className="space-y-3">
        <p><strong>La inscripción de tu obra en blockchain tiene validez legal en los 179 países firmantes del Convenio de Berna.</strong></p>
        <p>Es un medio alternativo, rápido y fiable para:</p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Evitar el plagio cuando lo compartas en redes sociales</li>
          <li>Proteger tus obras cuando las compartas con amigos</li>
        </ul>
        <p>Es una apuesta de futuro, que facilita el proceso para comparar distintas obras y verificar la identidad de su creador original.</p>
      </div>
    )
  },
  {
    question: '¿Qué tipo de obras y archivos puedo registrar?',
    answer: (
      <div className="space-y-4">
        <p>Con Musicdibs puedes registrar los derechos de autor de <strong>cualquier obra creativa y artística</strong>:</p>

        <div>
          <p className="font-semibold text-purple-700">Música:</p>
          <ul className="list-disc list-inside ml-4 space-y-1 mt-1">
            <li>Canciones</li>
            <li>Letras</li>
            <li>Partituras</li>
            <li>Grabaciones sonoras</li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-purple-700">Audiovisual:</p>
          <ul className="list-disc list-inside ml-4 space-y-1 mt-1">
            <li>Guiones</li>
            <li>Tratamientos</li>
            <li>Idea/sinopsis</li>
            <li>Piezas de vídeo</li>
            <li>Storyboards</li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-purple-700">Obra literaria:</p>
          <ul className="list-disc list-inside ml-4 space-y-1 mt-1">
            <li>Manuscritos y borradores</li>
            <li>Títulos y nombres</li>
            <li>Traducciones</li>
            <li>Adaptaciones y derivados</li>
          </ul>
        </div>

        <p><strong>Formatos aceptados:</strong> Puedes registrar todo tipo de archivos, tanto obra terminada en cualquier formato de audio digital o video (mp3, WAV, AIFF, WMA, mp4, etc) como archivos de texto (PDF, DOC) si se trata de partituras, letras o guiones.</p>

        <p><strong>Tamaño máximo:</strong> 30Mb. Si tu obra tiene un tamaño mayor deberás comprimirlo.</p>
      </div>
    )
  },
  {
    question: '¿Qué pasa si un día Musicdibs &quot;desaparece&quot;? ¿Perderían los certificados su validez?',
    answer: (
      <div className="space-y-3">
        <p><strong>No pasaría nada con tus obras registradas</strong> gracias a la tecnología descentralizada y pública que usamos.</p>
        <p>Nuestra infraestructura está formada por:</p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Una red con miles de nodos en la nube</li>
          <li>Diferentes blockchains distribuidas</li>
        </ul>
        <p>Un perito técnico siempre podría acceder a la comprobación de tu certificado, independientemente de Musicdibs.</p>
      </div>
    )
  },
  {
    question: '¿Qué pasa si alguien registra mi canción en el registro central? ¿Puedo usar mi certificado en Musicdibs para reclamar mi autoría?',
    answer: (
      <div className="space-y-4">
        <p><strong>Debes saber que la propiedad intelectual no es como la industrial.</strong> En este sentido es importante destacar que en España no es obligatorio realizar un acto administrativo para ser considerados autor de una pieza y basta con demostrar su creación previa.</p>

        <div>
          <p className="font-semibold text-purple-700">Según el artículo 1 del Real Decreto Legislativo 1/1991 del 12 de abril sobre la Ley de Propiedad Intelectual:</p>
          <blockquote className="border-l-4 border-purple-500 pl-4 ml-4 italic text-gray-700 bg-purple-50 py-2 my-2">
            &quot;La propiedad intelectual de una obra literaria, artística o científica corresponde al autor por el solo hecho de su creación.&quot;
          </blockquote>
        </div>

        <p>Por tanto, <strong>el autor, artista o creador tiene una protección automática</strong>, a diferencia de la Propiedad Industrial (marcas, patentes, diseños industriales,…) en el que es necesario registrar para ser considerados titulares de los derechos.</p>

        <p>Si alguien te copia una canción registrada previamente en Musicdibs puedes aportar tu registro como prueba válida en una denuncia por plagio, ya que en nuestro registro se genera un certificado que contiene toda la información necesaria, tanto para identificar la obra a tu nombre como para demostrar el registro con su sellado de tiempo.</p>

        <p><strong>Con el certificado de Musicdibs vas a poder demostrar que tú previamente lo creaste y que por tanto tienes el derecho de propiedad sobre ello.</strong></p>
      </div>
    )
  },
  {
    question: '¿Qué pasa con mis certificaciones si me doy de baja del servicio?',
    answer: (
      <div className="space-y-3">
        <p><strong>Musicdibs SOLO utiliza blockchains robustas públicas y descentralizadas</strong> (como por ejemplo Ethereum, Polygon y Solana) que no dependen de iCommunity Labs y que están soportadas por una amplia comunidad de usuarios.</p>
        <p>Esto garantiza que <strong>las certificaciones realizadas a través de Musicdibs siempre estarán accesibles y persistirán</strong>, incluso si:</p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>El usuario se diera de baja</li>
          <li>iCommunity Labs desapareciera en el futuro</li>
        </ul>
        <p>Esto convierte a las certificaciones emitidas por Musicdibs en <strong>evidencias digitales totalmente disponibles para auditorías o peritajes técnicos</strong> y con efectos probatorios en procesos de disputa o similar.</p>
        <p><strong>No obstante, debes recordar</strong> que para comprobar la certificación de un documento debes estar en posesión del documento original y, si la certificación digital no se ha hecho a través de Musicdibs, deberás recrear el procedimiento de certificación apropiado (título, descripción, algoritmo estándar de encriptado, etc.) publicado por iCommunity Labs a través de su web.</p>
      </div>
    )
  },
  {
    question: '¿Puedo verificar en Musicdibs canciones que hayan sido registradas con otras plataformas?',
    answer: (
      <div className="space-y-3">
        <p><strong>No, solo podemos verificar registros de obras realizados con Musicdibs.</strong></p>
        <p>Esto es debido a que nosotros registramos y certificamos, no solo el fichero subido con el contenido, sino también <strong>la identidad de quien lo registra</strong>.</p>
        <p>Además debes saber que esto en realidad no lo puedes con ningún otro sistema de registro de propiedad, ya que <strong>ninguno se encuentra interconectado con el resto</strong>.</p>
      </div>
    )
  },
  {
    question: '¿Puedo registrar obras en nombre de otras personas con mi cuenta?',
    answer: (
      <div className="space-y-3">
        <p><strong>Desgraciadamente el registro a nombre de terceros SOLO está permitido y reconocido legalmente para el caso excepcional de los menores.</strong></p>
        <p>Las cuentas de usuario de Musicdibs son <strong>unipersonales e intransferibles</strong> y pueden pertenecer a:</p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Personas</li>
          <li>Entidades legalmente establecidas (mercantiles, asociaciones, etc.)</li>
        </ul>
        <p>Debes tener en cuenta que para el registro de una creación se debe verificar primero la identidad de la persona o entidad a la cual se le va a otorgar la propiedad de esos derechos, y esto solo es posible si esa misma persona o entidad es la que ha abierto la cuenta en Musicdibs y la ha verificado con su documento oficial de identidad.</p>
        <p>De esta forma precisamente es como se evitan posibles suplantaciones de identidad o incluso robos de propiedad, ya que <strong>solo la persona o entidad que registra es la que tiene la propiedad de la creación</strong>.</p>
        <p><strong>Te recomendamos</strong> que propongas a esos conocidos que abran cada uno de ellos una cuenta en Musicdibs con sus datos. ¡Es muy sencillo!</p>
      </div>
    )
  },
  {
    question: '¿Puedo registrar obras en las que haya usado IA para su creación? ¿Qué protege el registro en Musicdibs en estos casos?',
    answer: (
      <div className="space-y-4">
        <p><strong>Sí, puedes registrar tus obras en Musicdibs aunque hayas usado IA para la musicalización</strong>, siempre que:</p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li><strong>Tú seas el autor original</strong> de la letra, la idea o la estructura de la canción</li>
          <li>Haya habido una <strong>dirección creativa tuya</strong> en el uso de la IA (por ejemplo, elegiste los prompts, editaste el resultado, adaptaste la melodía, etc.)</li>
          <li>La herramienta de IA utilizada te permita legalmente usar y explotar comercialmente los resultados generados</li>
        </ul>

        <p className="font-semibold text-purple-700">¿Qué protege en estos casos el registro en Musicdibs?</p>
        <p>El registro te otorga un <strong>certificado de autoría con validez legal internacional</strong>, respaldado con sello de tiempo y tecnología blockchain.</p>
        <p>Esto te permite:</p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Probar que tú creaste esa obra en una fecha específica</li>
          <li>Defender tus derechos en caso de plagio o disputa</li>
        </ul>

        <p><strong>No obstante, debes tener en cuenta que:</strong></p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Musicdibs no valida ni supervisa el contenido generado por IA</li>
          <li>Es recomendable que al registrar la obra, <strong>indiques en la descripción que se usó IA como herramienta</strong>, y que la autoría creativa es tuya</li>
        </ul>

        <p>Y si tienes dudas, podemos ayudarte a redactar una descripción adecuada para tu registro de obras basadas en IA.</p>
      </div>
    )
  },
  {
    question: '¿Puedo registrar creaciones parciales y luego ya registrar la definitiva?',
    answer: (
      <div className="space-y-3">
        <p><strong>SI, con Musicdibs esto es posible y de hecho es lo recomendable</strong>, para evitar que en el proceso de creación alguien te plagie antes de terminar tu obra.</p>
        <p>Gracias a nuestro coste reducido, en especial el de la suscripción anual, <strong>puedes hacer tantos registros parciales de tu obra como quieras</strong>, lo cual además te permitirá:</p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Ir compartiendo tu creación con quien quieras</li>
          <li>Tener <strong>total garantía</strong> de que está protegida y a tu nombre</li>
        </ul>
      </div>
    )
  },
  {
    question: '¿Los créditos de las suscripciones no gastados, son acumulables cuando se renueva anualmente?',
    answer: (
      <div className="space-y-3">
        <p><strong>NO.</strong> Los créditos de las suscripciones y ofertas especiales que no se gasten en el periodo <strong>no se acumulan</strong> cuando se renueva el siguiente periodo de facturación.</p>
      </div>
    )
  },
  {
    question: '¿El registro de mi obra tiene costes de renovación?',
    answer: (
      <div className="space-y-3">
        <p><strong>No, solo pagarás por el registro inicial.</strong> Una vez registrada tu obra, no hay costes adicionales de renovación para mantener la certificación.</p>
      </div>
    )
  },
  {
    question: '¿De que tipo de contenido se pueden generar los NFTs de las suscripciones y cómo generarlos?',
    answer: (
      <div className="space-y-4">
        <p>Para generar un NFT de tus obras registradas te hemos preparado un videotutorial en el siguiente enlace:</p>
        <div className="bg-gray-50 p-4 rounded-lg">
          <a href="https://www.youtube.com/watch?v=a3WAlJ2Ynek" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium break-all">
            https://www.youtube.com/watch?v=a3WAlJ2Ynek
          </a>
        </div>

        <p><strong>De momento para generar NFTs estamos aceptando solo audios</strong> en los formatos:</p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>mp3</li>
          <li>wav</li>
          <li>ogg</li>
        </ul>

        <p>Esto es así porque estos son los formatos soportados por el marketplace Opensea, que es donde los generamos y donde te los enviaremos (necesitarás por tanto tener una wallet en Opensea para recibirlos).</p>

        <p><strong>En breve se va a abrir la posibilidad de generar también NFTs para vídeos</strong> (los formatos soportados serán: mp4 y webm).</p>
      </div>
    )
  },
  {
    question: '¿Cuanto dura el registro de mi obra?',
    answer: (
      <div className="space-y-3">
        <p><strong>El registro en blockchain es permanente</strong>, y la duración de la protección de los derechos de autor, está supeditada a la legislación de cada país.</p>
      </div>
    )
  },
  {
    question: '¿Cuales son los documentos de identidad válidos para verificar mi identidad?',
    answer: (
      <div className="space-y-4">
        <p>Para que tus registros tengan validez legal es necesario verificar tu identidad con un <strong>documento de identificación oficial válido</strong> en tu país que incluya:</p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Tu foto</li>
          <li>Tus datos personales</li>
        </ul>

        <p>En España y en los demás países de la Unión Europea, se puede utilizar:</p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Documento Nacional de Identidad (DNI)</li>
          <li>Pasaporte</li>
        </ul>

        <p>Para otros países, abajo hay una lista de los documentos que aceptamos:</p>
        <div className="bg-gray-50 p-4 rounded-lg mt-2">
          <p className="text-sm text-gray-600">* Lista de documentos aceptados por país disponible en nuestra plataforma</p>
        </div>
      </div>
    )
  },
  {
    question: '¿Cómo se haría el registro de una canción cuando pertenece a dos o más autores?',
    answer: (
      <div className="space-y-3">
        <p>La mejor manera de registrar la coautoría o multipropiedad de una creación con Musicdibs es <strong>haciendo dos registros</strong>:</p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li><strong>Uno de la canción</strong> (letra, partitura, grabación sonora, vídeos, …)</li>
          <li><strong>Otro con toda las informaciones de los autores</strong> (Nombre y documento de identidad de cada coautor)</li>
        </ul>
        <p>Resumiendo, tendríais que subir el archivo musical y adicionalmente subir un archivo de texto o pdf con los datos anteriormente indicados.</p>
        <p><strong>Adicionalmente hay que marcar la opción de</strong> &quot;Quiero que esta certificación sea pública&quot; en los dos registros.</p>
        <p>Registrando de esta manera podéis verificar el registro tanto de la canción como del documento de coautoría y <strong>la marca de tiempo de los registros garantiza su validez legal</strong>.</p>
      </div>
    )
  },
  {
    question: '¿Cómo reducir el tamaño de mi archivo para poder subirlo?',
    answer: (
      <div className="space-y-3">
        <p><strong>Sólo admitimos archivos con un peso inferior a 30MB.</strong> Por ello, en caso de que tu archivo sea mayor deberás comprimirlo.</p>
        <p>Para ello, te proporcionamos un tutorial explicativo sobre cómo reducir el peso de tu obra.</p>
        <p><strong>Te recordamos</strong> que para el registro de propiedad de derechos de autor <strong>lo importante es el contenido y no su calidad audiovisual</strong>, por lo que no hay ningún problema si al comprimirlo ésta es inferior.</p>
      </div>
    )
  },
  {
    question: '¿Cómo funcionan las suscripciones mensuales y anuales?',
    answer: (
      <div className="space-y-3">
        <p>Tanto la suscripción mensual como anual, <strong>se renuevan de forma automática</strong> al final de cada ciclo contratado.</p>
        <p><strong>Ejemplo:</strong> Si te registras por ejemplo el día 15 de noviembre, el siguiente ciclo de cobro se activará el día 15 de diciembre.</p>
        <p>Para su cancelación, solo tienes que ir dentro de tu perfil de cuenta a:</p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>&quot;Ajustes&quot;</li>
          <li>&quot;Suscripción&quot;</li>
          <li>&quot;Cancelar suscripción&quot;</li>
        </ul>
        <p><strong>Al menos 24h antes</strong> de la renovación del nuevo ciclo.</p>
        <p>Si una suscripción no se renueva:</p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Perderá el acceso a su lista de certificados</li>
          <li>No podrá descargarlos</li>
        </ul>
        <p><strong>Pero los registros no se borran</strong> y siempre se guardan en su cuenta de usuario.</p>
        <p>Para acceder de nuevo a su cuenta y gestionar su lista de certificados, tendrá que volver a renovar su suscripción.</p>
      </div>
    )
  },
  {
    question: '¿Cómo cancelo mi suscripción?',
    answer: (
      <div className="space-y-3">
        <p><strong>Solo tienes que seguir estos pasos:</strong></p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Ir dentro de tu perfil de cuenta a <strong>&quot;Ajustes&quot;</strong></li>
          <li>Seleccionar <strong>&quot;Suscripción&quot;</strong></li>
          <li>Hacer clic en <strong>&quot;Cancelar suscripción&quot;</strong></li>
        </ul>
        <p><strong>Importante:</strong> Esto deberás hacerlo con <strong>al menos 24h antes</strong> de que venza tu actual plan y comience un nuevo periodo de suscripción.</p>
      </div>
    )
  }
];

  // Schema.org para todas las FAQs
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqData.map((item, index) => ({
      '@type': 'Question',
      'name': item.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': typeof item.answer === 'string' 
          ? item.answer 
          : extractTextFromJSX(item.answer)
      }
    }))
  };

  // Función helper para extraer texto de JSX
  function extractTextFromJSX(jsxContent) {
    if (typeof jsxContent === 'string') return jsxContent;
    
    // Simplificado - en producción deberías implementar una extracción más robusta
    if (jsxContent.props && jsxContent.props.children) {
      if (Array.isArray(jsxContent.props.children)) {
        return jsxContent.props.children
          .map(child => typeof child === 'string' ? child : '')
          .join(' ')
          .replace(/\s+/g, ' ')
          .trim();
      }
      return typeof jsxContent.props.children === 'string' 
        ? jsxContent.props.children 
        : '';
    }
    return '';
  }

  return (
    <section className="py-10" aria-labelledby="preguntas-frecuentes">
      <div className="container mx-auto px-4">
        
        {/* Schema markup completo */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
          
          {/* Encabezado semántico mejorado */}
          <div className="text-center mb-8">
            <h2 id="preguntas-frecuentes" className="text-3xl font-bold text-gray-900 mb-4">
              Preguntas Más Frecuentes
            </h2>
            <p className="text-lg text-gray-600">
              Resolvemos tus dudas sobre registro musical, protección con blockchain y derechos de autor
            </p>
          </div>

          <div className="space-y-4" role="list" itemScope itemType="https://schema.org/FAQPage">
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`border border-gray-200 rounded-xl transition-all duration-300 overflow-hidden ${
                  activeIndex === index 
                    ? 'border-purple-300 shadow-md bg-purple-50/30' 
                    : 'hover:border-gray-300 hover:shadow-sm'
                }`}
                role="listitem"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <button
                  className="flex justify-between items-center w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-purple-200 focus:ring-offset-2"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={activeIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span 
                    className={`font-semibold text-lg md:text-xl pr-6 ${
                      activeIndex === index ? 'text-purple-700' : 'text-gray-900'
                    }`}
                    itemProp="name"
                  >
                    {item.question}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${
                    activeIndex === index 
                      ? 'bg-purple-100 text-purple-600 rotate-180' 
                      : 'bg-gray-100 text-gray-500'
                  }`} aria-hidden="true">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </button>
                
                <div
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-500 ${
                    activeIndex === index ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                  aria-labelledby={`faq-question-${index}`}
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div className="px-6 pb-6 text-gray-700 leading-relaxed border-t border-gray-100" itemProp="text">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}