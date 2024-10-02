import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";  // Chat icon

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);  // State to manage chatbot visibility

  // Predefined chatbot responses for common questions
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! I'm here to help. Ask me anything!" },
  ]);
  const [input, setInput] = useState("");

  const responses = {
    "what services do you offer?": "We offer web development, graphic design, and project management services.",
    "how can i contact you?": "You can reach us via the contact form or email us at contact@palanati.com.",
    "what is your pricing model?": "Our pricing is flexible and depends on the project requirements. Contact us for a quote!",
    "how does your platform work?": "We connect businesses with freelancers to help them complete their projects efficiently.",
    "what industries do you work with?": "We work with a wide range of industries including finance, healthcare, technology, and retail.",
    "how long does it take to complete a project?": "The timeline depends on the complexity of the project. Simple projects can take a few days, while more complex ones may take weeks or months.",
    "can i hire multiple freelancers at once?": "Yes! You can hire a team of freelancers if your project requires multiple skill sets.",
    "how do i get a quote for my project?": "You can submit your project details through our 'Contact Us' page, and we'll get back to you with a personalized quote.",
    "do you offer revisions?": "Yes, we offer revisions to ensure you're satisfied with the final product.",
    "how do i track the progress of my project?": "You can track your project's progress through our platform. We'll keep you updated at every step.",
    "what payment methods do you accept?": "We accept payments via credit cards, PayPal, and bank transfers.",
    "is there a money-back guarantee?": "Yes, we offer a money-back guarantee if you're not satisfied with the initial work, subject to our terms and conditions.",
    "what are your hours of operation?": "We are available Monday to Friday from 9 AM to 6 PM (UTC).",
    "do you provide ongoing support after the project is complete?": "Yes, we provide ongoing support and maintenance packages depending on your project needs.",
    "how do i get started?": "To get started, simply sign up on our platform, post your project, and start receiving bids from freelancers.",
    "can i see examples of past work?": "Yes, you can view our portfolio or case studies on the website to see examples of past work.",
    "do you work with startups?": "Yes, we love working with startups and helping them grow by providing top-tier talent.",
    "can i cancel a project?": "You can cancel a project within a certain timeframe. Please check our cancellation policy for more details.",
    "how do i communicate with the freelancers?": "Once you hire a freelancer, you can communicate with them directly through our messaging system.",
    "how much does it cost to post a project?": "Posting a project is free! You only pay once you hire a freelancer.",
    "what if i'm not satisfied with the work?": "We have a dispute resolution process in place to ensure fair outcomes. You can also request revisions."
  };

  const handleSend = () => {
    if (input.trim() === "") return;

    const userMessage = { sender: "user", text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    const botResponse = getBotResponse(input.toLowerCase());
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "bot", text: botResponse },
    ]);

    setInput("");
  };

  const getBotResponse = (input) => {
    return responses[input] || "Sorry, I didn't understand that. Can you try same query in the contactus we can clarify better!!";
  };

  return (
    <div>
      {/* Chatbot Toggle Button */}
      <div
        style={styles.chatbotIcon}
        onClick={() => setIsOpen(!isOpen)}  // Toggle the chatbot window
      >
        <FontAwesomeIcon icon={faComments} size="2x" />
      </div>

      {/* Chatbot Window */}
      {isOpen && (
        <div style={styles.chatbotContainer}>
          <div style={styles.chatWindow}>
            {messages.map((message, index) => (
              <div
                key={index}
                style={
                  message.sender === "user" ? styles.userMessage : styles.botMessage
                }
              >
                {message.text}
              </div>
            ))}
          </div>
          <div style={styles.inputContainer}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={styles.inputField}
              placeholder="Type a message..."
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend} style={styles.sendButton}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  chatbotIcon: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "#007BFF",
    borderRadius: "50%",
    padding: "10px",
    cursor: "pointer",
    color: "#fff",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    zIndex: 1000,
  },
  chatbotContainer: {
    position: "fixed",
    bottom: "80px",
    right: "20px",
    width: "300px",
    backgroundColor: "#fff",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    zIndex: 1000,
  },
  chatWindow: {
    height: "300px",
    overflowY: "auto",
    padding: "10px",
  },
  userMessage: {
    backgroundColor: "#f0f0f0",
    padding: "10px",
    borderRadius: "10px",
    textAlign: "right",
    margin: "5px 0",
  },
  botMessage: {
    backgroundColor: "#007BFF",
    color: "#fff",
    padding: "10px",
    borderRadius: "10px",
    textAlign: "left",
    margin: "5px 0",
  },
  inputContainer: {
    display: "flex",
    padding: "10px",
    borderTop: "1px solid #ddd",
  },
  inputField: {
    flex: 1,
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ddd",
  },
  sendButton: {
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "10px 15px",
    marginLeft: "10px",
    cursor: "pointer",
  },
};

export default Chatbot;
