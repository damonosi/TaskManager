import GreetingsMessage from "@/components/Home/GreetingsMessage";
import ArrowsDown from "@/components/svgs/ArrowsDown";

export default async function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center gap-10 ">
      <div className="relative w-full flex flex-col min-h-screen items-center z-10">
        <GreetingsMessage />
      </div>
      <div
        className="w-full flex justify-center   min-h-screen px-5  z-20"
        id="ulitimul-proiect-lucrat"
      >
        <div className="bg-white  w-1/2 flex flex-col items-center -mt-56 rounded-t-lg pt-6 ">
          <h1 className="text-[#003249]">Ultimul proiect la care ai lucrat</h1>
          <ArrowsDown />
        </div>
      </div>
    </section>
  );
}
