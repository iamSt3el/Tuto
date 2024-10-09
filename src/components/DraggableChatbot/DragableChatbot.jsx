import React, { useState, useRef, useEffect, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import { X, Send, Maximize2, Minimize2, RefreshCw } from 'lucide-react';
import styles from './draggable.module.scss';

const DraggableChatbot = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: 'bot' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const chatbotRef = useRef(null);
  const isDraggingRef = useRef(false);
  const previousPositionRef = useRef({ x: 0, y: 0 });
  const positionRef = useRef({ x: 20, y: 20 });
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const updatePosition = useCallback(() => {
    if (chatbotRef.current) {
      chatbotRef.current.style.transform = `translate(${positionRef.current.x}px, ${positionRef.current.y}px)`;
    }
  }, []);

  const handleMouseDown = useCallback((e) => {
    if (e.target.closest(`.${styles.header}`)) {
      isDraggingRef.current = true;
      previousPositionRef.current = { x: e.clientX, y: e.clientY };
      e.preventDefault();
      document.body.style.userSelect = 'none';
    }
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!isDraggingRef.current) return;

    const deltaX = e.clientX - previousPositionRef.current.x;
    const deltaY = e.clientY - previousPositionRef.current.y;

    positionRef.current = {
      x: positionRef.current.x + deltaX,
      y: positionRef.current.y + deltaY
    };

    previousPositionRef.current = { x: e.clientX, y: e.clientY };

    requestAnimationFrame(updatePosition);
  }, [updatePosition]);

  const handleMouseUp = useCallback(() => {
    isDraggingRef.current = false;
    document.body.style.userSelect = '';
  }, []);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  const handleSendMessage = useCallback(async () => {
    if (inputMessage.trim() !== '') {
      const newUserMessage = { text: inputMessage, sender: 'user' };
      setMessages(prev => [...prev, newUserMessage]);
      setInputMessage('');
      setIsLoading(true);

      try {
        const response = await fetch('http://localhost:4000/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
            message: inputMessage,
            format: 'markdown',
            chatHistory: [...messages, newUserMessage]
          }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setMessages(prev => [...prev, { text: data.reply, sender: 'bot' }]);
      } catch (error) {
        console.error('Error:', error);
        setMessages(prev => [...prev, { text: "Sorry, I couldn't process your request.", sender: 'bot' }]);
      } finally {
        setIsLoading(false);
      }
    }
  }, [inputMessage, messages]);

  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  }, [handleSendMessage]);

  const handleNewChat = useCallback(() => {
    setMessages([{ text: "Hello! How can I assist you today?", sender: 'bot' }]);
  }, []);

  return (
    <div
      ref={chatbotRef}
      className={`${styles.chatbot} ${isMinimized ? styles.minimized : ''}`}
      style={{ transform: `translate(${positionRef.current.x}px, ${positionRef.current.y}px)` }}
      onMouseDown={handleMouseDown}
    >
      <div className={styles.header}>
        <span>Gemini Chatbot</span>
        <div className={styles.controls}>
          <RefreshCw className={styles.icon} onClick={handleNewChat} />
          {isMinimized ? (
            <Maximize2 className={styles.icon} onClick={() => setIsMinimized(false)} />
          ) : (
            <Minimize2 className={styles.icon} onClick={() => setIsMinimized(true)} />
          )}
          <X className={styles.icon} onClick={() => console.log('Close chatbot')} />
        </div>
      </div>
      <div className={styles.content}>
        {messages.map((msg, index) => (
          <div key={index} className={`${styles.message} ${styles[msg.sender]}`}>
            {msg.sender === 'bot' ? (
              <ReactMarkdown>{msg.text}</ReactMarkdown>
            ) : (
              msg.text
            )}
          </div>
        ))}
        {isLoading && <div className={styles.loading}>Thinking...</div>}
        <div ref={messagesEndRef} />
      </div>
      <div className={styles.inputArea}>
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type a message..."
          className={styles.input}
          disabled={isLoading}
        />
        <button onClick={handleSendMessage} className={styles.sendButton} disabled={isLoading}>
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default DraggableChatbot;