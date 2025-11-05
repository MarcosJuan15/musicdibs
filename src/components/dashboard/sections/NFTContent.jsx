"use client";
import { useState } from "react";
import { Image, Music, Upload, File, ExternalLink, Wallet, Info } from "lucide-react";

export default function NFTContent() {
    const [formData, setFormData] = useState({
        artwork: null,
        artworkName: "",
        authorName: "",
        externalLink: "",
        description: "",
        quantity: 1,
        walletAddress: ""
    });

    const [selectedFile, setSelectedFile] = useState(null);

    const userNFTs = [
        { id: 1, title: "Summer Vibes #1", price: "0.05 ETH", status: "Activo" }
    ];

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            setFormData({...formData, artwork: file});
        }
    };

    const handleInputChange = (field, value) => {
        setFormData({...formData, [field]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para crear el NFT
        console.log("Datos del NFT:", formData);
    };

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-gray-900">CREA TU NFT</h2>
                <p className="text-gray-600">
                    Para crear el NFT de tu archivo, por favor rellene los datos del formulario abajo. 
                    Una vez creado te lo enviaremos directamente a tu wallet.
                </p>
                <p className="text-blue-600 mt-2">
                    <a href="#" className="hover:underline">Aquí puedes ver un tutorial detallado de cómo solicitarlo.</a>
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Formulario de creación */}
                <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-6">Crear Nuevo NFT</h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Tu obra - Upload */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                                Tu obra
                            </label>
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors cursor-pointer"
                                 onClick={() => document.getElementById('artwork-upload').click()}>
                                <Upload className="mx-auto text-gray-400 mb-3" size={32} />
                                <p className="text-sm text-gray-600 mb-1">
                                    Formatos aceptados: jpg, jpeg y mp4. Tamaño máximo del archivo: 50MB
                                </p>
                                <p className="text-xs text-gray-500 mb-3">
                                    {selectedFile ? selectedFile.name : "Ningún archivo seleccionado"}
                                </p>
                                <button 
                                    type="button"
                                    className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors"
                                >
                                    Seleccionar archivo
                                </button>
                                <input
                                    id="artwork-upload"
                                    type="file"
                                    className="hidden"
                                    accept=".jpg,.jpeg,.mp4"
                                    onChange={handleFileChange}
                                />
                            </div>
                        </div>

                        {/* Nombre de la obra */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Nombre de la obra
                            </label>
                            <input 
                                type="text" 
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Ingresa el nombre de tu obra"
                                value={formData.artworkName}
                                onChange={(e) => handleInputChange('artworkName', e.target.value)}
                            />
                        </div>

                        {/* Nombre del autor */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
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
                                Puedes registrar tu NFT a tu nombre, a un nombre artístico o de un grupo.
                            </p>
                        </div>

                        {/* Enlace externo */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                                <ExternalLink size={16} className="mr-2" />
                                Enlace externo a tu web
                            </label>
                            <input 
                                type="url" 
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="https://tu-sitio-web.com"
                                value={formData.externalLink}
                                onChange={(e) => handleInputChange('externalLink', e.target.value)}
                            />
                            <p className="text-xs text-gray-500 mt-1">
                                Incluiremos este enlace en la página de detalles del NFT, para que la gente pueda saber más sobre la obra.
                            </p>
                        </div>

                        {/* Descripción */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Descripción
                            </label>
                            <textarea 
                                rows={4}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Describe tu obra..."
                                value={formData.description}
                                onChange={(e) => handleInputChange('description', e.target.value)}
                            />
                            <p className="text-xs text-gray-500 mt-1">
                                La incluiremos en la página de detalles del NFT, debajo de la imagen de vista previa.
                            </p>
                        </div>

                        {/* Cantidad de NFTs */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                ¿Cuántos NFTs deseas hacer en esta tirada?
                            </label>
                            <input 
                                type="number" 
                                min="1"
                                max="1000"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                value={formData.quantity}
                                onChange={(e) => handleInputChange('quantity', parseInt(e.target.value))}
                            />
                            <p className="text-xs text-gray-500 mt-1">
                                Puedes acuñar una tirada de hasta 1000 NFTs.
                            </p>
                        </div>

                        {/* Wallet Address */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                                <Wallet size={16} className="mr-2" />
                                ¿A qué wallet (compatible con Polygon) debemos enviar los NFTs?
                            </label>
                            <input 
                                type="text" 
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="0x..."
                                value={formData.walletAddress}
                                onChange={(e) => handleInputChange('walletAddress', e.target.value)}
                            />
                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mt-2">
                                <p className="text-xs text-yellow-800">
                                    <strong>IMPORTANTE:</strong> Asegúrate de que esta dirección de wallet sea correcta y compatible 
                                    (la dirección siempre empieza por 0x, no emails u otros formatos) - sugerimos utilizar Metamask. 
                                    Enviaremos tus NFTs a esta dirección y si es incorrecta los NFTs se perderán para siempre.
                                </p>
                            </div>
                        </div>

                        {/* Información de procesamiento */}
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                            <div className="flex items-start space-x-3">
                                <Info size={20} className="text-blue-600 mt-0.5 flex-shrink-0" />
                                <p className="text-sm text-blue-800">
                                    <strong>Tiempo de procesamiento:</strong> Podemos tardar hasta 72 horas en crear el NFT.
                                </p>
                            </div>
                        </div>

                        <button 
                            type="submit"
                            className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium text-lg"
                        >
                            CREAR NFT
                        </button>
                    </form>
                </div>

                {/* Panel lateral */}
                <div className="space-y-6">
                    {/* Tus NFTs */}
                    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Tus NFTs</h3>
                        <div className="space-y-4">
                            {userNFTs.map((nft) => (
                                <div key={nft.id} className="flex items-center space-x-4 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                                        <Image className="text-white" size={20} />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-medium text-gray-900">{nft.title}</p>
                                        <p className="text-sm text-gray-500">{nft.price}</p>
                                    </div>
                                    <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                                        {nft.status}
                                    </div>
                                </div>
                            ))}
                            
                            {userNFTs.length === 0 && (
                                <div className="text-center py-8 text-gray-500">
                                    <Image size={48} className="mx-auto mb-4 text-gray-300" />
                                    <p className="text-gray-600">Crea tu primer NFT para verlo aquí</p>
                                    <p className="text-sm text-gray-500 mt-1">
                                        Tus NFTs creados aparecerán en esta sección
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Información sobre NFTs */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                            <Info size={20} className="mr-2" />
                            ¿Qué es un NFT?
                        </h4>
                        <p className="text-sm text-blue-800 mb-3">
                            Un NFT (Token No Fungible) es un certificado digital único que representa la propiedad 
                            de tu obra musical en la blockchain. Cada NFT es único y verificable.
                        </p>
                        <div className="space-y-2 text-xs text-blue-700">
                            <p><strong>• Propiedad verificable:</strong> Certificado único en blockchain</p>
                            <p><strong>• Compatible con Polygon:</strong> Bajas comisiones de gas</p>
                            <p><strong>• Mercado integrado:</strong> Podrás venderlo en nuestro marketplace</p>
                            <p><strong>• Royalties:</strong> Gana comisiones por reventas</p>
                        </div>
                    </div>

                    {/* Información de la red Polygon */}
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <h4 className="font-semibold text-green-900 mb-2">Sobre Polygon Network</h4>
                        <p className="text-sm text-green-800">
                            Utilizamos la red Polygon para crear tus NFTs, lo que significa:
                        </p>
                        <ul className="text-xs text-green-700 mt-2 space-y-1">
                            <li>• Comisiones de gas muy bajas</li>
                            <li>• Transacciones rápidas</li>
                            <li>• Compatibilidad con wallets populares como MetaMask</li>
                            <li>• Red ecológica y eficiente</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}