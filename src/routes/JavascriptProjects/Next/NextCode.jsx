import React, { useEffect, useState } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/base16/brewer.css";

function NextCode() {
  const [activeTab, setActiveTab] = useState(0);

  const codeSnippets = [
    {
      label: "Javascript",
      code: `
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";

let contacts = [];

// GET
export async function GET() {
  return NextResponse.json(contacts);
}

// POST
export async function POST(request) {
  const formData = await request.formData();

  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const phoneNumber = formData.get("phoneNumber");
  const info = formData.get("info");
  const file = formData.get("file");
  const background = formData.get("background");

  if (!phoneNumber || phoneNumber.length !== 10) {
    return NextResponse.json(
      { error: "Needs to be 10 digit number" },
      { status: 400 },
    );
  }

  //Profile Pic
  let imageUrl = null;
  if (file && file.name) {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filePath = path.join(process.cwd(), "public/uploads", fileName);

    await writeFile(filePath, buffer);
  }

  //Background Pic
  let backgroundUrl = null;
  if (background && background.name) {
    const bytes = await background.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const backgroundPath = path.join(
      process.cwd(),
      "public/uploads",
      backgroundName,
    );

    await writeFile(backgroundPath, buffer);
  }

  const newContact = {
    id: Date.now(),
    firstName,
    lastName,
    phoneNumber,
    info,
    imageUrl,
    backgroundUrl,
  };

  contacts.push(newContact);

  return NextResponse.json(newContact, { status: 201 });
}

// DELETE
export async function DELETE(request) {
  const { id } = await request.json();
  contacts = contacts.filter((contact) => contact.id !== id);
  return new NextResponse(null, { status: 204 });
}

// PUT (Edit)
export async function PUT(request) {
  const { id, firstName, lastName, phoneNumber, info, imageUrl } =
    await request.json();
  const contactIndex = contacts.findIndex((contact) => contact.id === id);

  if (contactIndex !== -1) {
    contacts[contactIndex] = {
      id,
      firstName,
      lastName,
      phoneNumber,
      info,
      imageUrl,
    };
    return NextResponse.json(contacts[contactIndex], { status: 200 });
  }
  return new NextResponse(null, { status: 404 });
}
      `,
    },
  ];

  useEffect(() => {
    hljs.highlightAll();
  }, [activeTab]);

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code.trim()).then(() => {
      alert("Code copied to clipboard!");
    });
  };

  return (
    <div className="mt-6 w-[400px] lg:w-[600px] sm:w-[400px]">
      {/* Tabs */}
      <div className="flex space-x-4 mb-4">
        {codeSnippets.map((snippet, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 rounded-md ${activeTab === index
                ? "bg-blue-950 border-[#111111] border-2 text-white"
                : "bg-gray-200 text-black"
              }`}
          >
            {snippet.label}
          </button>
        ))}
      </div>
      {/* Code Block */}
      <div className="relative bg-[#111111] text-white rounded-s4 p-4">
        <div
          className="overflow-auto max-h-[1000px] text-sm leading-5"
          style={{
            whiteSpace: "pre-wrap",
            wordWrap: "break-word",
          }}
        >
          <pre>
            <code
              className={`language-${codeSnippets[
                activeTab
              ].label.toLowerCase()}`}
            >
              {codeSnippets[activeTab].code.trim()}
            </code>
          </pre>
        </div>
        {/* Copy Button */}
        <button
          onClick={() => copyToClipboard(codeSnippets[activeTab].code)}
          className="absolute top-3 right-3 bg-blue-500 text-white px-3 py-1 rounded-md text-sm"
        >
          Copy
        </button>
      </div>
    </div>
  );
}

export default NextCode;
