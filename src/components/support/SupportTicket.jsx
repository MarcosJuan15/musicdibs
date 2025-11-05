'use client';

import { useState } from "react";

export default function SupportTicket() {
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
    // Aquí iría la lógica para enviar el ticket
    console.log("Ticket enviado:", formData);
    // Podrías añadir aquí una llamada a tu API
  };

  return (
    <section className="py-16 bg-gray-50" aria-labelledby="crear-ticket">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 id="crear-ticket" className="text-3xl font-bold text-center mb-12">
            Crear Ticket de Soporte
          </h2>

          <div className="border-0 shadow-lg rounded-xl bg-white p-8" itemScope itemType="https://schema.org/ContactPage">
            <h3 className="text-xl font-semibold mb-2">Describe tu consulta</h3>
            <p className="text-gray-600 mb-6">
              Completa el formulario y nuestro equipo te responderá lo antes posible
            </p>

            <form onSubmit={handleSubmit} className="space-y-6" itemScope itemType="https://schema.org/ContactPoint">
              {/* Nombre y Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nombre Completo *
                  </label>
                  <input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Tu nombre"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    itemProp="name"
                    aria-required="true"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="tu@email.com"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    itemProp="email"
                    aria-required="true"
                  />
                </div>
              </div>

              {/* Categoría y Prioridad */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="category" className="text-sm font-medium">
                    Categoría *
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
                    <option value="">Selecciona una categoría</option>
                    <option value="registro">Registro de Obras</option>
                    <option value="distribucion">Distribución</option>
                    <option value="royalties">Royalties y Pagos</option>
                    <option value="tecnico">Problema Técnico</option>
                    <option value="cuenta">Gestión de Cuenta</option>
                    <option value="otros">Otros</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="priority" className="text-sm font-medium">
                    Prioridad *
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
                    <option value="">Selecciona prioridad</option>
                    <option value="baja">Baja</option>
                    <option value="media">Media</option>
                    <option value="alta">Alta</option>
                    <option value="urgente">Urgente</option>
                  </select>
                </div>
              </div>

              {/* Asunto */}
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Asunto *
                </label>
                <input
                  id="subject"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  placeholder="Resumen de tu consulta"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  aria-required="true"
                />
              </div>

              {/* Mensaje */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Describe detalladamente tu consulta o problema..."
                  rows={6}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  aria-required="true"
                  itemProp="description"
                />
              </div>

              {/* Botón */}
              <button
                type="submit"
                className="w-full rounded-lg px-4 py-3 font-medium bg-gradient-to-r from-blue-600 to-pink-600 hover:opacity-90 transition text-white"
                aria-label="Enviar ticket de soporte"
              >
                Enviar Ticket de Soporte
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}