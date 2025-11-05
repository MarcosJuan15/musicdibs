import ResumenContent from "./sections/ResumenContent";
import RegistrarObraContent from "./sections/RegistrarObraContent";
import PromocionarContent from "./sections/PromocionarContent";
import NFTContent from "./sections/NFTContent";
import VerificarContent from "./sections/VerificarContent";
import TiendaContent from "./sections/TiendaContent";
import ConfiguracionContent from "./sections/ConfiguracionContent";

export default function MainContent({ activeSection }) {
    const user = {
        name: "Juan",
        credits: 15,
        email: "juan.perez@email.com",
        verified: true
    };

    const renderContent = () => {
        switch (activeSection) {
            case "resumen":
                return <ResumenContent user={user} />;
            case "registrar":
                return <RegistrarObraContent />;
            case "promocionar":
                return <PromocionarContent />;
            case "nft":
                return <NFTContent />;
            case "verificar":
                return <VerificarContent />;
            case "tienda":
                return <TiendaContent user={user} />;
            case "configuracion":
                return <ConfiguracionContent user={user} />;
            default:
                return <ResumenContent user={user} />;
        }
    };

    return (
        <main className="flex-1 p-6">
            {renderContent()}
        </main>
    );
}