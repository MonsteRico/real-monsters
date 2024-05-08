import { db } from "@/server/db";
import { monsters, selectMonster } from "@/server/db/schema";
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

async function generateStaticParams() {
  const monsters = await db.query.monsters.findMany();
  return monsters.map((monster) => ({
    params: { monster: monster.shortName },
  }));
}

export default async function MonsterPage({
  monster,
}: {
  monster: selectMonster;
}) {
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
          <Image
            src={monster.image}
            alt={monster.name}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
      <div
        className="h-screen w-full"
        style={{
          backgroundImage: "url(/paperBG.png)",
          backgroundSize: "50dvw 100dvh",
        }}
      >
        <div className="m-5 flex flex-col items-center justify-center gap-3 px-10 text-justify">
          <h1 className={`text-6xl ${kaushanScript.className}`}>
            {monster.name}
          </h1>
          <h2 className={`text-4xl opacity-50 ${kaushanScript.className}`}>
            {monster.fullName}
          </h2>
          <p className={`text-4xl ${caveat.className}`}>
            {monster.paragraphOne}
          </p>
          <p className={`text-4xl ${caveat.className}`}>
            {monster.paragraphTwo}
          </p>
        </div>
      </div>
    </main>
  );
}
