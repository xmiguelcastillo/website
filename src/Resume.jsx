import { useEffect, useRef } from "react";
import HeadingBar from "./components/HeadingBar";

function PDFViewer() {
  const pdfUrl = "Miguel.pdf";

  return (
    <div className="flex flex-col items-center bg-[#101010] min-h-screen">
      <HeadingBar />
      <div className="flex justify-center w-full max-w-5xl p-4">
        <iframe
          className="bg-[#00ffd7] border border-white rounded-md 
                 w-[100%] h-[55vh] sm:w-[400px] sm:h-[550px] 
                 md:w-[450px] md:h-[600px] lg:w-[500px] lg:h-[700px]"
          src={pdfUrl}
          title="PDF Viewer"
        />
      </div>
    </div>
  );
}

export default PDFViewer;
