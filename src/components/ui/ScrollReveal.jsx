'use client';

import { useEffect, useRef, useState } from "react";

export default function ScrollReveal({
    children,
    delay = 0,
    threshold = 0.1,
    direction = 'up',
    duration = 700,
    distance = 50,
    className = '',
    once = true
}) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);

    // Configuración de transformaciones por dirección
    const getTransform = () => {
        if (!isVisible) {
            switch (direction) {
                case 'up':
                    return `translateY(${distance}px)`;
                case 'down':
                    return `translateY(-${distance}px)`;
                case 'left':
                    return `translateX(${distance}px)`;
                case 'right':
                    return `translateX(-${distance}px)`;
                case 'fade':
                    return 'translateY(0)';
                default:
                    return `translateY(${distance}px)`;
            }
        }
        return 'translateY(0) translateX(0)';
    };

    useEffect(() => {
        const element = ref.current;
        if (!element || (once && hasAnimated)) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const timer = setTimeout(() => {
                        setIsVisible(true);
                        setHasAnimated(true);
                        
                        // Desconectar si es solo una vez
                        if (once) {
                            observer.unobserve(element);
                        }
                    }, delay);

                    return () => clearTimeout(timer);
                } else if (!once) {
                    // Reset para animaciones múltiples
                    setIsVisible(false);
                }
            },
            {
                threshold,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
            observer.disconnect();
        };
    }, [delay, threshold, once, hasAnimated]);

    // Estilos dinámicos
    const styles = {
        transform: getTransform(),
        opacity: isVisible ? 1 : 0,
        transition: `all ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`,
        willChange: 'transform, opacity'
    };

    return (
        <div
            ref={ref}
            style={styles}
            className={`scroll-reveal ${className}`}
            role="presentation"
            aria-live="polite"
            aria-atomic="true"
        >
            {children}
        </div>
    );
}

// Componente adicional para secciones completas
export function ScrollRevealSection({
    children,
    id,
    ariaLabel,
    semanticTag = 'section',
    ...scrollRevealProps
}) {
    const Tag = semanticTag;

    return (
        <Tag
            id={id}
            aria-label={ariaLabel}
            role={semanticTag === 'div' ? 'region' : undefined}
        >
            <ScrollReveal {...scrollRevealProps}>
                {children}
            </ScrollReveal>
        </Tag>
    );
}

// Hook personalizado para usar ScrollReveal
export function useScrollReveal(config = {}) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(element);
                }
            },
            {
                threshold: config.threshold || 0.1,
                rootMargin: config.rootMargin || '0px 0px -50px 0px'
            }
        );

        observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
            observer.disconnect();
        };
    }, [config.threshold, config.rootMargin]);

    return { ref, isVisible };
}