"use client";
import { useState } from "react";
import { Megaphone, Upload, File, Music, User, FileText, Image, Instagram, Music2, ExternalLink, Info } from "lucide-react";

export default function PromoteContent() {
    const [formData, setFormData] = useState({
        songFile: null,
        songName: "",
        authorName: "",
        lyrics: "",
        attachments: null,
        tiktokUser: "",
        instagramUser: "",
        spotifyUser: ""
    });

    const [selectedSongFile, setSelectedSongFile] = useState(null);
    const [selectedAttachments, setSelectedAttachments] = useState(null);

    const handleSongFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedSongFile(file);
            setFormData({...formData, songFile: file});
        }
    };

    const handleAttachmentsChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedAttachments(file);
            setFormData({...formData, attachments: file});
        }
    };

    const handleInputChange = (field, value) => {
        setFormData({...formData, [field]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Datos de promoción:", formData);
    };

    return (
        <div className="space-y-6">
            {/* SEO Metadata */}
            <div itemScope itemType="https://schema.org/Service" className="hidden">
                <meta itemProp="name" content="Promoción Musical en Redes Sociales - Musicdibs" />
                <meta itemProp="description" content="Promociona tu música en TikTok, Instagram y Spotify. Llega a más de 245k seguidores con nuestro servicio de promoción musical profesional." />
                <meta itemProp="serviceType" content="Music Promotion" />
                <div itemProp="provider" itemScope itemType="https://schema.org/Organization">
                    <meta itemProp="name" content="Musicdibs" />
                </div>
                <meta itemProp="areaServed" content="Worldwide" />
            </div>

            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900">SOLICITAR PROMOCIÓN</h1>
                <p className="text-gray-600 mt-1">Promociona tu música en nuestras redes sociales y llega a más audiencia</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Formulario principal */}
                <div className="lg:col-span-2">
                    <section aria-labelledby="promotion-form-title">
                        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                            <h2 id="promotion-form-title" className="text-lg font-semibold text-gray-900 mb-6">
                                Solicitud de Promoción
                            </h2>
                            
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Tu canción - Upload */}
                                <div>
                                    <label htmlFor="song-upload" className="block text-sm font-medium text-gray-700 mb-3">
                                        Tu canción
                                    </label>
                                    <div 
                                        className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors cursor-pointer"
                                        onClick={() => document.getElementById('song-upload').click()}
                                        role="button"
                                        tabIndex={0}
                                        onKeyPress={(e) => e.key === 'Enter' && document.getElementById('song-upload').click()}
                                    >
                                        <Upload className="mx-auto text-gray-400 mb-3" size={32} />
                                        <p className="text-sm text-gray-600 mb-1">
                                            Formatos aceptados: mp3, mp4 y mov. Tamaño máximo del archivo: 72MB
                                        </p>
                                        <p className="text-xs text-gray-500 mb-3">
                                            {selectedSongFile ? selectedSongFile.name : "Ningún archivo seleccionado"}
                                        </p>
                                        <button 
                                            type="button"
                                            className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors"
                                        >
                                            Seleccionar archivo
                                        </button>
                                        <input
                                            id="song-upload"
                                            type="file"
                                            className="hidden"
                                            accept=".mp3,.mp4,.mov"
                                            onChange={handleSongFileChange}
                                        />
                                    </div>
                                </div>

                                {/* Nombre de la canción */}
                                <div>
                                    <label htmlFor="songName" className="block text-sm font-medium text-gray-700 mb-2">
                                        Nombre de la canción
                                    </label>
                                    <input 
                                        id="songName"
                                        type="text" 
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Ingresa el nombre de tu canción"
                                        value={formData.songName}
                                        onChange={(e) => handleInputChange('songName', e.target.value)}
                                        required
                                        aria-required="true"
                                    />
                                </div>

                                {/* Nombre del autor */}
                                <div>
                                    <label htmlFor="authorName" className="block text-sm font-medium text-gray-700 mb-2">
                                        Nombre del autor
                                    </label>
                                    <input 
                                        id="authorName"
                                        type="text" 
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Tu nombre o nombre artístico"
                                        value={formData.authorName}
                                        onChange={(e) => handleInputChange('authorName', e.target.value)}
                                        required
                                        aria-required="true"
                                    />
                                    <p className="text-xs text-gray-500 mt-1">
                                        Puedes promocionar la canción a tu nombre, a un nombre artístico o de un grupo.
                                    </p>
                                </div>

                                {/* Letra de la canción */}
                                <div>
                                    <label htmlFor="lyrics" className="block text-sm font-medium text-gray-700 mb-2">
                                        Letra de la canción
                                    </label>
                                    <textarea 
                                        id="lyrics"
                                        rows={5}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Pega aquí la letra completa de tu canción..."
                                        value={formData.lyrics}
                                        onChange={(e) => handleInputChange('lyrics', e.target.value)}
                                    />
                                    <p className="text-xs text-gray-500 mt-1">
                                        Necesaria para que podamos subtitular los videos.
                                    </p>
                                </div>

                                <button 
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors font-medium text-lg"
                                    aria-label="Enviar solicitud de promoción"
                                >
                                    SOLICITAR PROMOCIÓN
                                </button>
                            </form>
                        </div>
                    </section>
                </div>

                {/* Panel lateral */}
                <div className="space-y-6">
                    {/* Beneficios de la promoción */}
                    <section aria-labelledby="promotion-benefits-title">
                        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                            <h2 id="promotion-benefits-title" className="text-lg font-semibold text-gray-900 mb-4">
                                Beneficios de la Promoción
                            </h2>
                            <div className="space-y-3">
                                {[
                                    { title: "Alcance en TikTok", desc: "+245k seguidores en nuestra cuenta principal" },
                                    { title: "Video profesional", desc: "Creación y edición de video con subtítulos" },
                                    { title: "Menciones en redes", desc: "Etiquetamos tus redes sociales en el post" }
                                ].map((benefit, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <span className="text-green-600 text-sm font-bold">✓</span>
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900">{benefit.title}</p>
                                            <p className="text-sm text-gray-600">{benefit.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Información importante */}
                    <section aria-labelledby="important-info-title">
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                            <h2 id="important-info-title" className="font-semibold text-yellow-900 mb-2">
                                Información Importante
                            </h2>
                            <ul className="text-sm text-yellow-800 space-y-1">
                                <li>• El proceso de revisión y publicación puede tomar hasta 7 días</li>
                                <li>• Asegúrate de que los archivos cumplan con los formatos requeridos</li>
                                <li>• Las letras deben ser apropiadas para todos los públicos</li>
                                <li>• Nos reservamos el derecho de rechazar contenido inapropiado</li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}