'use client';

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function SupportTicket() {
  const t = useTranslations('support.ticket');
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    priority: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="py-16 bg-gray-50" aria-labelledby="crear-ticket">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 id="crear-ticket" className="text-3xl font-bold text-center mb-12">
            {t('section_title')}
          </h2>

          <div className="border-0 shadow-lg rounded-xl bg-white p-8" itemScope itemType="https://schema.org/ContactPage">
            <h3 className="text-xl font-semibold mb-2">{t('form_title')}</h3>
            <p className="text-gray-600 mb-6">
              {t('form_description')}
            </p>

            <form onSubmit={handleSubmit} className="space-y-6" itemScope itemType="https://schema.org/ContactPoint">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    {t('name_label')} *
                  </label>
                  <input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder={t('name_placeholder')}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    itemProp="name"
                    aria-required="true"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    {t('email_label')} *
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder={t('email_placeholder')}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    itemProp="email"
                    aria-required="true"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="category" className="text-sm font-medium">
                    {t('category_label')} *
                  </label>
                  <select
                    id="category"
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                    aria-required="true"
                  >
                    <option value="">{t('category_placeholder')}</option>
                    <option value="registro">{t('category_option1')}</option>
                    <option value="distribucion">{t('category_option2')}</option>
                    <option value="royalties">{t('category_option3')}</option>
                    <option value="tecnico">{t('category_option4')}</option>
                    <option value="cuenta">{t('category_option5')}</option>
                    <option value="otros">{t('category_option6')}</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="priority" className="text-sm font-medium">
                    {t('priority_label')} *
                  </label>
                  <select
                    id="priority"
                    value={formData.priority}
                    onChange={(e) =>
                      setFormData({ ...formData, priority: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                    aria-required="true"
                  >
                    <option value="">{t('priority_placeholder')}</option>
                    <option value="baja">{t('priority_option1')}</option>
                    <option value="media">{t('priority_option2')}</option>
                    <option value="alta">{t('priority_option3')}</option>
                    <option value="urgente">{t('priority_option4')}</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  {t('subject_label')} *
                </label>
                <input
                  id="subject"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  placeholder={t('subject_placeholder')}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  aria-required="true"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  {t('message_label')} *
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder={t('message_placeholder')}
                  rows={6}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  aria-required="true"
                  itemProp="description"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg px-4 py-3 font-medium bg-gradient-to-r from-blue-600 to-pink-600 hover:opacity-90 transition text-white"
                aria-label={t('submit_aria_label')}
              >
                {t('submit_button')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}