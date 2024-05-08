import { db } from "@/server/db";
import { monsters } from "@/server/db/schema";
import Image from "next/image";
import Link from "next/link";
import { Caveat } from "next/font/google";
import { Kaushan_Script } from "next/font/google";

const kaushanScript = Kaushan_Script({
    subsets: ["latin"],
    weight: "400",
});

const caveat = Caveat({
    subsets: ["latin"],
});


export default async function MonsterPage({
  params,
}: {
  params: { monster: string };
}) {
  const monster = await db.query.monsters.findFirst({
    where: (monsters, { eq }) => eq(monsters.shortName, params.monster),
  });
  if (!monster) {
    return <div>Not found</div>;
  }
return (
  <main className="flex px-4">
    <div
      className="relative flex h-screen w-full items-center justify-center"
      style={{
        backgroundImage: "url(/paperBG.png)",
        backgroundSize: "50dvw 100dvh",
      }}
    >
      <div className="relative h-[90dvh] w-[90%]">
        <Image src={monster.image} alt={monster.name} fill style={{objectFit:"contain"}} />
      </div>
    </div>
    <div
      className="h-screen w-full"
      style={{
        backgroundImage: "url(/paperBG.png)",
        backgroundSize: "50dvw 100dvh",
      }}
    >
      <div className="m-5 px-10 text-justify flex flex-col items-center justify-center gap-3">
        <h1 className={`text-6xl ${kaushanScript.className}`}> 
          {monster.name}
        </h1>
        <h2 className={`text-4xl opacity-50 ${kaushanScript.className}`}>{monster.fullName}</h2>
        <p className={`text-4xl ${caveat.className}`}>{monster.paragraphOne}</p>
        <p className={`text-4xl ${caveat.className}`}>{monster.paragraphTwo}</p>
      </div>
    </div>
  </main>
);
}
