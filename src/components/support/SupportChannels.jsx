'use client';

import { Mail, Phone, Clock } from "lucide-react";
import { useTranslations } from "next-intl";

export default function SupportChannels() {
  const t = useTranslations('support.channels');
  
  const supportChannels = [
    {
      icon: <Mail className="h-6 w-6" aria-hidden="true" />,
      title: t('email_title'),
      description: t('email_description'),
      status: t('email_status'),
      statusColor: "bg-green-500",
      action: t('email_action'),
      link: t('email_link'),
      schemaType: "Email",
      responseTime: "P24H",
    },
    {
      icon: <Phone className="h-6 w-6" aria-hidden="true" />,
      title: t('phone_title'),
      description: t('phone_description'),
      status: t('phone_status'),
      statusColor: "bg-blue-500",
      action: t('phone_action'),
      link: t('phone_link'),
      schemaType: "Telephone",
      hours: "Mo-Fr 09:00-18:00",
    },
  ];

  return (
    <section className="py-16 bg-white" aria-labelledby="canales-soporte" itemScope itemType="https://schema.org/ServiceChannel">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 id="canales-soporte" className="text-3xl md:text-4xl font-bold mb-4">
            {t('section_title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.rich('section_description', {
              strong: (chunks) => <strong>{chunks}</strong>
            })}
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-5xl" role="list" aria-label={t('channels_aria_label')}>
            {supportChannels.map((channel, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-200 w-full"
                itemScope
                itemType="https://schema.org/ContactPoint"
                role="listitem"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10">
                    {channel.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-center mb-3" itemProp="name">{channel.title}</h3>
                
                <p className="text-gray-700 text-center mb-4 font-medium" itemProp={channel.schemaType === "Email" ? "email" : channel.schemaType === "Telephone" ? "telephone" : "url"}>
                  {channel.description}
                </p>

                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className={`w-3 h-3 rounded-full ${channel.statusColor} animate-pulse`} aria-hidden="true" />
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" aria-hidden="true" />
                    <span itemProp="hoursAvailable">{channel.status}</span>
                  </div>
                </div>

                <a
                  href={channel.link}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors font-medium text-lg text-center block"
                  aria-label={`${channel.action} - ${channel.title}`}
                  itemProp="url"
                >
                  {channel.action}
                </a>

                <meta itemProp="contactType" content={channel.title} />
                <meta itemProp="areaServed" content="Global" />
                {channel.responseTime && <meta itemProp="processingTime" content={channel.responseTime} />}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-4xl mx-auto border border-blue-100">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">{t('help_title')}</h3>
            <p className="text-gray-700 mb-4">
              {t.rich('help_description', {
                strong: (chunks) => <strong>{chunks}</strong>
              })}
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-left text-gray-700 max-w-2xl mx-auto">
              <li className="flex items-center gap-2">✅ {t('help_item1')}</li>
              <li className="flex items-center gap-2">✅ {t('help_item2')}</li>
              <li className="flex items-center gap-2">✅ {t('help_item3')}</li>
              <li className="flex items-center gap-2">✅ {t('help_item4')}</li>
              <li className="flex items-center gap-2">✅ {t('help_item5')}</li>
              <li className="flex items-center gap-2">✅ {t('help_item6')}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}