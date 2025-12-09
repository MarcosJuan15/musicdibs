'use client';

import { useState } from "react";

export default function CertificationContent() {
  const [zoom, setZoom] = useState(100);

  const certificateData = {
    title: "SNEAKY WAYS LATIN",
    fileName: "sneaky-ways-latin-207042.mp3",
    fileSize: "5471085 bytes",
    description: "test music",
    date: "2025-03-24 11:57:23 464990805",
    transactionId: "0xe5570586bwfc32bf760ff9753d745112ac3c3b6431d45415971bfd93a917722",
    digitalFootprint: "cfpzy05fqR/aH1mcEEcrj+aqr2ocSfRisofRu16CPlm5fmxAg/pzolswyVOTLuHHqLjg0mKi+20hEi2lFs+rHcg==",
    algorithm: "base64 SHA-512"
  };

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 10, 200));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 10, 50));

  const handleViewBlockchain = () => {
    window.open("https://checker.icommunitylabs.com/check/polygon/0xe557b586badfe32bf760ff9753d745112ac3c3b6431d45415971bfd39a917722", "_blank");
  };

  const handleDownloadPDF = () => {
    const link = document.createElement('a');
    link.href = '/certificates/CertificationMusicdibs.pdf';
    link.download = 'CertificationMusicdibs.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = (platform) => {
    const currentUrl = window.location.href;
    const title = "Certificado de Autenticidad - SNEAKY WAYS LATIN";
    const text = "Mira mi certificado de autenticidad en blockchain";

    switch (platform) {
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`, '_blank');
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(`${text} ${currentUrl}`)}`, '_blank');
        break;
      case 'telegram':
        window.open(`https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(text)}`, '_blank');
        break;
      case 'email':
        window.open(`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${text}\n\n${currentUrl}`)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(currentUrl);
        alert('Enlace copiado al portapapeles');
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Certificate Content */}
      <section className="pb-16 pt-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* PDF Viewer */}
            <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-200">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleZoomOut}
                    className="h-8 w-8 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-100 font-bold"
                  >
                    -
                  </button>
                  <span className="text-sm font-medium px-3 py-1 bg-gray-100 rounded">
                    {zoom}%
                  </span>
                  <button
                    onClick={handleZoomIn}
                    className="h-8 w-8 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-100 font-bold"
                  >
                    +
                  </button>
                </div>
                <span className="text-sm text-gray-500 font-medium">Zoom automático</span>
              </div>

              {/* PDF Preview Area */}
              <div className="aspect-[3/4] bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 overflow-hidden">
                <iframe
                  src="/certificates/CertificationMusicdibs.pdf"
                  className="w-full h-full rounded-lg"
                  style={{ transform: `scale(${zoom / 100})`, transformOrigin: "top left" }}
                  title="Vista previa del certificado PDF"
                />
              </div>
            </div>

            {/* Certificate Details */}
            <div className="p-8 bg-white rounded-lg shadow-lg border border-gray-200">
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {certificateData.title}
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-gray-600 mb-2">
                    Nombre del fichero
                  </h3>
                  <p className="text-gray-900 font-mono text-sm bg-gray-50 p-3 rounded border border-gray-200 font-medium">
                    {certificateData.fileName}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-600 mb-2">
                    Tamaño del fichero
                  </h3>
                  <p className="text-gray-900 font-medium">{certificateData.fileSize}</p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-600 mb-2">
                    Descripción
                  </h3>
                  <p className="text-gray-900 font-medium">{certificateData.description}</p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-600 mb-2">
                    Fecha
                  </h3>
                  <p className="text-gray-900 font-mono text-sm font-medium">
                    {certificateData.date}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-600 mb-2">
                    Identificador de la transacción
                  </h3>
                  <p className="text-gray-900 font-mono text-xs bg-gray-50 p-3 rounded border border-gray-200 break-all font-medium">
                    {certificateData.transactionId}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-600 mb-2">
                    Huella digital del archivo
                  </h3>
                  <p className="text-gray-900 font-mono text-xs bg-gray-50 p-3 rounded border border-gray-200 break-all font-medium">
                    {certificateData.digitalFootprint}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-600 mb-2">
                    Algoritmo de huella digital
                  </h3>
                  <p className="text-gray-900 font-medium">{certificateData.algorithm}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button 
                    onClick={handleViewBlockchain}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 text-white py-3 px-4 rounded-md flex items-center justify-center font-semibold"
                  >
                    <span className="mr-2">🔗</span>
                    Ver en la blockchain
                  </button>
                  <button 
                    onClick={handleDownloadPDF}
                    className="flex-1 border border-gray-300 hover:bg-gray-50 py-3 px-4 rounded-md flex items-center justify-center font-semibold"
                  >
                    <span className="mr-2">📥</span>
                    Descargar certificado PDF
                  </button>
                </div>

                {/* Share Section - Iconos reales */}
                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-600 mb-4">
                    Compartir certificado
                  </h3>
                  <div className="flex gap-3">
                    {/* LinkedIn */}
                    <button 
                      onClick={() => handleShare('linkedin')}
                      className="h-12 w-12 bg-[#0077B5] text-white rounded-md flex items-center justify-center hover:bg-[#00669C] transition-colors"
                      title="Compartir en LinkedIn"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </button>

                    {/* WhatsApp */}
                    <button 
                      onClick={() => handleShare('whatsapp')}
                      className="h-12 w-12 bg-[#25D366] text-white rounded-md flex items-center justify-center hover:bg-[#20BD5C] transition-colors"
                      title="Compartir en WhatsApp"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893C23.944 5.335 18.609.001 12.05.001"/>
                      </svg>
                    </button>

                    {/* Telegram */}
                    <button 
                      onClick={() => handleShare('telegram')}
                      className="h-12 w-12 bg-[#0088CC] text-white rounded-md flex items-center justify-center hover:bg-[#0077B3] transition-colors"
                      title="Compartir en Telegram"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.882 7.2l-1.02 4.756c-.076.346.092.5.38.5.165 0 .396-.063.794-.22l1.72-.718c.494-.247.88-.125.88.347v.28c0 .433-.242.62-.544.71l-1.92.718c-.494.185-1.04.37-1.296.37-.33 0-.406-.185-.33-.553l1.02-4.756c.076-.346-.092-.5-.38-.5-.165 0-.396.063-.794.22l-1.72.718c-.494.247-.88.125-.88-.347v-.28c0-.433.242-.62.544-.71l1.92-.718c.494-.185 1.04-.37 1.296-.37.33 0 .406.185.33.553z"/>
                      </svg>
                    </button>

                    {/* Email */}
                    <button 
                      onClick={() => handleShare('email')}
                      className="h-12 w-12 bg-[#EA4335] text-white rounded-md flex items-center justify-center hover:bg-[#D33426] transition-colors"
                      title="Compartir por correo"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </button>

                    {/* Copiar enlace */}
                    <button 
                      onClick={() => handleShare('copy')}
                      className="h-12 w-12 bg-gray-600 text-white rounded-md flex items-center justify-center hover:bg-gray-700 transition-colors"
                      title="Copiar enlace"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}