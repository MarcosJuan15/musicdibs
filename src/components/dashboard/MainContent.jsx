// components/dashboard/MainContent.jsx
import OverviewContent from "./sections/OverviewContent";
import RegisterWorkContent from "./sections/RegisterWorkContent";
import PromoteContent from "./sections/PromoteContent";
import NFTContent from "./sections/NFTContent";
import VerifyContent from "./sections/VerifyContent";
import StoreContent from "./sections/StoreContent";
import SettingsContent from "./sections/SettingsContent";

export default function MainContent({ activeSection }) {
    const user = {
        name: "Marcos",
        credits: 15,
        email: "martospradosmarcos@email.com",
        verified: true,
        worksRegistered: 8,
        nftsCreated: 3,
        verifications: 12
    };

    const renderContent = () => {
        switch (activeSection) {
            case "overview":
                return <OverviewContent user={user} />;
            case "register":
                return <RegisterWorkContent />;
            case "promote":
                return <PromoteContent />;
            case "nft":
                return <NFTContent />;
            case "verify":
                return <VerifyContent />;
            case "store":
                return <StoreContent user={user} />;
            case "settings":
                return <SettingsContent user={user} />;
            default:
                return <OverviewContent user={user} />;
        }
    };

    return (
        <main 
            className="flex-1 p-4 sm:p-6 lg:p-8 overflow-auto"
            role="main"
            aria-labelledby="main-content-title"
        >
            <h1 id="main-content-title" className="sr-only">
                Musicdibs Dashboard - {activeSection}
            </h1>

            <div className="max-w-7xl mx-auto">
                {renderContent()}
            </div>
        </main>
    );
}