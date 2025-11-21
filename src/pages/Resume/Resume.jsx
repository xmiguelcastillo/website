import HeadingBar from "../../components/HeadingBar";

export default function Resume() {
  const pdfUrl = "Miguel.pdf";

  return (
    <div className="flex flex-col  items-center  min-h-screen">
      <HeadingBar />
      <iframe
        style={{ display: "block" }}
        className="scale-[70%] lg:scale-[100%] lg:w-[600px] w-[600px] h-[800px] md:-mt-1 sm:-mt-1 -mt-32"
        src={pdfUrl}
        title="PDF Viewer"
      />
    </div>
  );
}
