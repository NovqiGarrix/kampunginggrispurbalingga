import { Header, Hero, OfflineClass, OnlineClass, TestEnglishLevel, WhyUs, JoinUs, Footer, Copyright } from "@/components";

export default function Home() {
  return (
    <main className="flex flex-col items-center relative">

      <Header />

      <Hero />

      <OfflineClass />

      <OnlineClass />

      <TestEnglishLevel />

      <WhyUs />

      <JoinUs />

      <Footer />

      <Copyright />

    </main>
  );
}
