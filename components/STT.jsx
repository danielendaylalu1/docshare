"use clint";
import React, { useEffect, useState } from "react";
import { CiMicrophoneOn } from "react-icons/ci";

const SpeechToText = () => {
  const [transcript, setTranscript] = useState("");
  const [lst, setLst] = useState(false);
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      let recog = new window.webkitSpeechRecognition();
      recog.lang = "am-ET";
      recog.interimResults = false;
      recog.maxAlternatives = 1;
      setRecognition(recog);
    }
  }, []);

  const startListening = () => {
    if (recognition) {
      recognition.start();
      setLst(true);
    }
  };

  const stopListening = () => {
    if (recognition) {
      recognition.stop();
      setLst(false);
    }
  };

  useEffect(() => {
    if (recognition) {
      recognition.onresult = (event) => {
        const result = event.results[0][0].transcript;
        setTranscript((prev) => prev + " " + result);
        stopListening();
      };
    }
  }, [recognition]);

  const [showtran, setShowtran] = useState(false);

  return (
    <div className=" bg-red-200 w-full rounded-xl flex gap-x-4 p-4">
      <button
        onClick={() => {
          startListening();
          setShowtran(true);
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
