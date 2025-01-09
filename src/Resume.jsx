import { useEffect, useRef } from "react";
import HeadingBar from "./components/HeadingBar";

function PDFViewer() {
  const pdfUrl = "Miguel.pdf";

  return (
    <div className="flex flex-col items-center bg-[#101010] h-full min-h-screen">
      <HeadingBar />
      <div className="flex justify-center w-full max-w-5xl p-4">
        <iframe
          className="bg-[#00ffd7] border border-white rounded-md"
          src={pdfUrl}
          style={{
            width: "65%",
            aspectRatio: "1 / 1.414", // Maintain A4 aspect ratio (approx. 1:1.414)
          }}
          title="PDF Viewer"
        />
      </div>
    </div>
  );
}

export default PDFViewer;
