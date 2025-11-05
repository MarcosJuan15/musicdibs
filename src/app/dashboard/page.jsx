import DashboardLayout from '@/components/dashboard/DashboardLayout';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

export default function Dashboard() {
    return (
        <>
            <Navbar />
            <DashboardLayout />
            <Footer />
        </>
    );
}