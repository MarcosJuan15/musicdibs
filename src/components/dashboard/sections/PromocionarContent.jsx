"use client";
import { useState } from "react";
import { Megaphone, Upload, File, Music, User, FileText, Image, Instagram, Music2, ExternalLink, Info } from "lucide-react";

export default function PromocionarContent() {
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
        // Lógica para enviar la solicitud de promoción
        console.log("Datos de promoción:", formData);
    };

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-gray-900">SOLICITAR POST EN REDES SOCIALES</h2>
                <p className="text-gray-600">
                    Por favor, rellena el formulario abajo para solicitar tu post promocional en nuestro TikTok.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Formulario principal */}
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                            <Megaphone className="mr-2 text-purple-600" size={24} />
                            Solicitud de Promoción
                        </h3>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Tu canción - Upload */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-3">
                                    Tu canción
                                </label>
                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors cursor-pointer"
                                     onClick={() => document.getElementById('song-upload').click()}>
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
                                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                                    <Music className="mr-2" size={16} />
                                    Nombre de la canción
                                </label>
                                <input 
                                    type="text" 
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Ingresa el nombre de tu canción"
                                    value={formData.songName}
                                    onChange={(e) => handleInputChange('songName', e.target.value)}
                                />
                            </div>

                            {/* Nombre del autor */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                                    <User className="mr-2" size={16} />
                                    Nombre del autor
                                </label>
                                <input 
                                    type="text" 
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Tu nombre o nombre artístico"
                                    value={formData.authorName}
                                    onChange={(e) => handleInputChange('authorName', e.target.value)}
                                />
                                <p className="text-xs text-gray-500 mt-1">
                                    Puedes promocionar la canción a tu nombre, a un nombre artístico o de un grupo.
                                </p>
                            </div>

                            {/* Letra de la canción */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                                    <FileText className="mr-2" size={16} />
                                    Letra de la canción
                                </label>
                                <textarea 
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

                            {/* Archivos adjuntos */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-3">
                                    Archivos adjuntos
                                </label>
                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors cursor-pointer"
                                     onClick={() => document.getElementById('attachments-upload').click()}>
                                    <Image className="mx-auto text-gray-400 mb-3" size={32} />
                                    <p className="text-sm text-gray-600 mb-1">
                                        Imagen disco/portada o videoclip. Formatos aceptados: png, jpg, mov, mp4 y gif. Tamaño máximo del archivo: 72MB
                                    </p>
                                    <p className="text-xs text-gray-500 mb-3">
                                        {selectedAttachments ? selectedAttachments.name : "Ningún archivo seleccionado"}
                                    </p>
                                    <button 
                                        type="button"
                                        className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors"
                                    >
                                        Seleccionar archivos
                                    </button>
                                    <input
                                        id="attachments-upload"
                                        type="file"
                                        className="hidden"
                                        accept=".png,.jpg,.mov,.mp4,.gif"
                                        onChange={handleAttachmentsChange}
                                    />
                                </div>
                            </div>

                            {/* Redes sociales */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {/* TikTok */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                                        <FileText className="mr-2" size={16} />
                                        Usuario en TikTok
                                    </label>
                                    <input 
                                        type="text" 
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="@usuario"
                                        value={formData.tiktokUser}
                                        onChange={(e) => handleInputChange('tiktokUser', e.target.value)}
                                    />
                                </div>

                                {/* Instagram */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                                        <Instagram className="mr-2" size={16} />
                                        Usuario en Instagram
                                    </label>
                                    <input 
                                        type="text" 
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="@usuario"
                                        value={formData.instagramUser}
                                        onChange={(e) => handleInputChange('instagramUser', e.target.value)}
                                    />
                                </div>

                                {/* Spotify */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                                        <Music2 className="mr-2" size={16} />
                                        Usuario en Spotify
                                    </label>
                                    <input 
                                        type="text" 
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Usuario o enlace"
                                        value={formData.spotifyUser}
                                        onChange={(e) => handleInputChange('spotifyUser', e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* Información adicional */}
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                <div className="flex items-start space-x-3">
                                    <Info size={20} className="text-blue-600 mt-0.5 flex-shrink-0" />
                                    <p className="text-sm text-blue-800">
                                        <strong>Bases de la promoción:</strong> Para más información,{" "}
                                        <a href="#" className="underline hover:text-blue-900">
                                            consulte las bases de la promoción
                                        </a>.
                                    </p>
                                </div>
                            </div>

                            <button 
                                type="submit"
                                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors font-medium text-lg"
                            >
                                SOLICITAR PROMOCIÓN
                            </button>
                        </form>
                    </div>
                </div>

                {/* Panel lateral */}
                <div className="space-y-6">
                    {/* Información de la promoción */}
                    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                            <Megaphone className="mr-2 text-green-600" size={20} />
                            Beneficios de la Promoción
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-green-600 text-sm font-bold">✓</span>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">Alcance en TikTok</p>
                                    <p className="text-sm text-gray-600">+245k seguidores en nuestra cuenta principal</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-green-600 text-sm font-bold">✓</span>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">Video profesional</p>
                                    <p className="text-sm text-gray-600">Creación y edición de video con subtítulos</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-green-600 text-sm font-bold">✓</span>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">Menciones en redes</p>
                                    <p className="text-sm text-gray-600">Etiquetamos tus redes sociales en el post</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tus Promociones Activas */}
                    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Tus Promociones Activas</h3>
                        <div className="text-center py-8 text-gray-500">
                            <Megaphone size={48} className="mx-auto mb-4 text-gray-300" />
                            <p>No tienes promociones activas en este momento</p>
                            <button className="mt-3 text-blue-600 hover:text-blue-700 font-medium">
                                Ver historial de promociones
                            </button>
                        </div>
                    </div>

                    {/* Información importante */}
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <h4 className="font-semibold text-yellow-900 mb-2 flex items-center">
                            <Info size={16} className="mr-2" />
                            Información Importante
                        </h4>
                        <ul className="text-xs text-yellow-800 space-y-1">
                            <li>• El proceso de revisión y publicación puede tomar hasta 7 días</li>
                            <li>• Asegúrate de que los archivos cumplan con los formatos requeridos</li>
                            <li>• Las letras deben ser apropiadas para todos los públicos</li>
                            <li>• Nos reservamos el derecho de rechazar contenido inapropiado</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}