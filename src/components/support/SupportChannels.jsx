import { Mail, Phone } from "lucide-react";

export default function SupportChannels() {
  const supportChannels = [
    {
      icon: <Mail className="h-6 w-6" aria-hidden="true" />,
      title: "Email",
      description: "info@musicdibs.com",
      status: "24-48h",
      statusColor: "bg-blue-500",
      action: "Enviar Email",
      link: "mailto:info@musicdibs.com",
      schemaType: "Email",
    },
    {
      icon: <Phone className="h-6 w-6" aria-hidden="true" />,
      title: "Teléfono",
      description: "+34 900 123 456",
      status: "Lun-Vie 9:00-18:00",
      statusColor: "bg-orange-500",
      action: "Llamar",
      link: "tel:+34900123456",
      schemaType: "Telephone",
    },
  ];

  return (
    <section className="py-16" aria-labelledby="canales-atencion">
      <div className="container mx-auto px-4">
        <h2 id="canales-atencion" className="text-3xl font-bold text-center mb-12">
          Canales de Atención
        </h2>
        <div className="flex flex-wrap justify-center gap-6" role="list" aria-label="Canales de contacto de soporte">
          {supportChannels.map((channel, index) => (
            <div
              key={index}
              className="w-full max-w-md bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 text-center border border-gray-200"
              itemScope
              itemType="https://schema.org/ContactPoint"
              role="listitem"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-blue-500/20 to-pink-500/20">
                  {channel.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-1" itemProp="name">{channel.title}</h3>
              <p className="text-gray-600 mb-4" itemProp={channel.schemaType === "Email" ? "email" : "telephone"}>
                {channel.description}
              </p>

              <div className="flex items-center justify-center gap-2 mb-4">
                <div
                  className={`w-2 h-2 rounded-full ${channel.statusColor}`}
                  aria-hidden="true"
                />
                <span className="text-sm text-gray-500" itemProp="hoursAvailable">
                  {channel.status}
                </span>
              </div>

              <a
                href={channel.link}
                className="w-full block border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-50 transition"
                aria-label={`${channel.action} a ${channel.description}`}
                itemProp="url"
              >
                {channel.action}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}