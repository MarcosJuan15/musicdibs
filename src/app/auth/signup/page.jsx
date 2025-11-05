import SignupForm from '@/components/auth/SignupForm';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

export const metadata = {
  title: 'Crear Cuenta - Musicdibs',
  description: 'Crea una nueva cuenta en Musicdibs',
};

export default function SignupPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 bg-gray-50 flex items-center justify-center p-4">
        <SignupForm />
      </main>
      <Footer />
    </div>
  );
}