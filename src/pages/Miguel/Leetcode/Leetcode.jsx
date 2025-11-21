import { Link } from "react-router-dom";
import HeadingBar from "../../../components/HeadingBar";

const modules = import.meta.glob("../Problems/*/*/*.js", { eager: true });

export default function Leetcode() {
  const problems = Object.entries(modules)
    .map(([path, module]) => {
      const parts = path.split("/");

      const filename = parts[parts.length - 1];
      const difficulty = parts[parts.length - 2];
      const type = parts[parts.length - 3];

      const numberMatch = filename.match(/^\d+/);
      const nameMatch = filename.match(/^\d+-(.+)\.js$/);

      if (!numberMatch || !nameMatch) return null;

      return {
        id: `${numberMatch[0]}-${nameMatch[1]}`,
        number: numberMatch[0],
        name: nameMatch[1],
        type,
        difficulty,
      };
    })
    .filter(Boolean);

  problems.sort((a, b) => Number(a.number) - Number(b.number));

  return (
    <div className="flex flex-col items-center h-full">
      <HeadingBar />
      <h1>something to keep me in check</h1>

      <div className="flex mt-3 items-center justify-center text-center text-xl font-bold  text-white bg-clip-text w-[400px]">
        <ul className="space-y-4">
          {problems.map((p) => (
            <li key={p.id} className="border p-3 rounded-md bg-[#111]">
              <Link to={`/miguel/leetcode/${p.id}`} className="text-cyan-300">
                #{p.number} — {p.name.replace(/-/g, " ").toUpperCase()}
              </Link>

              <div className="text-sm text-gray-400">
                {p.type} • {p.difficulty}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
