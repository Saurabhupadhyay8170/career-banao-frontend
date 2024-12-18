import React, { useState } from "react";

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<
    { sender: string; text: string }[]
  >([
    {
      sender: "chatbot",
      text: 'Greetings from CareerBanao Education!<br>Guidance regarding course?<br>Connect to us at +91-8750092628',
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [step, setStep] = useState(0);

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = () => {
    if (!inputValue.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: inputValue }]);

    if (step === 0) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "chatbot",
          text: "May I know which course you are looking for?",
        },
      ]);
      setStep(1);
    } else if (step === 1) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "chatbot",
          text: "Could you please help me with your <br>NAME:<br> PHONE NUMBER: ?",
        },
      ]);
      setStep(2);
    } else if (step === 2) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "chatbot",
          text: "Are you connected to any other counselor?",
        },
      ]);
      setStep(3);
    } else if (step === 3) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "chatbot",
          text:
            "Thank you for reaching out to us!<br>Our Program expert CareerBanao Mentor will contact you shortly.<br>Meanwhile, please do not share your number with any other source to avoid multiple calls.",
        },
      ]);
      setStep(4);
    }

    setInputValue("");
  };

  return (
    <div>
      {/* Chat Icon */}
      <div
        className="fixed bottom-10 right-5 w-14 h-14 bg-yellow-500 rounded-full flex flex-col items-center justify-center text-black text-sm font-bold cursor-pointer shadow-lg z-50 animate-bounce"
        onClick={toggleChat}
      >
        <div className="relative">
          <img
            src="https://via.placeholder.com/50" // Replace with your image URL
            alt="Chat Icon"
            className="rounded-full w-12 h-12"
          />
          <span className="absolute top-0 left-0 h-12 right-0 bg-red-500 text-white text-xs rounded-full px-1 text-center">
            Chat Now
          </span>
        </div>
      </div>

      {/* Chatbot */}
      {isOpen && (
        <div className="fixed bottom-24 right-5 w-80 bg-white border border-careerOrange rounded-md shadow-lg z-50">
          {/* Chat Header */}
          <div className="flex justify-between items-center bg-careerOrange text-white px-4 py-2">
            <div className="text-lg font-bold flex gap-2"> 
              <img src="./logo/CBlogo.jpg" className="h-8 mt-4"></img> 
              <h2 className="">CareerBanao Mentor</h2>
            </div>
            <button className="text-xl" onClick={toggleChat}>
              &times;
            </button>
          </div>

          {/* Chat Body */}
          <div className="h-64 overflow-y-auto px-4 py-2 font-custom bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-2 mb-2 max-w-[80%] rounded-md ${
                  message.sender === "user"
                    ? "bg-green-100 ml-auto"
                    : "bg-gray-200"
                }`}
              >
                {/* Render the message text with <br> tags */}
                <p
                  className="text-sm"
                  dangerouslySetInnerHTML={{ __html: message.text }}
                />
              </div>
            ))}
          </div>

          {/* Chat Footer */}
          {step < 4 && (
            <div className="flex items-center px-4 py-2 bg-gray-50">
              <input
                type="text"
                className="flex-grow border rounded-md p-2 text-sm"
                placeholder="Type a message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <button
                className="ml-2 bg-careerOrange text-white px-4 py-2 rounded-md"
                onClick={sendMessage}
              >
                Send
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Chatbot;
