'use client';

import { useState, useEffect } from "react";
import { Eye, EyeOff, Check, X, AlertCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignupForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState(0);
    const [touched, setTouched] = useState({
        username: false,
        email: false,
        password: false,
        confirmPassword: false
    });
    const router = useRouter();

    // Validaciones de contraseña en tiempo real
    const passwordValidations = {
        length: formData.password.length >= 8,
        uppercase: /[A-Z]/.test(formData.password),
        lowercase: /[a-z]/.test(formData.password),
        number: /[0-9]/.test(formData.password),
        symbol: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(formData.password)
    };

    // Calcular fuerza de contraseña
    useEffect(() => {
        let strength = 0;
        if (passwordValidations.length) strength += 20;
        if (passwordValidations.uppercase) strength += 20;
        if (passwordValidations.lowercase) strength += 20;
        if (passwordValidations.number) strength += 20;
        if (passwordValidations.symbol) strength += 20;
        setPasswordStrength(strength);
    }, [formData.password]);

    const validateForm = () => {
        const newErrors = {};

        // Validación de username
        if (!formData.username.trim()) {
            newErrors.username = "El nombre de usuario es obligatorio";
        } else if (formData.username.length < 3) {
            newErrors.username = "Mínimo 3 caracteres";
        } else if (!/^[a-zA-Z0-9_]+$/.test(formData.username)) {
            newErrors.username = "Solo letras, números y guiones bajos";
        }

        // Validación de email
        if (!formData.email) {
            newErrors.email = 'El email es obligatorio';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'El formato del email no es válido';
        }

        // Validación de contraseña
        if (!formData.password) {
            newErrors.password = 'La contraseña es obligatoria';
        } else if (formData.password.length < 8) {
            newErrors.password = 'Mínimo 8 caracteres';
        } else if (passwordStrength < 60) {
            newErrors.password = 'La contraseña es muy débil';
        }

        // Validación de confirmación de contraseña
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Confirma tu contraseña';
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Las contraseñas no coinciden';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Marcar todos los campos como tocados
        setTouched({
            username: true,
            email: true,
            password: true,
            confirmPassword: true
        });

        if (!validateForm()) {
            setIsSubmitting(false);
            return;
        }

        try {
            console.log('Signup data:', formData);
            // Aquí iría tu lógica de registro real
            // await registerUser(formData);

            // Simulamos una llamada a la API
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Redirigir después del registro exitoso
            router.push('/dashboard');
        } catch (error) {
            console.error('Error en registro:', error);
            setErrors({ submit: 'Error al crear la cuenta. Por favor, intenta de nuevo.' });
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
        setTouched(prev => ({ ...prev, [name]: true }));
        
        // Validar solo el campo que perdió el foco
        if (name === 'email' && formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
            setErrors({
                ...errors,
                email: 'El formato del email no es válido'
            });
        }
    };

    const getPasswordStrengthColor = () => {
        if (passwordStrength < 40) return 'bg-red-500';
        if (passwordStrength < 80) return 'bg-yellow-500';
        return 'bg-green-500';
    };

    const getPasswordStrengthText = () => {
        if (passwordStrength < 40) return 'Muy débil';
        if (passwordStrength < 80) return 'Moderada';
        return 'Fuerte';
    };

    return (
        <div className="w-full flex justify-center py-20 px-4">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg sm:max-w-xl md:max-w-2xl p-8 md:p-10">

                {/* Título */}
                <div className="text-center mb-8 md:mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Crear Cuenta
                    </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8 max-w-2xl mx-auto">

                    {/* Username */}
                    <div className="space-y-2 md:space-y-3">
                        <label htmlFor="username-signup" className="block text-base md:text-lg font-medium text-gray-700">
                            Nombre de Usuario
                        </label>
                        <input
                            id="username-signup"
                            name="username"
                            type="text"
                            placeholder="Elige un nombre de usuario"
                            className={`w-full px-4 py-3 md:px-5 md:py-4 text-base md:text-lg border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all ${
                                errors.username && touched.username ? 'border-red-500 bg-red-50' : 'border-gray-300'
                            }`}
                            required
                            value={formData.username}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.username && touched.username && (
                            <div className="flex items-center gap-2 text-red-500 text-sm md:text-base">
                                <AlertCircle className="h-4 w-4" />
                                {errors.username}
                            </div>
                        )}
                    </div>

                    {/* Email */}
                    <div className="space-y-2 md:space-y-3">
                        <label htmlFor="email-signup" className="block text-base md:text-lg font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            id="email-signup"
                            name="email"
                            type="email"
                            placeholder="tu@email.com"
                            className={`w-full px-4 py-3 md:px-5 md:py-4 text-base md:text-lg border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all ${
                                errors.email && touched.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
                            }`}
                            required
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.email && touched.email && (
                            <div className="flex items-center gap-2 text-red-500 text-sm md:text-base">
                                <AlertCircle className="h-4 w-4" />
                                {errors.email}
                            </div>
                        )}
                    </div>

                    {/* Contraseña */}
                    <div className="space-y-3 md:space-y-4">
                        <label htmlFor="password-signup" className="block text-base md:text-lg font-medium text-gray-700">
                            Contraseña
                        </label>
                        <div className="relative">
                            <input
                                id="password-signup"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Crea una contraseña segura"
                                className={`w-full px-4 py-3 md:px-5 md:py-4 text-base md:text-lg border-2 rounded-xl pr-14 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all ${
                                    errors.password && touched.password ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                }`}
                                required
                                value={formData.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 p-2 transition-colors"
                            >
                                {showPassword ? <EyeOff className="h-5 w-5 md:h-6 md:w-6" /> : <Eye className="h-5 w-5 md:h-6 md:w-6" />}
                            </button>
                        </div>

                        {/* Barra de fortaleza de contraseña */}
                        {formData.password && (
                            <div className="space-y-2">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-600">Fortaleza de la contraseña:</span>
                                    <span className={`font-medium ${
                                        passwordStrength < 40 ? 'text-red-500' : 
                                        passwordStrength < 80 ? 'text-yellow-500' : 'text-green-500'
                                    }`}>
                                        {getPasswordStrengthText()}
                                    </span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div 
                                        className={`h-2 rounded-full transition-all duration-300 ${getPasswordStrengthColor()}`}
                                        style={{ width: `${passwordStrength}%` }}
                                    ></div>
                                </div>
                            </div>
                        )}

                        {/* Validaciones de contraseña con iconos */}
                        {formData.password && (
                            <div className="space-y-2 text-sm">
                                {Object.entries(passwordValidations).map(([key, isValid]) => (
                                    <div key={key} className="flex items-center gap-2">
                                        {isValid ? (
                                            <Check className="h-4 w-4 text-green-500" />
                                        ) : (
                                            <X className="h-4 w-4 text-red-500" />
                                        )}
                                        <span className={isValid ? 'text-green-600' : 'text-gray-500'}>
                                            {key === 'length' && 'Mínimo 8 caracteres'}
                                            {key === 'uppercase' && 'Al menos una mayúscula'}
                                            {key === 'lowercase' && 'Al menos una minúscula'}
                                            {key === 'number' && 'Al menos un número'}
                                            {key === 'symbol' && 'Al menos un símbolo'}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}

                        {errors.password && touched.password && (
                            <div className="flex items-center gap-2 text-red-500 text-sm md:text-base">
                                <AlertCircle className="h-4 w-4" />
                                {errors.password}
                            </div>
                        )}
                    </div>

                    {/* Confirmar Contraseña */}
                    <div className="space-y-2 md:space-y-3">
                        <label htmlFor="confirm-password" className="block text-base md:text-lg font-medium text-gray-700">
                            Confirmar Contraseña
                        </label>
                        <div className="relative">
                            <input
                                id="confirm-password"
                                name="confirmPassword"
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Confirma tu contraseña"
                                className={`w-full px-4 py-3 md:px-5 md:py-4 text-base md:text-lg border-2 rounded-xl pr-14 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all ${
                                    errors.confirmPassword && touched.confirmPassword ? 'border-red-500 bg-red-50' : 
                                    formData.confirmPassword && formData.password === formData.confirmPassword ? 'border-green-500 bg-green-50' : 'border-gray-300'
                                }`}
                                required
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 p-2 transition-colors"
                            >
                                {showConfirmPassword ? <EyeOff className="h-5 w-5 md:h-6 md:w-6" /> : <Eye className="h-5 w-5 md:h-6 md:w-6" />}
                            </button>
                            
                            {/* Check verde cuando las contraseñas coinciden */}
                            {formData.confirmPassword && formData.password === formData.confirmPassword && (
                                <Check className="absolute right-12 top-1/2 -translate-y-1/2 h-5 w-5 text-green-500" />
                            )}
                        </div>
                        {errors.confirmPassword && touched.confirmPassword && (
                            <div className="flex items-center gap-2 text-red-500 text-sm md:text-base">
                                <AlertCircle className="h-4 w-4" />
                                {errors.confirmPassword}
                            </div>
                        )}
                    </div>

                    {/* Submit Error */}
                    {errors.submit && (
                        <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4">
                            <div className="flex items-center gap-2 text-red-700 text-sm md:text-base font-medium">
                                <AlertCircle className="h-5 w-5" />
                                {errors.submit}
                            </div>
                        </div>
                    )}

                    {/* Botón */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-3 md:py-4 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-base md:text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                        {isSubmitting ? (
                            <div className="flex items-center justify-center gap-2">
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                Creando cuenta...
                            </div>
                        ) : (
                            'Crear Cuenta'
                        )}
                    </button>

                    {/* Link Login */}
                    <div className="text-center pt-4">
                        <p className="text-gray-600 text-sm md:text-base">
                            ¿Ya tienes cuenta?{" "}
                            <Link href="/auth/login" className="text-pink-500 hover:text-pink-600 font-bold transition-colors">
                                Iniciar sesión
                            </Link>
                        </p>
                    </div>

                    {/* Términos y Condiciones */}
                    <div className="text-center pt-4">
                        <p className="text-gray-500 text-xs md:text-sm">
                            Al crear una cuenta, aceptas nuestros{" "}
                            <Link href="/terms-and-conditions" className="text-pink-500 hover:text-pink-600 transition-colors">
                                Términos y Condiciones
                            </Link>{" "}
                            y{" "}
                            <Link href="/privacy-policy" className="text-pink-500 hover:text-pink-600 transition-colors">
                                Política de Privacidad
                            </Link>
                        </p>
                    </div>

                </form>

                {/* Contact */}
                <div className="mt-10 pt-6 border-t border-gray-200">
                    <p className="text-center text-gray-500 text-xs md:text-base">
                        ¿Necesitas ayuda?{" "}
                        <Link href="/support" className="text-pink-500 hover:text-pink-600 font-medium transition-colors">
                            Contáctanos
                        </Link>
                    </p>
                </div>

            </div>
        </div>
    );
}