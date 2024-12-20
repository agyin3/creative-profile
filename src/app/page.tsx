import { Header } from "./_components/header";
import { Hero } from "./_sections/hero";
import { Music } from "./_sections/music";

export default function Home() {
    return (
        <div className="min-h-screen">
            <Header />
            <main className="h-dvh w-dvw">
                <Hero />
                <Music />
            </main>
        </div>
    );
}
