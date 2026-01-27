import { createNavigation } from 'next-intl/navigation';

export const locales = ['es', 'en', 'pt'];

export const { Link, redirect, usePathname, useRouter } = createNavigation({
  locales
});