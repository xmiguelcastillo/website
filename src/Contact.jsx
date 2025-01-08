import React, { useState } from "react";
import HeadingBar from "./components/HeadingBar";
import TopBar from "./components/TopBar";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import { Model } from "./VoxMiguel";

function Contact() {
  const [formStatus, setFormStatus] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "37564837-43be-41d9-9fe3-35a84e6747bd");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        setFormStatus({
          success: true,
          message: "Your message has been sent!",
        });
      } else {
        setFormStatus({
          success: false,
          message: "There was an error sending your message.",
        });
      }
    } catch (error) {
      setFormStatus({
        success: false,
        message: "Something went wrong, please try again later.",
      });
    }
  };

  return (
    <div className="flex flex-col items-center bg-[#101010] h-full ">
      <HeadingBar />
      <TopBar />
      <div className="max-w-xl w-[470px] mt-10 mx-auto p-6 bg-[#111111] border border-[#00ffd7] rounded-md">
        <h2 className="text-2xl font-medium text-center text-white mb-6">
          Contact Me
        </h2>

        <div className="Section 2 mt-4">
          <Canvas shadows camera={{ position: [100, 30, 1.66] }}>
            <Environment preset="city" />
            <Model
              position={[60, -4, 0]}
              rotation={[0, -Math.PI / 2, 0]}
              castShadow
              receiveShadow
            />
            <ContactShadows
              position={[0, -0.8, 0]}
              color="#ffffff"
              opacity={1.3}
              blur={1}
            />
            <OrbitControls enableZoom={true} autoRotate={false} />
          </Canvas>
        </div>
        {formStatus && (
          <div
            className={`p-4 mb-4 rounded-md text-center ${formStatus.success
                ? "bg-green-200 text-green-800"
                : "bg-red-200 text-red-800"
              }`}
          >
            {formStatus.message}
          </div>
        )}

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-600 rounded-md bg-[#222222] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-600 rounded-md bg-[#222222] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="4"
              className="mt-1 block w-full px-4 py-2 border border-gray-600 rounded-md bg-[#222222] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit Form
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
