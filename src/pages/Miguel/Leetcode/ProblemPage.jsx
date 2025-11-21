import { useParams } from "react-router-dom";
import CodeBlock from "../components/CodeBlock";
import HeadingBar from "../../../components/HeadingBar";

const modules = import.meta.glob("../Problems/**/*.js", { eager: true });

export default function ProblemPage() {
  const { problemId } = useParams();

  const key = Object.keys(modules).find((path) =>
    path.endsWith(`${problemId}.js`),
  );

  const file = modules[key].default;

  if (!file) {
    return <div className="text-white p-5 text-xl">No file for problem</div>;
  }

  const parts = key.split("/");
  const str = parts[4];
  const data = {
    type: parts[2],
    difficulty: parts[3],
    number: String(str.match(/\d+/g)),
    name: parts[4].match(/^\d+-(.+)\.js$/)[1],
    code: file.code,
  };
  let color = "";

  if (data.difficulty == "easy") {
    color = "#1cbaba";
  } else if (data.difficulty == "medium") {
    color = "#ffb700";
  } else {
    color = "#f63737";
  }

  return (
    <div className="flex flex-col items-center">
      <HeadingBar />

      <div className="text-xl  text-white bg-clip-text">
        <span className="mt-2  text-yellow-300 text-sm"></span>
        <h1>{`Name: ${data.number} ${data.name.toUpperCase()}`}</h1>
        <h1>Topic: {data.type}</h1>
        <div className="flex flex-row gap-3">
          <h1> Difficulty: </h1>
          <h1 className={`text-[${color}]`}>
            {" "}
            {data.difficulty.charAt(0).toUpperCase() + data.difficulty.slice(1)}
          </h1>
        </div>

        <CodeBlock codeBlock={data.code} filename={data.name} />

        <pre className="bg-[#111111] mt-5 p-4 rounded overflow-x-auto text-sm"></pre>
      </div>
    </div>
  );
}
