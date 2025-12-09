'use client';

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();

    const validateForm = () => {
        const newErrors = {};

        // Validación de email
        if (!formData.email) {
            newErrors.email = 'El email es obligatorio';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'El formato del email no es válido';
        }

        // Validación de contraseña
        if (!formData.password) {
            newErrors.password = 'La contraseña es obligatoria';
        } else if (formData.password.length < 6) {
            newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (!validateForm()) {
            setIsSubmitting(false);
            return;
        }

        try {
            console.log('Login data:', formData);
            // Aquí iría tu lógica de login real
            // await loginUser(formData);

            // Simulamos una llamada a la API
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Redirigir después del login exitoso
            router.push('/dashboard');
        } catch (error) {
            console.error('Error en login:', error);
            setErrors({ submit: 'Error al iniciar sesión. Por favor, intenta de nuevo.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        // Limpiar error del campo cuando el usuario empiece a escribir
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        // Validar solo el campo que perdió el foco
        if (name === 'email' && formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
            setErrors({
                ...errors,
                email: 'El formato del email no es válido'
            });
        }
    };

    return (
        <div className="w-full flex justify-center py-20 px-4">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg sm:max-w-xl md:max-w-2xl p-8 md:p-10">

                {/* Título */}
                <div className="text-center mb-8 md:mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Iniciar Sesión
                    </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8 max-w-2xl mx-auto">

                    {/* Email */}
                    <div className="space-y-2 md:space-y-3">
                        <label htmlFor="email-login" className="block text-base md:text-lg font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            id="email-login"
                            name="email"
                            type="email"
                            placeholder="tu@email.com"
                            className={`w-full px-4 py-3 md:px-5 md:py-4 text-base md:text-lg border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                                errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
                            }`}
                            required
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm md:text-base">{errors.email}</p>
                        )}
                    </div>

                    {/* Contraseña */}
                    <div className="space-y-2 md:space-y-3">
                        <label htmlFor="password-login" className="block text-base md:text-lg font-medium text-gray-700">
                            Contraseña
                        </label>
                        <div className="relative">
                            <input
                                id="password-login"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Introduce tu contraseña"
                                className={`w-full px-4 py-3 md:px-5 md:py-4 text-base md:text-lg border-2 rounded-xl pr-14 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                                    errors.password ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                }`}
                                required
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 p-2 transition-colors"
                            >
                                {showPassword ? <EyeOff className="h-5 w-5 md:h-6 md:w-6" /> : <Eye className="h-5 w-5 md:h-6 md:w-6" />}
                            </button>
                        </div>
                        {errors.password && (
                            <p className="text-red-500 text-sm md:text-base">{errors.password}</p>
                        )}
                    </div>

                    {/* Forgot Password */}
                    <div className="flex justify-end">
                        <Link href="/forgot-password" className="text-blue-600 hover:text-blue-700 text-sm md:text-base font-medium transition-colors">
                            ¿Olvidaste tu contraseña?
                        </Link>
                    </div>

                    {/* Submit Error */}
                    {errors.submit && (
                        <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4">
                            <p className="text-red-700 text-sm md:text-base font-medium">{errors.submit}</p>
                        </div>
                    )}

                    {/* Botón */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors font-medium text-lg"
                    >
                        {isSubmitting ? 'Iniciando sesión...' : 'Iniciar Sesión'}
                    </button>

                    {/* Link Signup */}
                    <p className="text-center text-gray-600 text-sm md:text-base pt-4">
                        ¿No tienes cuenta?{" "}
                        <Link href="/auth/signup" className="text-blue-600 hover:text-blue-700 font-bold transition-colors">
                            Crear cuenta
                        </Link>
                    </p>

                </form>

                {/* Contact */}
                <div className="mt-10 pt-6 border-t border-gray-200">
                    <p className="text-center text-gray-500 text-xs md:text-base">
                        ¿Necesitas ayuda?{" "}
                        <Link href="/support" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
                            Contáctanos
                        </Link>
                    </p>
                </div>

            </div>
        </div>
    );
}