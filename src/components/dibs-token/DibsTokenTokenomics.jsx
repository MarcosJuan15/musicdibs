'use client';
import { useState } from "react";
import {
    PieChart, Coins, Users, TrendingUp, Target, Gift, Globe,
    Calendar, DollarSign, Award, Lock, Unlock, ChevronDown, ChevronUp
} from "lucide-react";
import { useTranslations } from "next-intl";

// MAPEO DE COLORES: Clase Tailwind → Color hexadecimal
const COLOR_MAP = {
  // Colores primarios
  'text-purple-500': '#8b5cf6',
  'bg-purple-500': '#8b5cf6',
  'text-blue-500': '#3b82f6', 
  'bg-blue-500': '#3b82f6',
  'text-cyan-500': '#06b6d4',
  'bg-cyan-500': '#06b6d4',
  'text-green-500': '#10b981',
  'bg-green-500': '#10b981',
  'text-amber-500': '#f59e0b',
  'bg-amber-500': '#f59e0b',
  'text-pink-500': '#ec4899',
  'bg-pink-500': '#ec4899',
  'text-indigo-500': '#6366f1',
  'bg-indigo-500': '#6366f1',
  
  // Estados
  'bg-green-100': '#d1fae5',
  'text-green-800': '#065f46',
  'bg-blue-100': '#dbeafe',
  'text-blue-800': '#1e40af',
  'bg-cyan-100': '#cffafe',
  'text-cyan-800': '#155e75',
  'bg-amber-100': '#fef3c7',
  'text-amber-800': '#92400e',
  'bg-pink-100': '#fce7f3',
  'text-pink-800': '#9d174d',
  'bg-indigo-100': '#e0e7ff',
  'text-indigo-800': '#3730a3',
};

// Función para obtener color hexadecimal
const getHexColor = (tailwindClass) => {
  return COLOR_MAP[tailwindClass] || '#6b7280'; // Gris por defecto
};

// Función para obtener color de texto basado en fondo
const getTextColor = (bgColor) => {
  if (bgColor.includes('green')) return 'text-green-800';
  if (bgColor.includes('blue')) return 'text-blue-800';
  if (bgColor.includes('cyan')) return 'text-cyan-800';
  if (bgColor.includes('amber')) return 'text-amber-800';
  if (bgColor.includes('pink')) return 'text-pink-800';
  if (bgColor.includes('indigo')) return 'text-indigo-800';
  if (bgColor.includes('purple')) return 'text-purple-800';
  return 'text-gray-800';
};

