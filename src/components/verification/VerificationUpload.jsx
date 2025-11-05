'use client';

import { useState, useCallback } from "react";
import { Upload, CheckCircle, XCircle, AlertCircle, FileText } from "lucide-react";

export default function VerificationUpload() {
    const [files, setFiles] = useState([]);
    const [verificationStatus, setVerificationStatus] = useState("idle");

    const handleDropFiles = useCallback((newFiles) => {
        const filesWithIds = Array.from(newFiles).map((file) => ({
            id: Math.random().toString(36).substr(2, 9),
            name: file.name,
            size: file.size,
            type: file.type.split("/")[1]?.toUpperCase() || "FILE",
            progress: 0,
            status: "pending",
            fileObject: file,
        }));

        setFiles((prevFiles) => [...filesWithIds, ...prevFiles]);

        // Simular progreso de carga
        filesWithIds.forEach((file) => {
            let progress = 0;
            const interval = setInterval(() => {
                progress += 10;
                setFiles((prev) =>
                    prev.map((f) =>
                        f.id === file.id ? { ...f, progress: Math.min(progress, 100) } : f
                    )
                );

                if (progress >= 100) {
                    clearInterval(interval);
                    setTimeout(() => verifyFile(file.id), 500);
                }
            }, 200);
        });
    }, []);

    const verifyFile = (fileId) => {
        setFiles((prev) =>
            prev.map((f) => (f.id === fileId ? { ...f, status: "verifying" } : f))
        );

        // Simular proceso de verificación
        setTimeout(() => {
            const isVerified = Math.random() > 0.5;
            setFiles((prev) =>
                prev.map((f) =>
                    f.id === fileId
                        ? { ...f, status: isVerified ? "verified" : "not-verified" }
                        : f
                )
            );
        }, 2000);
    };

    const handleDeleteFile = (fileId) => {
        setFiles((prev) => prev.filter((file) => file.id !== fileId));
    };

    const handleRetryFile = (fileId) => {
        setFiles((prev) =>
            prev.map((f) =>
                f.id === fileId ? { ...f, status: "pending", progress: 0 } : f
            )
        );
        verifyFile(fileId);
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case "verified":
                return <CheckCircle className="h-5 w-5 text-green-500" aria-hidden="true" />;
            case "not-verified":
                return <XCircle className="h-5 w-5 text-red-500" aria-hidden="true" />;
            case "verifying":
                return <div className="animate-spin h-5 w-5 border-2 border-blue-500 border-t-transparent rounded-full" aria-label="Verificando" />;
            case "error":
                return <AlertCircle className="h-5 w-5 text-amber-500" aria-hidden="true" />;
            default:
                return null;
        }
    };

    const getStatusMessage = (status) => {
        switch (status) {
            case "verifying":
                return "Verificando en blockchain...";
            case "verified":
                return "¡Obra registrada!";
            case "not-verified":
                return "Obra no registrada";
            case "error":
                return "Error en verificación";
            default:
                return "Pendiente de verificación";
        }
    };

    const getStatusDescription = (status) => {
        switch (status) {
            case "verified":
                return "Esta obra está registrada en nuestra base de datos blockchain";
            case "not-verified":
                return "No encontramos registro de esta obra en nuestro sistema";
            case "verifying":
                return "Analizando la huella digital de la obra...";
            default:
                return "";
        }
    };

    return (
        <section className="py-16" aria-labelledby="verificador-archivos">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto">
                    <h2 id="verificador-archivos" className="text-3xl font-bold text-center mb-12">
                        Verifica tus Obras
                    </h2>

                    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8" itemScope itemType="https://schema.org/UploadAction">
                        <div
                            className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center transition-all duration-300 hover:border-purple-500 hover:bg-purple-50/20 mb-8 cursor-pointer"
                            onDragOver={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                            }}
                            onDrop={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                if (e.dataTransfer.files.length > 0) {
                                    handleDropFiles(e.dataTransfer.files);
                                }
                            }}
                            onClick={() => document.getElementById("file-upload").click()}
                            role="button"
                            tabIndex={0}
                            aria-label="Área para subir archivos, arrastra y suelta o haz clic para seleccionar"
                        >
                            <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" aria-hidden="true" />
                            <p className="text-lg font-semibold text-gray-700 mb-2">
                                Arrastra y suelta tus archivos aquí
                            </p>
                            <p className="text-gray-500 text-sm">
                                o haz clic para seleccionar archivos de tu dispositivo
                            </p>
                            <input
                                id="file-upload"
                                type="file"
                                multiple
                                className="hidden"
                                onChange={(e) => {
                                    if (e.target.files.length > 0) {
                                        handleDropFiles(e.target.files);
                                    }
                                }}
                                accept=".mp3,.wav,.flac,.m4a,.aac,.pdf,.doc,.docx,.txt"
                                aria-describedby="formatos-soportados"
                            />
                        </div>

                        <div id="formatos-soportados" className="text-center text-sm text-gray-500 mb-8">
                            Formatos soportados: MP3, WAV, FLAC, M4A, AAC, PDF, DOC, DOCX, TXT
                        </div>

                        {/* Lista de archivos */}
                        {files.length > 0 && (
                            <div className="space-y-4" role="list" aria-label="Archivos en verificación">
                                {files.map((file) => (
                                    <div
                                        key={file.id}
                                        className="border border-gray-200 rounded-lg p-4 transition-all hover:shadow-md"
                                        role="listitem"
                                        itemScope
                                        itemType="https://schema.org/DigitalDocument"
                                    >
                                        <div className="flex items-start justify-between mb-3">
                                            <div className="flex items-center space-x-3 flex-1 min-w-0">
                                                <FileText className="h-5 w-5 text-gray-400 flex-shrink-0" aria-hidden="true" />
                                                <div className="min-w-0 flex-1">
                                                    <p className="font-medium text-gray-900 truncate" itemProp="name">
                                                        {file.name}
                                                    </p>
                                                    <p className="text-xs text-gray-500">
                                                        {file.type} • {(file.size / 1024 / 1024).toFixed(2)} MB
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-2 ml-4 flex-shrink-0">
                                                {getStatusIcon(file.status)}
                                                <span className="text-sm font-medium text-gray-700">
                                                    {getStatusMessage(file.status)}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <div className="w-full bg-gray-200 rounded-full h-2" role="progressbar" aria-valuenow={file.progress} aria-valuemin="0" aria-valuemax="100">
                                                <div
                                                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                                                    style={{ width: `${file.progress}%` }}
                                                ></div>
                                            </div>
                                        </div>

                                        {getStatusDescription(file.status) && (
                                            <p className="text-sm text-gray-600 mb-3">
                                                {getStatusDescription(file.status)}
                                            </p>
                                        )}

                                        <div className="flex justify-end space-x-2">
                                            <button
                                                onClick={() => handleDeleteFile(file.id)}
                                                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                                                aria-label={`Eliminar ${file.name}`}
                                            >
                                                Eliminar
                                            </button>
                                            {(file.status === "not-verified" || file.status === "error") && (
                                                <button
                                                    onClick={() => handleRetryFile(file.id)}
                                                    className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-900 via-purple-800 to-pink-600 rounded-lg hover:opacity-90 transition-opacity"
                                                >
                                                    Reintentar
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}