"use client";
import { useState } from "react";
import { Image, Music, Upload, File, ExternalLink, Wallet, Info, Crown, Zap, Shield } from "lucide-react";

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
        { 
            id: 1, 
            title: "Summer Vibes #1", 
            price: "0.05 ETH", 
            status: "Activo",
            image: "/assets/images/nft-placeholder.jpg",
            date: "15 Nov 2024"
        }
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
        console.log("Datos del NFT:", formData);
    };

    return (
        <div className="space-y-6">
            {/* SEO Metadata */}
            <div itemScope itemType="https://schema.org/Service" className="hidden">
                <meta itemProp="name" content="Crear NFT Musical - Musicdibs" />
                <meta itemProp="description" content="Convierte tu música en NFTs únicos en la blockchain de Polygon. Crea, distribuye y monetiza tus obras musicales como tokens digitales." />
                <meta itemProp="serviceType" content="NFT Creation" />
                <div itemProp="provider" itemScope itemType="https://schema.org/Organization">
                    <meta itemProp="name" content="Musicdibs" />
                </div>
            </div>

            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900">CREAR NFT</h1>
                <p className="text-gray-600 mt-1">
                    Convierte tu obra musical en un token único en la blockchain de Polygon
                </p>
                <p className="text-blue-600 mt-2">
                    <a 
                        href="https://www.youtube.com/watch?v=a3WAlJ2Ynek" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline font-medium"
                    >
                        Ver tutorial detallado de cómo crear tu NFT
                    </a>
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Formulario de creación */}
                <div className="lg:col-span-2 space-y-6">
                    <section aria-labelledby="create-nft-title">
                        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                            <h2 id="create-nft-title" className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                                    <Image className="text-purple-600" size={20} />
                                </div>
                                Crear Nuevo NFT
                            </h2>
                            
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Tu obra - Upload */}
                                <div>
                                    <label htmlFor="artwork-upload" className="block text-sm font-medium text-gray-700 mb-3">
                                        Tu obra
                                    </label>
                                    <div 
                                        className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-400 transition-colors cursor-pointer"
                                        onClick={() => document.getElementById('artwork-upload').click()}
                                        role="button"
                                        tabIndex={0}
                                        onKeyPress={(e) => e.key === 'Enter' && document.getElementById('artwork-upload').click()}
                                    >
                                        <Upload className="mx-auto text-gray-400 mb-3" size={32} />
                                        <p className="text-sm text-gray-600 mb-1">
                                            Formatos aceptados: jpg, jpeg y mp4. Tamaño máximo: 50MB
                                        </p>
                                        <p className="text-xs text-gray-500 mb-3">
                                            {selectedFile ? selectedFile.name : "Ningún archivo seleccionado"}
                                        </p>
                                        <button 
                                            type="button"
                                            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors"
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
                                    <label htmlFor="artworkName" className="block text-sm font-medium text-gray-700 mb-2">
                                        Nombre de la obra
                                    </label>
                                    <input 
                                        id="artworkName"
                                        type="text" 
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                        placeholder="Ingresa el nombre de tu obra"
                                        value={formData.artworkName}
                                        onChange={(e) => handleInputChange('artworkName', e.target.value)}
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
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                        placeholder="Tu nombre o nombre artístico"
                                        value={formData.authorName}
                                        onChange={(e) => handleInputChange('authorName', e.target.value)}
                                        required
                                        aria-required="true"
                                    />
                                    <p className="text-xs text-gray-500 mt-1">
                                        Puedes registrar tu NFT a tu nombre, a un nombre artístico o de un grupo.
                                    </p>
                                </div>

                                {/* Wallet Address */}
                                <div>
                                    <label htmlFor="walletAddress" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                                        <Wallet size={16} className="mr-2" />
                                        Dirección de Wallet (Polygon)
                                    </label>
                                    <input 
                                        id="walletAddress"
                                        type="text" 
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                        placeholder="0x..."
                                        value={formData.walletAddress}
                                        onChange={(e) => handleInputChange('walletAddress', e.target.value)}
                                        required
                                        aria-required="true"
                                    />
                                    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mt-3">
                                        <div className="flex items-start space-x-3">
                                            <Info size={18} className="text-yellow-600 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <p className="text-sm text-yellow-800 font-semibold mb-1">
                                                    IMPORTANTE
                                                </p>
                                                <p className="text-xs text-yellow-800 leading-relaxed">
                                                    Asegúrate de que esta dirección de wallet sea correcta y compatible 
                                                    (siempre empieza por 0x). Enviaremos tus NFTs a esta dirección.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button 
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl"
                                    aria-label="Crear NFT"
                                >
                                    CREAR NFT
                                </button>
                            </form>
                        </div>
                    </section>
                </div>

                {/* Panel lateral */}
                <div className="space-y-6">
                    {/* Tus NFTs */}
                    <section aria-labelledby="your-nfts-title">
                        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                            <h2 id="your-nfts-title" className="text-lg font-semibold text-gray-900 mb-4">Tus NFTs</h2>
                            <div className="space-y-4">
                                {userNFTs.map((nft) => (
                                    <div 
                                        key={nft.id} 
                                        className="flex items-center space-x-4 p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
                                    >
                                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                                            <Image className="text-white" size={20} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-medium text-gray-900 truncate">{nft.title}</p>
                                            <p className="text-sm text-gray-500">{nft.price}</p>
                                            <p className="text-xs text-gray-400">{nft.date}</p>
                                        </div>
                                        <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                                            {nft.status}
                                        </div>
                                    </div>
                                ))}
                                
                                {userNFTs.length === 0 && (
                                    <div className="text-center py-8 text-gray-500">
                                        <Image size={48} className="mx-auto mb-4 text-gray-300" />
                                        <p className="text-gray-600">Crea tu primer NFT para verlo aquí</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>

                    {/* Información sobre NFTs */}
                    <section aria-labelledby="nft-info-title">
                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-6">
                            <h2 id="nft-info-title" className="font-semibold text-blue-900 mb-4 flex items-center">
                                <Crown className="mr-2 text-blue-600" size={20} />
                                ¿Qué es un NFT?
                            </h2>
                            <p className="text-sm text-blue-800 mb-4 leading-relaxed">
                                Un NFT (Token No Fungible) es un certificado digital único que representa la propiedad 
                                de tu obra musical en la blockchain.
                            </p>
                            <div className="space-y-3 text-sm text-blue-700">
                                {[
                                    { icon: Shield, text: "Propiedad verificable en blockchain" },
                                    { icon: Zap, text: "Compatibilidad con Polygon (bajas comisiones)" },
                                    { icon: Image, text: "Mercado integrado para ventas" },
                                    { icon: Wallet, text: "Royalties por reventas automáticos" }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start space-x-2">
                                        <item.icon className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                        <span>{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}