"use client";

import React, { useState } from "react";

const SpeechToText = () => {
  const [transcript, setTranscript] = useState("");
  const [lst, setLst] = useState(false);
  const recognition = new window.webkitSpeechRecognition(); // Create a new instance of SpeechRecognition

  recognition.lang = "am-ET"; // Set the language for recognition
  recognition.interimResults = false; // Set interim results to false to get final transcript only
  recognition.maxAlternatives = 1; // Set maximum number of alternatives
  //   recognition.continus = true;

  const startListening = () => {
    recognition.start(); // Start speech recognition
    setLst(true);
  };

  const stopListening = () => {
    recognition.stop(); // Start speech recognition
    setLst(false);
  };
  recognition.onresult = (event) => {
    const result = event.results[0][0].transcript; // Get the transcript from the event
    setTranscript((prev) => prev + " " + result); // Set the transcript state
    stopListening();
  };

  return (
    <div className="fixed bottom-6 bg-red-200 w-full">
      <button onClick={startListening}>
        {lst ? "Listening" : "Start Listening"}
      </button>
      <p>Transcript: {transcript}</p>
    </div>
  );
};

export default SpeechToText;
