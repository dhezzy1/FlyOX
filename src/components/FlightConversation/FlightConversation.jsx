import React, { useState } from 'react';
import './FlightConversation.css';

const FlightConversation = () => {
    const [messages, setMessages] = useState([
       
        { text: " check your flight status .", sender: "bot" },
    ]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (input.trim()) {
            setMessages([...messages, { text: input, sender: "user" }, { text: "That's a great question! Let me check.", sender: "bot" }]);
            setInput('');
        }
    };

    return (
        <div className="chat-container">
            {messages.map((message, index) => (
                <div key={index} className={`message ${message.sender}`}>{message.text}</div>
            ))}
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                className="input-field"
            />
            <button onClick={handleSend} className="send-button">Send</button>
        </div>
    );
};

export default FlightConversation;
