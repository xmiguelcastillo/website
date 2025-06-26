import React, { useState } from "react";
import HeadingBar from "../../../components/HeadingBar";
import astroboy from "../../../assets/astroboy.jpg";
import astroboy_pink from "../../../assets/astro_boy_pink.png";
import miko from "../../../assets/miko.jpeg";
import grey_miko from "../../../assets/grey_image.png";
import blurred_miko from "../../../assets/blurred_image.png";
import PythonCode from "../../../components/CodeBlock/PythonCode";
import editorCode from "./ImageEditorCode.js";

function ImageEditorPage() {
  const [preview, setPreview] = useState(null);
  const [rotatedImage, setRotatedImage] = useState(null);
  const [coloredImage, setColoredImage] = useState(null);
  const [blurredImage, setBlurredImage] = useState(null);
  const [greyscaledImage, setGreyScaledImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [customMessage, setCustomMessage] = useState([]);
  const [intensity, setIntenstiy] = useState("");
  const [r, setR] = useState("");
  const [g, setG] = useState("");
  const [b, setB] = useState("");

  const handleImageUpload = () => {
    if (!selectedFile) {
      console.error("No file selected!");
      return;
    }

    setPreview(URL.createObjectURL(selectedFile));

    const formData = new FormData();
    formData.append("image", selectedFile);
    formData.append("rColor", r);
    formData.append("gColor", g);
    formData.append("bColor", b);
    // formData.append("intensity", intensity);

    fetch("https://test-image-4qr6.onrender.com/upload-image/", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Backend response:", data);
        // setRotatedImage(`data:image/png;base64,${data.rotated_base64}`);
        setColoredImage(`data:image/png;base64,${data.colored_base64}`);
        // setBlurredImage(`data:image/png;base64,${data.blurred_base64}`);
        // setGreyScaledImage(`data:image/png;base64,${data.grey_base64}`);
      })
      .catch((err) => console.error("Upload error:", err));
  };

  return (
    <div className="flex flex-col items-center h-full">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleImageUpload();
        }}
        className="flex flex-col items-center mt-4"
      >
        <HeadingBar />

        <div className="text-xl font-bold bg-gradient-to-r from-[#6f0971] via[#a607aa] to-[#ff0fff] text-transparent bg-clip-text">
          Image Processor with Numpy
        </div>

        <h1 className="text-white my-3">Black and White Color Changer</h1>
        <div
          className="w-[400px] h-[300px] lg:w-[600px] lg:h-[500px] sm:w-[400px] sm:h-[300px] mt-3 rounded-lg shadow shadow-black border-[1px] border-[#222224]"
          style={{
            backgroundImage: preview ? `url(${preview})` : `url(${astroboy})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <h1 className="text-white my-3">
          Change Black(Use Black and White Pic)
        </h1>
        <div
          className="w-[400px] h-[300px] lg:w-[600px] lg:h-[500px] sm:w-[400px] sm:h-[300px] rounded-lg shadow shadow-black border-[1px] border-[#222224]"
          style={{
            backgroundImage: preview
              ? `url(${coloredImage})`
              : `url(${astroboy_pink})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        {coloredImage && (
          <a
            href={coloredImage}
            download="colored_image.png"
            className="mt-5 px-4 py-2 bg-[#00ff00] text-black rounded"
          >
            Download
          </a>
        )}
        <div className="w-[400px] flex justify-between my-5">
          <input
            type="text"
            name="customMessage"
            placeholder="R"
            className=" text-center text-black w-[30%] border-2 border-[#ff0000] rounded-sm"
            onChange={(e) => setR(e.target.value)}
          />

          <input
            type="text"
            name="customMessage"
            placeholder="G"
            className=" text-center text-black w-[30%] border-2 border-[#00ff00] rounded-sm"
            onChange={(e) => setG(e.target.value)}
          />
          <input
            type="text"
            name="customMessage"
            placeholder="B"
            className=" text-center text-black w-[30%] border-2 border-[#0100ff] rounded-sm"
            onChange={(e) => setB(e.target.value)}
          />
        </div>

        <div className="w-[400px] max-w-full flex flex-row items-center space-x-2">
          <input
            type="file"
            accept="image/*"
            name="image"
            className="mt-2 text-white flex-1 overflow-hidden"
            onChange={(e) => setSelectedFile(e.target.files[0])}
          />
          <button
            type="submit"
            className="mt-2 px-4 py-2 border-[1px] border-[#3d3d42] text-white rounded shrink-0"
          >
            Send
          </button>
        </div>
      </form>

      <PythonCode
        filename="views.py"
        codeBlock={editorCode}
        link="https://github.com/xmiguelcastillo/image_processor"
      />
    </div>
  );
}

export default ImageEditorPage;
