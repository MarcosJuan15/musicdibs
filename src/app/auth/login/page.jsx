import LoginForm from '@/components/auth/LoginForm';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

export const metadata = {
  title: 'Iniciar Sesión - Musicdibs',
  description: 'Inicia sesión en tu cuenta de Musicdibs',
};

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 bg-gray-50 flex items-center justify-center p-4">
        <LoginForm />
      </main>
      <Footer />
    </div>
  );
}