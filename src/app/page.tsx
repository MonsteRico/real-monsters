import { db } from "@/server/db";
import Link from "next/link";

export default async function HomePage() {
  const monsters = await db.query.monsters.findMany();

  return (
    <main className="">
      {monsters.map((monster) => (
        <div
          key={monster.id}
          className="flex flex-col items-center justify-center"
        >
          <Link href={`/${monster.shortName}`} className="text-lg">{monster.name}</Link>
        </div>
      ))}
    </main>
  );
}
