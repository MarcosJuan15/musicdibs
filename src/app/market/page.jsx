import MarketHero from '@/components/market/MarketHero';
import MarketContent from '@/components/market/MarketContent';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

export default function Market() {
    return (
        <>
            <Navbar />
            <MarketHero />
            <MarketContent />
            <Footer />
        </>
    )
}