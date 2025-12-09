// src/components/dibs-token/DibsTokenTokenomics.jsx
"use client";
import { useState } from "react";
import {
    PieChart, Coins, Users, TrendingUp, Target, Gift, Globe,
    Calendar, DollarSign, Award, Lock, Unlock, ChevronDown, ChevronUp
} from "lucide-react";

export default function DibsTokenTokenomics() {
    const [expandedSection, setExpandedSection] = useState(null);

    const tokenInfo = [
        { label: "Símbolo", value: "DIBS", icon: Coins },
        { label: "Emisión total", value: "100M (limitada)", icon: Target },
        { label: "Tipo", value: "Solana-SPL", icon: PieChart },
        { label: "Decimales", value: "9 dígitos", icon: TrendingUp },
        { label: "Red blockchain", value: "Solana", icon: Globe },
    ];

    const distribution = [
        {
            title: "Preventa",
            percentage: "10%",
            percentageValue: 10,
            amount: "10.000.000 DIBS",
            colorClass: "text-purple-500",
            legendColor: "bg-purple-500",
            progressColor: "bg-purple-400",
            status: "¡Vendida!",
            statusColor: "bg-green-100 text-green-800",
            details: {
                fecha: "14-OCTUBRE-2024 (Finalizada)",
                precio: "0,05€",
                fases: [
                    "Fase 1: 5.000.000 DIBS",
                    "Fase 2: 5.000.000 DIBS"
                ],
                bonus: [
                    "10% extra: compras ≥ 1.000€",
                    "15% extra: compras ≥ 5.000€",
                    "20% extra: compras ≥ 10.000€",
                    "NFT exclusivo Musicdibs"
                ],
                liberacion: "0% inmediata",
                vesting: "100% lineal durante 4 meses"
            }
        },
        {
            title: "Venta Pública",
            percentage: "20%",
            percentageValue: 20,
            amount: "20.000.000 DIBS",
            colorClass: "text-blue-500",
            legendColor: "bg-blue-500",
            progressColor: "bg-blue-400",
            status: "2 Rondas",
            statusColor: "bg-blue-100 text-blue-800",
            details: {
                fecha: "INICIO: 9-Diciembre-2024",
                listado: "LISTADO (TGE): 1-Marzo-2025",
                hardCap: "Hard Cap: $2.250.000",
                rondas: [
                    {
                        nombre: "Ronda 1 (Finalizada)",
                        cantidad: "10.000.000 DIBS",
                        precio: "0,075$",
                        bonus: ["5% extra: ≥ $1.000", "10% extra: ≥ $5.000"],
                        liberacion: "0% inmediata",
                        vesting: "100% lineal durante 2 meses"
                    },
                    {
                        nombre: "Ronda 2 (Finalizada)",
                        cantidad: "10.000.000 DIBS",
                        precio: "0,10$",
                        bonus: ["5% extra: ≥ $1.000", "10% extra: ≥ $5.000"],
                        liberacion: "20% inmediata",
                        vesting: "80% a los 30 días"
                    }
                ]
            }
        },
        {
            title: "Equipo y asesores",
            percentage: "10%",
            percentageValue: 10,
            amount: "10.000.000 DIBS",
            colorClass: "text-cyan-500",
            legendColor: "bg-cyan-500",
            progressColor: "bg-cyan-400",
            status: "Vesting 36 meses",
            statusColor: "bg-cyan-100 text-cyan-800",
            details: {
                objetivo: "Recompensar y retener al equipo fundador, desarrolladores y asesores estratégicos",
                liberacion: "0% inmediata",
                cliff: "Bloqueo inicial: 12 meses",
                vesting: "100% lineal durante 36 meses"
            }
        },
        {
            title: "Liquidez CEX/DEX",
            percentage: "10%",
            percentageValue: 10,
            amount: "10.000.000 DIBS",
            colorClass: "text-green-500",
            legendColor: "bg-green-500",
            progressColor: "bg-green-400",
            status: "Liberación inmediata",
            statusColor: "bg-green-100 text-green-800",
            details: {
                liberacion: "100% inmediata (TGE)",
                vesting: "No aplica vesting"
            }
        },
        {
            title: "Marketing",
            percentage: "10%",
            percentageValue: 10,
            amount: "10.000.000 DIBS",
            colorClass: "text-amber-500",
            legendColor: "bg-amber-500",
            progressColor: "bg-amber-400",
            status: "Vesting 24 meses",
            statusColor: "bg-amber-100 text-amber-800",
            details: {
                liberacion: "10% inmediata (TGE)",
                vesting: "90% lineal durante 24 meses"
            }
        },
        {
            title: "Recompensas y fidelización",
            percentage: "10%",
            percentageValue: 10,
            amount: "10.000.000 DIBS",
            colorClass: "text-pink-500",
            legendColor: "bg-pink-500",
            progressColor: "bg-pink-400",
            status: "Vesting 24 meses",
            statusColor: "bg-pink-100 text-pink-800",
            details: {
                liberacion: "10% inmediata (TGE)",
                vesting: "90% lineal durante 24 meses"
            }
        },
        {
            title: "Tokenomics Musicdibs",
            percentage: "30%",
            percentageValue: 30,
            amount: "30.000.000 DIBS",
            colorClass: "text-indigo-500",
            legendColor: "bg-indigo-500",
            progressColor: "bg-indigo-400",
            status: "Ecosistema",
            statusColor: "bg-indigo-100 text-indigo-800",
            details: {
                objetivo: "Reservado para el ecosistema de Musicdibs (gas de registros, royalties de autores,...)",
                liberacion: "10% inmediata (TGE)",
                vesting: "90% lineal durante 24 meses"
            }
        }
    ];

    const toggleSection = (index) => {
        setExpandedSection(expandedSection === index ? null : index);
    };

    // Calcular ángulos para el gráfico circular
    const calculateAngles = () => {
        let currentAngle = 0;
        return distribution.map(item => {
            const angle = (item.percentageValue * 360) / 100;
            const startAngle = currentAngle;
            const endAngle = currentAngle + angle;
            currentAngle = endAngle;
            return {
                ...item,
                startAngle,
                endAngle,
                angle
            };
        });
    };

    const distributionWithAngles = calculateAngles();

    return (
        <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50/30" itemScope itemType="https://schema.org/WebPageElement">
            <div className="container mx-auto max-w-6xl">

                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6" itemProp="headline">
                            Distribución y Usos del Token DIBS
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-900 via-purple-800 to-pink-600 mx-auto"></div>
                    </div>
                    <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-2 mt-6">
                        La economía del token DIBS está diseñada para fomentar el crecimiento sostenible y la adopción masiva del ecosistema Musicdibs.
                    </p>
                </div>

                {/* Token Information Cards */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 mb-8 md:mb-12">
                    {tokenInfo.map((info, index) => {
                        const IconComponent = info.icon;
                        return (
                            <div key={index} className="bg-white rounded-lg md:rounded-xl border border-gray-200 p-3 md:p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                                <div className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 text-blue-600 mb-1 md:mb-2">
                                    <IconComponent size={16} className="md:size-5" />
                                </div>
                                <p className="text-xs md:text-sm text-gray-500 mb-1">{info.label}</p>
                                <p className="font-bold text-gray-900 text-sm md:text-base">{info.value}</p>
                            </div>
                        );
                    })}
                </div>

                <div className="flex flex-col lg:flex-row gap-6 md:gap-12 items-start">

                    {/* Distribution Chart - CORREGIDO CON SVG */}
                    <div className="bg-white rounded-xl md:rounded-2xl border border-gray-100 shadow-lg p-4 md:p-8 w-full lg:w-1/2 lg:sticky lg:top-8">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8 text-center">Distribución de 100M Tokens</h3>

                        {/* Circular Chart - SVG CORREGIDO */}
                        <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-6 md:mb-8">
                            <div className="absolute inset-0 rounded-full border-4 md:border-8 border-gray-100 shadow-inner"></div>

                            {/* SVG con paths - CORRECCIÓN APLICADA */}
                            <svg viewBox="0 0 32 32" className="absolute inset-0 w-full h-full rotate-[-90deg]">
                                {distributionWithAngles.map((item, index) => {
                                    const r = 16;
                                    const cx = 16;
                                    const cy = 16;

                                    const start = (Math.PI / 180) * item.startAngle;
                                    const end = (Math.PI / 180) * item.endAngle;

                                    const x1 = cx + r * Math.cos(start);
                                    const y1 = cy + r * Math.sin(start);
                                    const x2 = cx + r * Math.cos(end);
                                    const y2 = cy + r * Math.sin(end);

                                    const largeArc = item.angle > 180 ? 1 : 0;

                                    return (
                                        <path
                                            key={index}
                                            d={`M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} Z`}
                                            className={`${item.colorClass} fill-current opacity-90 cursor-pointer transition-all hover:opacity-100 hover:scale-105`}
                                            onClick={() => toggleSection(index)}
                                        />
                                    );
                                })}
                            </svg>

                            {/* Center Text */}
                            <div className="absolute inset-6 md:inset-8 bg-white rounded-full flex flex-col items-center justify-center shadow-sm">
                                <span className="text-lg md:text-2xl font-bold text-gray-900">100M</span>
                                <span className="text-xs md:text-sm text-gray-500">Total Supply</span>
                            </div>
                        </div>

                        {/* Chart Legend - SIMPLIFICADA */}
                        <div className="space-y-2 md:space-y-3">
                            {distribution.map((category, index) => (
                                <div
                                    key={index}
                                    className={`flex items-center p-2 md:p-3 rounded-lg cursor-pointer transition-all ${expandedSection === index ? 'bg-gray-50 border border-gray-200' : 'hover:bg-gray-50'
                                        }`}
                                    onClick={() => toggleSection(index)}
                                >
                                    <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${category.legendColor} mr-2 md:mr-3 flex-shrink-0`}></div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-center">
                                            <p className="text-sm font-medium text-gray-900 truncate">{category.title}</p>
                                            <p className="text-sm font-bold text-gray-700 ml-1 md:ml-2">{category.percentage}</p>
                                        </div>
                                        <p className="text-xs text-gray-500 truncate">{category.amount}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Distribution Details */}
                    <div className="space-y-4 md:space-y-6 w-full lg:w-1/2">
                        {distribution.map((category, index) => (
                            <div
                                key={index}
                                className={`bg-white rounded-xl border transition-all duration-300 ${expandedSection === index ? 'border-blue-300 shadow-lg' : 'border-gray-200 shadow-sm hover:shadow-md'
                                    }`}
                            >
                                <div
                                    className="p-4 md:p-6 cursor-pointer"
                                    onClick={() => toggleSection(index)}
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-start space-x-3 md:space-x-4">
                                            <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg ${category.legendColor} flex items-center justify-center flex-shrink-0`}>
                                                <span className="text-white font-bold text-sm md:text-lg">{category.percentage}</span>
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 truncate">{category.title}</h3>
                                                <p className="text-gray-700 font-medium text-sm md:text-base truncate">{category.amount}</p>
                                                <span className={`inline-block mt-1 md:mt-2 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium ${category.statusColor}`}>
                                                    {category.status}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="text-gray-400 flex-shrink-0 ml-2">
                                            {expandedSection === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                        </div>
                                    </div>
                                </div>

                                {/* Expandable Details */}
                                {expandedSection === index && (
                                    <div className="px-4 md:px-6 pb-4 md:pb-6 border-t border-gray-100 pt-3 md:pt-4">

                                        {/* Fecha */}
                                        {category.details.fecha && (
                                            <DetailItem icon={Calendar} title="Fecha" content={category.details.fecha} />
                                        )}

                                        {/* Precio */}
                                        {category.details.precio && (
                                            <DetailItem icon={DollarSign} title="Precio" content={category.details.precio} />
                                        )}

                                        {/* Listado TGE */}
                                        {category.details.listado && (
                                            <DetailItem icon={TrendingUp} title="Listado" content={category.details.listado} />
                                        )}

                                        {/* Hard Cap */}
                                        {category.details.hardCap && (
                                            <DetailItem icon={Target} title="Hard Cap" content={category.details.hardCap} />
                                        )}

                                        {/* Objetivo */}
                                        {category.details.objetivo && (
                                            <DetailItem icon={Target} title="Objetivo" content={category.details.objetivo} />
                                        )}

                                        {/* Fases */}
                                        {category.details.fases && (
                                            <div className="mb-3 md:mb-4">
                                                <h4 className="font-semibold text-gray-900 mb-2 flex items-center text-sm md:text-base">
                                                    <Users size={14} className="md:size-4 mr-2" />
                                                    Fases de Preventa
                                                </h4>
                                                <ul className="space-y-1 md:space-y-2">
                                                    {category.details.fases.map((fase, idx) => (
                                                        <li key={idx} className="text-gray-700 text-xs md:text-sm bg-gray-50 p-2 rounded">
                                                            {fase}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Rondas */}
                                        {category.details.rondas && (
                                            <div className="mb-3 md:mb-4">
                                                <h4 className="font-semibold text-gray-900 mb-2 md:mb-3 flex items-center text-sm md:text-base">
                                                    <TrendingUp size={14} className="md:size-4 mr-2" />
                                                    Rondas de Venta
                                                </h4>
                                                <div className="space-y-3 md:space-y-4">
                                                    {category.details.rondas.map((ronda, idx) => (
                                                        <div key={idx} className="border-l-4 border-blue-200 pl-3 md:pl-4 py-2 bg-blue-50/50 rounded-r">
                                                            <h5 className="font-medium text-gray-900 mb-1 md:mb-2 text-sm md:text-base">{ronda.nombre}</h5>
                                                            <div className="grid grid-cols-1 gap-1 md:gap-2 text-xs md:text-sm">
                                                                <div><span className="font-medium">Cantidad:</span> {ronda.cantidad}</div>
                                                                <div><span className="font-medium">Precio:</span> {ronda.precio}</div>
                                                                <div><span className="font-medium">Liberación:</span> {ronda.liberacion}</div>
                                                                <div><span className="font-medium">Vesting:</span> {ronda.vesting}</div>
                                                            </div>
                                                            {ronda.bonus && (
                                                                <div className="mt-1 md:mt-2">
                                                                    <span className="font-medium text-xs md:text-sm">Bonus:</span>
                                                                    <ul className="text-xs md:text-sm text-gray-700 mt-1 space-y-1">
                                                                        {ronda.bonus.map((bonus, bonusIdx) => (
                                                                            <li key={bonusIdx} className="flex items-center">
                                                                                <Award size={10} className="md:size-3 mr-1 text-amber-500" />
                                                                                {bonus}
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Bonus */}
                                        {category.details.bonus && (
                                            <div className="mb-3 md:mb-4">
                                                <h4 className="font-semibold text-gray-900 mb-2 flex items-center text-sm md:text-base">
                                                    <Award size={14} className="md:size-4 mr-2" />
                                                    Bonus por Volumen
                                                </h4>
                                                <ul className="space-y-1 md:space-y-2">
                                                    {category.details.bonus.map((bonus, idx) => (
                                                        <li key={idx} className="text-gray-700 text-xs md:text-sm bg-amber-50 p-2 rounded border border-amber-100">
                                                            {bonus}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Vesting Information */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mt-3 md:mt-4 pt-3 md:pt-4 border-t border-gray-200">
                                            <div className="flex items-start">
                                                <Unlock size={14} className="md:size-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                                <div>
                                                    <p className="font-medium text-gray-900 text-sm md:text-base">Liberación Inmediata</p>
                                                    <p className="text-gray-700 text-xs md:text-sm">{category.details.liberacion}</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start">
                                                <Lock size={14} className="md:size-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                                                <div>
                                                    <p className="font-medium text-gray-900 text-sm md:text-base">Vesting</p>
                                                    <p className="text-gray-700 text-xs md:text-sm">{category.details.vesting}</p>
                                                </div>
                                            </div>

                                            {/* Cliff Period */}
                                            {category.details.cliff && (
                                                <div className="flex items-start md:col-span-2">
                                                    <Calendar size={14} className="md:size-4 text-orange-500 mt-0.5 mr-2 flex-shrink-0" />
                                                    <div>
                                                        <p className="font-medium text-gray-900 text-sm md:text-base">Período de Bloqueo (Cliff)</p>
                                                        <p className="text-gray-700 text-xs md:text-sm">{category.details.cliff}</p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Schema.org for MonetaryAmount */}
                <div itemScope itemType="https://schema.org/MonetaryAmount" className="hidden">
                    <meta itemProp="name" content="DIBS Token Distribution" />
                    <meta itemProp="description" content="Total supply: 100,000,000 DIBS tokens" />
                    <meta itemProp="currency" content="DIBS" />
                    <meta itemProp="value" content="100000000" />
                </div>
            </div>
        </section>
    );
}

// Componente auxiliar para detalles
function DetailItem({ icon: Icon, title, content }) {
    return (
        <div className="flex items-start mb-3 md:mb-4">
            <Icon size={14} className="md:size-4 text-gray-500 mt-0.5 mr-2 md:mr-3 flex-shrink-0" />
            <div>
                <p className="font-medium text-gray-900 text-sm md:text-base">{title}</p>
                                <p className="text-gray-700 text-xs md:text-sm">{content}</p>
            </div>
        </div>
    );
}