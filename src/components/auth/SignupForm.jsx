'use client';

import { useState, useEffect } from "react";
import { Eye, EyeOff, Check, X, AlertCircle } from "lucide-react";
import { Link } from "@/navigation";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export default function SignupForm() {
    const t = useTranslations('auth.signup');
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
            newErrors.username = t('errors.username_required');
        } else if (formData.username.length < 3) {
            newErrors.username = t('errors.username_min_length');
        } else if (!/^[a-zA-Z0-9_]+$/.test(formData.username)) {
            newErrors.username = t('errors.username_invalid');
        }

        // Validación de email
        if (!formData.email) {
            newErrors.email = t('errors.email_required');
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = t('errors.email_invalid');
        }

        // Validación de contraseña
        if (!formData.password) {
            newErrors.password = t('errors.password_required');
        } else if (formData.password.length < 8) {
            newErrors.password = t('errors.password_min_length');
        } else if (passwordStrength < 60) {
            newErrors.password = t('errors.password_weak');
        }

        // Validación de confirmación de contraseña
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = t('errors.confirm_password_required');
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = t('errors.password_mismatch');
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
            // Simulamos una llamada a la API
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Redirigir después del registro exitoso
            router.push('/dashboard');
        } catch (error) {
            console.error('Error en registro:', error);
            setErrors({ submit: t('errors.submit') });
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
                email: t('errors.email_invalid')
            });
        }
    };

    const getPasswordStrengthColor = () => {
        if (passwordStrength < 40) return 'bg-red-500';
        if (passwordStrength < 80) return 'bg-yellow-500';
        return 'bg-green-500';
    };

    const getPasswordStrengthText = () => {
        if (passwordStrength < 40) return t('password_strength.very_weak');
        if (passwordStrength < 80) return t('password_strength.moderate');
        return t('password_strength.strong');
    };

    return (
        <div className="w-full flex justify-center py-20 px-4">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg sm:max-w-xl md:max-w-2xl p-8 md:p-10">

                {/* Título */}
                <div className="text-center mb-8 md:mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        {t('title')}
                    </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8 max-w-2xl mx-auto">

                    {/* Username */}
                    <div className="space-y-2 md:space-y-3">
                        <label htmlFor="username-signup" className="block text-base md:text-lg font-medium text-gray-700">
                            {t('form.username')}
                        </label>
                        <input
                            id="username-signup"
                            name="username"
                            type="text"
                            placeholder={t('form.username_placeholder')}
                            className={`w-full px-4 py-3 md:px-5 md:py-4 text-base md:text-lg border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
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
                            {t('form.email')}
                        </label>
                        <input
                            id="email-signup"
                            name="email"
                            type="email"
                            placeholder={t('form.email_placeholder')}
                            className={`w-full px-4 py-3 md:px-5 md:py-4 text-base md:text-lg border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
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
                            {t('form.password')}
                        </label>
                        <div className="relative">
                            <input
                                id="password-signup"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                placeholder={t('form.password_placeholder')}
                                className={`w-full px-4 py-3 md:px-5 md:py-4 text-base md:text-lg border-2 rounded-xl pr-14 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
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
                                    <span className="text-gray-600">{t('password_strength.label')}:</span>
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
                                            {t(`password_strength.${key}`)}
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
                            {t('form.confirm_password')}
                        </label>
                        <div className="relative">
                            <input
                                id="confirm-password"
                                name="confirmPassword"
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder={t('form.confirm_password_placeholder')}
                                className={`w-full px-4 py-3 md:px-5 md:py-4 text-base md:text-lg border-2 rounded-xl pr-14 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
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
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors font-medium text-lg"
                    >
                        {isSubmitting ? (
                            <div className="flex items-center justify-center gap-2">
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                {t('form.submitting')}
                            </div>
                        ) : (
                            t('form.submit')
                        )}
                    </button>

                    {/* Link Login */}
                    <div className="text-center pt-4">
                        <p className="text-gray-600 text-sm md:text-base">
                            {t('form.have_account')}{" "}
                            <Link href="/auth/login" className="text-blue-600 hover:text-blue-700 font-bold transition-colors">
                                {t('form.login')}
                            </Link>
                        </p>
                    </div>

                    {/* Términos y Condiciones */}
                    <div className="text-center pt-4">
                        <p className="text-gray-500 text-xs md:text-sm">
                            {t('form.terms_text')}{" "}
                            <Link href="/terms-and-conditions" className="text-blue-600 hover:text-blue-700 transition-colors">
                                {t('form.terms_link')}
                            </Link>{" "}
                            {t('form.and')}{" "}
                            <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-700 transition-colors">
                                {t('form.privacy_link')}
                            </Link>
                        </p>
                    </div>

                </form>

                {/* Contact */}
                <div className="mt-10 pt-6 border-t border-gray-200">
                    <p className="text-center text-gray-500 text-xs md:text-base">
                        {t('help.need_help')}{" "}
                        <Link href="/support" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
                            {t('help.contact_us')}
                        </Link>
                    </p>
                </div>

            </div>
        </div>
    );
}