export default function DibsTokenTokenomics() {
    const t = useTranslations('dibsToken.tokenomics');
    const [expandedSection, setExpandedSection] = useState(null);

    // Obtener datos CORREGIDOS
    const tokenInfo = t.raw('token_info') || [];
    const distribution = t.raw('distribution') || [];
    const detailLabels = t.raw('detail_labels') || {};

    const toggleSection = (index) => {
        setExpandedSection(expandedSection === index ? null : index);
    };

    const calculateAngles = () => {
        let currentAngle = 0;
        return distribution.map(item => {
            const percentageValue = item.percentageValue || 0;
            const angle = (percentageValue * 360) / 100;
            const startAngle = currentAngle;
            const endAngle = currentAngle + angle;
            currentAngle = endAngle;
            return {
                ...item,
                startAngle,
                endAngle,
                angle,
                // Añadir colores hexadecimales
                hexColor: getHexColor(item.colorClass),
                legendHexColor: getHexColor(item.legendColor)
            };
        });
    };

    const distributionWithAngles = calculateAngles();

    return (
        <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50/30">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12 md:mb-16">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            {t('title')}
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-900 via-purple-800 to-pink-600 mx-auto"></div>
                    </div>
                    <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-2 mt-6">
                        {t('description')}
                    </p>
                </div>

                {/* Token Info Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 mb-8 md:mb-12">
                    {tokenInfo.map((info, index) => {
                        const IconComponent = getIconComponent(info.icon);
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

                {/* Distribution Section */}
                <div className="flex flex-col lg:flex-row gap-6 md:gap-12 items-start">
                    <div className="bg-white rounded-xl md:rounded-2xl border border-gray-100 shadow-lg p-4 md:p-8 w-full lg:w-1/2 lg:sticky lg:top-8">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8 text-center">{t('distribution_title')}</h3>

                        <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-6 md:mb-8">
                            <div className="absolute inset-0 rounded-full border-4 md:border-8 border-gray-100 shadow-inner"></div>
                            
                            {/* GRÁFICO SVG CON COLORES HEXADECIMALES */}
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
                                            style={{ fill: item.hexColor }}
                                            className="opacity-90 cursor-pointer transition-all hover:opacity-100 hover:scale-105"
                                            onClick={() => toggleSection(index)}
                                        />
                                    );
                                })}
                            </svg>

                            <div className="absolute inset-6 md:inset-8 bg-white rounded-full flex flex-col items-center justify-center shadow-sm">
                                <span className="text-lg md:text-2xl font-bold text-gray-900">100M</span>
                                <span className="text-xs md:text-sm text-gray-500">Total Supply</span>
                            </div>
                        </div>

                        {/* LEYENDA CON COLORES VISIBLES */}
                        <div className="space-y-2 md:space-y-3">
                            {distribution.map((category, index) => (
                                <div
                                    key={index}
                                    className={`flex items-center p-2 md:p-3 rounded-lg cursor-pointer transition-all ${expandedSection === index ? 'bg-gray-50 border border-gray-200' : 'hover:bg-gray-50'
                                        }`}
                                    onClick={() => toggleSection(index)}
                                >
                                    {/* PUNTO DE COLOR CON HEXADECIMAL */}
                                    <div 
                                        className="w-3 h-3 md:w-4 md:h-4 rounded-full mr-2 md:mr-3 flex-shrink-0"
                                        style={{ backgroundColor: getHexColor(category.legendColor) }}
                                    ></div>
                                    
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-center">
                                            <p className="text-sm font-medium text-gray-900 truncate">
                                                {category.title}
                                            </p>
                                            <p className="text-sm font-bold text-gray-700 ml-1 md:ml-2">
                                                {category.percentage}
                                            </p>
                                        </div>
                                        <p className="text-xs text-gray-500 truncate">
                                            {category.amount}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Details Section */}
                    <div className="space-y-4 md:space-y-6 w-full lg:w-1/2">
                        {distribution.map((category, index) => {
                            const details = category.details || {};
                            const fasesArray = Array.isArray(details.fases) ? details.fases : [];
                            const rondasArray = Array.isArray(details.rondas) ? details.rondas : [];
                            const bonusArray = Array.isArray(details.bonus) ? details.bonus : [];

                            return (
                                <div
                                    key={index}
                                    className={`bg-white rounded-xl border transition-all duration-300 ${expandedSection === index ? 'border-blue-300 shadow-lg' : 'border-gray-200 shadow-sm hover:shadow-md'
                                        }`}
                                >
                                    <div className="p-4 md:p-6 cursor-pointer" onClick={() => toggleSection(index)}>
                                        <div className="flex items-start justify-between">
                                            <div className="flex items-start space-x-3 md:space-x-4">
                                                {/* CÍRCULO GRANDE CON COLOR Y PORCENTAJE */}
                                                <div 
                                                    className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                                                    style={{ backgroundColor: getHexColor(category.legendColor) }}
                                                >
                                                    <span className="text-white font-bold text-sm md:text-lg">
                                                        {category.percentage}
                                                    </span>
                                                </div>
                                                
                                                <div className="min-w-0 flex-1">
                                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 truncate">
                                                        {category.title}
                                                    </h3>
                                                    <p className="text-gray-700 font-medium text-sm md:text-base truncate">
                                                        {category.amount}
                                                    </p>
                                                    
                                                    {/* ETIQUETA DE ESTADO CON COLORES FIJOS */}
                                                    <span className={`inline-block mt-1 md:mt-2 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium ${
                                                        category.status === '¡Vendida!' ? 'bg-green-100 text-green-800' :
                                                        category.status === '2 Rondas' ? 'bg-blue-100 text-blue-800' :
                                                        category.status === 'Vesting 36 meses' ? 'bg-cyan-100 text-cyan-800' :
                                                        category.status === 'Liberación inmediata' ? 'bg-green-100 text-green-800' :
                                                        category.status === 'Vesting 24 meses' ? 'bg-amber-100 text-amber-800' :
                                                        category.status === 'Ecosistema' ? 'bg-indigo-100 text-indigo-800' :
                                                        'bg-gray-100 text-gray-800'
                                                    }`}>
                                                        {category.status}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="text-gray-400 flex-shrink-0 ml-2">
                                                {expandedSection === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                            </div>
                                        </div>
                                    </div>

                                    {expandedSection === index && (
                                        <div className="px-4 md:px-6 pb-4 md:pb-6 border-t border-gray-100 pt-3 md:pt-4">
                                            {details.fecha && <DetailItem icon={Calendar} title={detailLabels.fecha} content={details.fecha} />}
                                            {details.precio && <DetailItem icon={DollarSign} title={detailLabels.precio} content={details.precio} />}
                                            {details.listado && <DetailItem icon={TrendingUp} title={detailLabels.listado} content={details.listado} />}
                                            {details.hardCap && <DetailItem icon={Target} title={detailLabels.hardCap} content={details.hardCap} />}
                                            {details.objetivo && <DetailItem icon={Target} title={detailLabels.objetivo} content={details.objetivo} />}

                                            {fasesArray.length > 0 && (
                                                <div className="mb-3 md:mb-4">
                                                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center text-sm md:text-base">
                                                        <Users size={14} className="md:size-4 mr-2" />
                                                        {detailLabels.fases}
                                                    </h4>
                                                    <ul className="space-y-1 md:space-y-2">
                                                        {fasesArray.map((fase, idx) => (
                                                            <li key={idx} className="text-gray-700 text-xs md:text-sm bg-gray-50 p-2 rounded">
                                                                {fase}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            {rondasArray.length > 0 && (
                                                <div className="mb-3 md:mb-4">
                                                    <h4 className="font-semibold text-gray-900 mb-2 md:mb-3 flex items-center text-sm md:text-base">
                                                        <TrendingUp size={14} className="md:size-4 mr-2" />
                                                        {detailLabels.rondas}
                                                    </h4>
                                                    <div className="space-y-3 md:space-y-4">
                                                        {rondasArray.map((ronda, idx) => (
                                                            <div key={idx} className="border-l-4 border-blue-200 pl-3 md:pl-4 py-2 bg-blue-50/50 rounded-r">
                                                                <h5 className="font-medium text-gray-900 mb-1 md:mb-2 text-sm md:text-base">
                                                                    {ronda.nombre}
                                                                </h5>
                                                                <div className="grid grid-cols-1 gap-1 md:gap-2 text-xs md:text-sm">
                                                                    {ronda.cantidad && <div><span className="font-medium">Cantidad:</span> {ronda.cantidad}</div>}
                                                                    {ronda.precio && <div><span className="font-medium">Precio:</span> {ronda.precio}</div>}
                                                                    {ronda.liberacion && <div><span className="font-medium">Liberación:</span> {ronda.liberacion}</div>}
                                                                    {ronda.vesting && <div><span className="font-medium">Vesting:</span> {ronda.vesting}</div>}
                                                                </div>
                                                                {ronda.bonus && Array.isArray(ronda.bonus) && ronda.bonus.length > 0 && (
                                                                    <div className="mt-1 md:mt-2">
                                                                        <span className="font-medium text-xs md:text-sm">{detailLabels.bonus}:</span>
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

                                            {bonusArray.length > 0 && (
                                                <div className="mb-3 md:mb-4">
                                                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center text-sm md:text-base">
                                                        <Award size={14} className="md:size-4 mr-2" />
                                                        {detailLabels.bonus}
                                                    </h4>
                                                    <ul className="space-y-1 md:space-y-2">
                                                        {bonusArray.map((bonus, idx) => (
                                                            <li key={idx} className="text-gray-700 text-xs md:text-sm bg-amber-50 p-2 rounded border border-amber-100">
                                                                {bonus}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mt-3 md:mt-4 pt-3 md:pt-4 border-t border-gray-200">
                                                {details.liberacion && (
                                                    <div className="flex items-start">
                                                        <Unlock size={14} className="md:size-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                                        <div>
                                                            <p className="font-medium text-gray-900 text-sm md:text-base">
                                                                {detailLabels.liberacion_inmediata}
                                                            </p>
                                                            <p className="text-gray-700 text-xs md:text-sm">{details.liberacion}</p>
                                                        </div>
                                                    </div>
                                                )}

                                                {details.vesting && (
                                                    <div className="flex items-start">
                                                        <Lock size={14} className="md:size-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                                                        <div>
                                                            <p className="font-medium text-gray-900 text-sm md:text-base">
                                                                {detailLabels.vesting}
                                                            </p>
                                                            <p className="text-gray-700 text-xs md:text-sm">{details.vesting}</p>
                                                        </div>
                                                    </div>
                                                )}

                                                {details.cliff && (
                                                    <div className="flex items-start md:col-span-2">
                                                        <Calendar size={14} className="md:size-4 text-orange-500 mt-0.5 mr-2 flex-shrink-0" />
                                                        <div>
                                                            <p className="font-medium text-gray-900 text-sm md:text-base">
                                                                {detailLabels.cliff}
                                                            </p>
                                                            <p className="text-gray-700 text-xs md:text-sm">{details.cliff}</p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

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

function getIconComponent(iconName) {
    const icons = {
        PieChart, Coins, Users, TrendingUp, Target, Gift, Globe,
        Calendar, DollarSign, Award, Lock, Unlock
    };
    return icons[iconName] || Coins;
}