import React, { useEffect, useState } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/base16/brewer.css";

function MazeCode() {
  const [activeTab, setActiveTab] = useState(0);

  const codeSnippets = [
    {
      label: "Javascript",
      code: `

"use client";

import { useState, useEffect } from "react";

export default function RecentMatch({ params }) {
  const [lastFiveScores, setLastFiveScores] = useState([]);
  const [lastFiveOpponents, setLastFiveOpponents] = useState([]);
  const apiKey =
    "?"

  const teamIcons = {
    "Manchester City": "/Manchestercity.svg",
    Liverpool: "/Liverpool.svg",
    Chelsea: "/Chelsea.svg",
    "Manchester United": "/Manchesterunited.svg",
    "Manchester Utd": "/Manchesterunited.svg",
    Arsenal: "/Arsenal.svg",
    Leicester: "/Leicester.svg",
    "Leicester City": "/Leicester.svg",
    "Tottenham Hotspur": "/Tottenham.svg",
    Tottenham: "/Tottenham.svg",
    "AFC Bournemouth": "/Bournemouth.svg",
    Southampton: "/Southampton.svg",
    Everton: "/Everton.svg",
    "Wolverhampton Wanderers": "/Wolverhampton.svg",
    Wolves: "/Wolverhampton.svg",
    "Brighton & Hove Albion": "/Brighton.svg",
    "West Ham United": "/Westham.svg",
    "West Ham": "/Westham.svg",
    Fulham: "/Fulham.svg",
    Brentford: "/Brentford.svg",
    "Aston Villa": "/Astonvilla.svg",
    "Nottingham Forest": "/Nottinghamforest.svg",
    Nottingham: "/Nottinghamforest.svg",
    "Newcastle United": "/Newcastle.svg",
    Newcastle: "/Newcastle.svg",
    "Ipswich Town": "/Ipswich.svg",
    Ipswich: "/Ipswich.svg",
    "Crystal Palace": "/Crystalpalace.svg",
  };

  const teamKeys = {
    "Manchester City": 80,
    Liverpool: 84,
    Chelsea: 88,
    "Manchester United": 102,
    Arsenal: 141,
    "Leicester City": 155,
    "Tottenham Hotspur": 164,
    "AFC Bournemouth": 3071,
    Southampton: 3072,
    Everton: 3073,
    "Wolverhampton Wanderers": 3077,
    "Brighton & Hove Albion": 3079,
    "West Ham United": 3081,
    Fulham: 3085,
    Brentford: 3086,
    "Aston Villa": 3088,
    "Nottingham Forest": 3089,
    "Newcastle United": 3100,
    "Ipswich Town": 3121,
    "Crystal Palace": 3429,
  };

  useEffect(() => {
    const getRecentMatch = async () => {
      let gameScores = [];
      let gameOpponent = [];
      try {
        const decodedParams = decodeURIComponent(params);
        const paramsName =
          decodedParams.charAt(0).toUpperCase() + decodedParams.slice(1);

        const teamId = teamKeys[paramsName];
        if (!teamId) {
          console.error("Team not found in teamKeys.");
          return;
        }

        const currentDate = new Date();
        const pastDate = new Date(currentDate);
        pastDate.setDate(currentDate.getDate() - 50);

        const formattedCurrentDate = currentDate.toISOString().slice(0, 10);
        const formattedPastDate = pastDate.toISOString().slice(0, 10);

        const response = await fetch(
        );
  const data = await response.json();

  if (data.result && data.result.length > 0) {
    data.result.slice(0, 5).forEach((match) => {
      const opponent =
        match.event_home_team === paramsName
          ? match.event_away_team
          : match.event_home_team;

      gameOpponent.push(opponent);
      gameScores.push(match.event_final_result);
    });

    console.log(data);
    gameScores.reverse();
    setLastFiveScores(gameScores);
    gameOpponent.reverse();
    setLastFiveOpponents(gameOpponent);
  } else {
    console.log("No match data found.");
  }
} catch (error) {
  console.log("Could not fetch Recent Match", error);
}
    };

getRecentMatch();
  }, [params]);

return (
  <div className="bg-[#181818] shadow shadow-black  rounded-lg mt-5 w-[400px] h-[150px]">
    <div className="flex justify-center h-[30%] items-center w-full text-white">
      Last 5 Matches
    </div>
    <div className="flex justify-center h-[70%] items-center w-full">
      {lastFiveScores.length > 0 ? (
        lastFiveScores.map((score, index) => {
          const opponent = lastFiveOpponents[index];
          const tieFirst = score[0];
          const tieSecond = score[4];
          let tieColor = "";

          if (tieFirst === tieSecond) {
            tieColor = "bg-[#232327]";
          } else {
            tieColor = "bg-[#03bd66]";
          }

          return (
            <div key={index} className="flex flex-col w-1/5 h-[100%]">
              <div className="flex justify-center items-center h-[40%]">
                <div
                  className={
                >
                  {score}
                </div>
              </div>

              <div className="flex justify-center items-center h-[60%]">
                {/* Show the icon based on the opponent */}
                <img
                  src={teamIcons[opponent] || "/defaultIcon.svg"}
                  alt="icon"
                  className="w-[40px] h-[40px]"
                />
              </div>
            </div>
          );
        })
      ) : (
        <p className="text-white">Recent Matches</p>
      )}
    </div>
  </div>
);
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
            className={`px - 4 py - 2 rounded - md ${
              activeTab === index
                ? "bg-blue-950 border-[#111111] border-2 text-white"
                : "bg-gray-200 text-black"
            } `}
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
              className={`language - ${codeSnippets[
                activeTab
              ].label.toLowerCase()} `}
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

export default MazeCode;
