import { Header } from "@/app/_components/header";
import { TheHighLightersHero } from "./_sections/hero";
import { highlightersNavLinks } from "@/app/_components/header/data";

function TheHighLighters() {
    return (
        <div className="min-h-screen">
            <Header navLinks={highlightersNavLinks} />
            <main className="h-dvh w-dvw">
                <TheHighLightersHero />
            </main>
        </div>
    );
}

export default TheHighLighters;
