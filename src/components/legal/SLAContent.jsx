"use client";
import { useTranslations } from "next-intl";
import { Clock, AlertTriangle, CheckCircle, Phone, Mail } from "lucide-react";

export default function SLAContent() {
    const t = useTranslations("legal"); // Solo 'legal'

    // Obtener todos los datos de service_level_agreement
    const slaData = t.raw("service_level_agreement");
    const sections = slaData.sections;

    // Helper functions para acceder a los datos
    const getArray = (key) => {
        const path = key.split(".");
        let value = sections;

        for (const segment of path) {
            if (value && typeof value === "object") {
                value = value[segment];
            } else {
                return [];
            }
        }

        return Array.isArray(value) ? value : [];
    };

    const getValue = (key, defaultValue = "") => {
        const path = key.split(".");
        let value = slaData;

        for (const segment of path) {
            if (value && typeof value === "object") {
                value = value[segment];
            } else {
                return defaultValue;
            }
        }

        return value || defaultValue;
    };

    // Obtener arrays específicos
    const servicesCovered = getArray("services_covered.items");
    const slaTableRows = getArray("sla_categories.table.rows");
    const slaTableHeaders = getArray("sla_categories.table.headers");
    const incidentItems = getArray("incident_management.items");
    const contactItems = getArray("contact.items");

    return (
        <div
            className="min-h-screen bg-gray-50"
            itemScope
            itemType="https://schema.org/WebPage"
        >
            <div
                itemScope
                itemType="https://schema.org/LegalDocument"
                className="hidden"
            >
                <meta itemProp="name" content={getValue("schema.name")} />
                <meta itemProp="description" content={getValue("schema.description")} />
                <meta
                    itemProp="dateModified"
                    content={getValue("schema.date_modified")}
                />
                <meta itemProp="publisher" content={getValue("schema.publisher")} />
            </div>

            <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
                <header className="text-center mb-16 bg-white rounded-lg shadow-sm p-8">
                    <h1
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                        itemProp="headline"
                    >
                        {getValue("title")}
                    </h1>
                    <p className="text-gray-600 text-lg">
                        {getValue("last_updated")}:{" "}
                        <time
                            dateTime={getValue("schema.date_modified")}
                            itemProp="dateModified"
                        >
                            {getValue("last_updated_date")}
                        </time>
                    </p>
                </header>

                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="p-8 md:p-12 space-y-12">
                        {/* Purpose Section */}
                        <section aria-labelledby="proposito-acuerdo">
                            <h2
                                id="proposito-acuerdo"
                                className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200"
                            >
                                {sections.purpose?.title}
                            </h2>
                            <div className="text-gray-700 leading-relaxed space-y-4">
                                <p itemProp="text">
                                    {sections.purpose?.content ? (
                                        <span
                                            dangerouslySetInnerHTML={{
                                                __html: sections.purpose.content
                                                    .replace(/{strong}/g, "<strong>")
                                                    .replace(/{\/strong}/g, "</strong>"),
                                            }}
                                        />
                                    ) : (
                                        ""
                                    )}
                                </p>
                            </div>
                        </section>

                        {/* Services Covered */}
                        <section aria-labelledby="servicios-cubiertos">
                            <h2
                                id="servicios-cubiertos"
                                className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200"
                            >
                                {sections.services_covered?.title}
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {servicesCovered.map((service, index) => (
                                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                                        <div className="flex items-center mb-2">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                            <h3 className="font-semibold text-gray-900 text-base">
                                                {service.title}
                                            </h3>
                                        </div>
                                        {service.description && (
                                            <p className="text-gray-700 text-sm pl-7">
                                                {service.description}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* SLA Categories */}
                        <section aria-labelledby="categorias-sla">
                            <h2
                                id="categorias-sla"
                                className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200"
                            >
                                {sections.sla_categories?.title}
                            </h2>

                            {/* Mobile Cards */}
                            <div className="block sm:hidden space-y-4">
                                {slaTableRows.map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                                    >
                                        <h3 className="font-semibold text-gray-900 mb-3 text-sm flex items-center">
                                            <Clock className="h-4 w-4 text-blue-500 mr-2" />
                                            {item.service}
                                        </h3>
                                        <div className="grid grid-cols-3 gap-2 text-xs">
                                            <div className="text-center">
                                                <div className="font-semibold text-gray-600">
                                                    {slaTableHeaders[1] || "Anual"}
                                                </div>
                                                <div className="text-green-600 font-bold mt-1">
                                                    {item.annual}
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <div className="font-semibold text-gray-600">
                                                    {slaTableHeaders[2] || "Mensual"}
                                                </div>
                                                <div className="text-green-600 font-bold mt-1">
                                                    {item.monthly}
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <div className="font-semibold text-gray-600">
                                                    {slaTableHeaders[3] || "Único"}
                                                </div>
                                                <div className="text-blue-600 font-bold mt-1">
                                                    {item.one_time}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Desktop Table */}
                            <div className="hidden sm:block overflow-x-auto">
                                <table className="w-full border-collapse border border-gray-300 rounded-lg">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            {slaTableHeaders.map((header, index) => (
                                                <th
                                                    key={index}
                                                    className="border border-gray-300 p-3 md:p-4 text-left font-semibold text-sm md:text-base"
                                                >
                                                    {header}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {slaTableRows.map((row, index) => (
                                            <tr
                                                key={index}
                                                className={index % 2 === 0 ? "bg-gray-50" : ""}
                                            >
                                                <td className="border border-gray-300 p-3 md:p-4 font-medium text-sm md:text-base">
                                                    {row.service}
                                                </td>
                                                <td className="border border-gray-300 p-3 md:p-4 text-green-600 font-semibold text-sm md:text-base">
                                                    {row.annual}
                                                </td>
                                                <td className="border border-gray-300 p-3 md:p-4 text-green-600 font-semibold text-sm md:text-base">
                                                    {row.monthly}
                                                </td>
                                                <td className="border border-gray-300 p-3 md:p-4 text-blue-600 font-semibold text-sm md:text-base">
                                                    {row.one_time}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Incident Management */}
                        <section aria-labelledby="gestion-incidentes">
                            <h2
                                id="gestion-incidentes"
                                className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200"
                            >
                                {sections.incident_management?.title}
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                                {incidentItems.map((incident, index) => (
                                    <div
                                        key={index}
                                        className={`text-center p-4 md:p-6 rounded-lg border ${index === 0
                                                ? "bg-red-50 border-red-200"
                                                : index === 1
                                                    ? "bg-yellow-50 border-yellow-200"
                                                    : "bg-blue-50 border-blue-200"
                                            }`}
                                    >
                                        <div
                                            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-3 ${index === 0
                                                    ? "bg-red-100"
                                                    : index === 1
                                                        ? "bg-yellow-100"
                                                        : "bg-blue-100"
                                                }`}
                                        >
                                            <AlertTriangle
                                                className={`h-5 w-5 ${index === 0
                                                        ? "text-red-600"
                                                        : index === 1
                                                            ? "text-yellow-600"
                                                            : "text-blue-600"
                                                    }`}
                                            />
                                        </div>
                                        <h4 className="font-semibold text-gray-900 mb-2 text-base">
                                            {incident.level}
                                        </h4>
                                        <p className="text-gray-700 text-sm mb-3">
                                            {incident.description}
                                        </p>
                                        <p
                                            className={`font-medium text-sm ${index === 0
                                                    ? "text-red-600"
                                                    : index === 1
                                                        ? "text-yellow-600"
                                                        : "text-blue-600"
                                                }`}
                                        >
                                            Respuesta: {incident.response_time}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Contact Information */}
                        <section aria-labelledby="contacto-sla">
                            <h2
                                id="contacto-sla"
                                className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200"
                            >
                                {sections.contact?.title}
                            </h2>
                            <div
                                className="bg-gray-50 rounded-lg p-6"
                                itemScope
                                itemType="https://schema.org/Organization"
                            >
                                <p className="text-gray-700 mb-6" itemProp="description">
                                    {sections.contact?.description}
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="flex items-center space-x-3 p-4 bg-white rounded-lg">
                                        <Mail className="h-5 w-5 text-blue-500" />
                                        <div>
                                            <p className="font-medium text-gray-900 text-sm">
                                                {contactItems[0]?.type}
                                            </p>
                                            <a
                                                href={`mailto:${contactItems[0]?.value}`}
                                                className="text-blue-600 hover:text-blue-700 text-sm"
                                                itemProp="email"
                                            >
                                                {contactItems[0]?.value}
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-3 p-4 bg-white rounded-lg">
                                        <Phone className="h-5 w-5 text-blue-500" />
                                        <div>
                                            <p className="font-medium text-gray-900 text-sm">
                                                {contactItems[1]?.type}
                                            </p>
                                            <a
                                                href={`tel:${contactItems[1]?.value}`}
                                                className="text-blue-600 hover:text-blue-700 text-sm"
                                                itemProp="telephone"
                                            >
                                                {contactItems[1]?.value}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Note Section */}
                        <section aria-labelledby="nota-importante">
                            <div className="border-t border-gray-200 pt-6">
                                <p className="text-gray-700 leading-relaxed" itemProp="text">
                                    <strong>{sections.note?.strong}</strong>{" "}
                                    {sections.note?.content}
                                </p>
                            </div>
                        </section>
                    </div>

                    <footer className="text-center py-8 border-t border-gray-200 bg-gray-50">
                        <p className="text-gray-500">{slaData.footer?.copyright}</p>
                    </footer>
                </div>
            </div>
        </div>
    );
}
