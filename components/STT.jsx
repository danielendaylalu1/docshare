"use client";

import React, { useEffect, useState } from "react";

import { CiMicrophoneOn } from "react-icons/ci";

const SpeechToText = () => {
  const [transcript, setTranscript] = useState("");
  const [lst, setLst] = useState(false);

  let [recognition, setRecognition] = useState(null);

  useEffect(() => {
    setRecognition(new window.webkitSpeechRecognition());
  }, []);

  // Create a new instance of SpeechRecognition

  recognition.lang = "am-ET"; // Set the language for recognition
  recognition.interimResults = false; // Set interim results to false to get final transcript only
  recognition.maxAlternatives = 1; // Set maximum number of alternatives
  //   recognition.continus = true;

  const startListening = () => {
    recognition?.start(); // Start speech recognition
    setLst(true);
  };

  const stopListening = () => {
    recognition?.stop(); // Start speech recognition
    setLst(false);
  };
  if (recognition !== null) {
    recognition.onresult = (event) => {
      const result = event.results[0][0].transcript; // Get the transcript from the event
      setTranscript((prev) => prev + " " + result); // Set the transcript state
      stopListening();
    };
  }

  const [showtran, setShowtran] = useState(false);

  return (
    <div className=" bg-red-200 w-full rounded-xl flex gap-x-4 p-4">
      <button
        onClick={() => {
          if (recognition) {
            startListening();
          }
          showtran(true);
        }}
      >
        <div className="p-2 rounded-xl bg-red-300 bottom-3 left-3">
          <CiMicrophoneOn color="white" />
        </div>
      </button>
      <p className="bg-red-300 p-4">Transcript: {transcript}</p>
    </div>
  );
};

export default SpeechToText;
