"use client";

import React, { useEffect, useRef, useState } from "react";
import { MessageSquareShare, X } from "lucide-react";
import { Send } from 'lucide-react';
import axios from "axios";

const Chat = () => {
    const [showIcon, setShowIcon] = useState(false);
    const [openChat, setOpenChat] = useState(false);
    const chatRef = useRef(null);
    const [text, setText] = useState('');
    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useState([]);

    console.log(text);

    async function onSubmitHandler(e) {
        e.preventDefault();
        
        if (!text.trim()) return; 
        
        setLoading(true);
        
       
        const userMessage = {
            id: Date.now(),
            role: "user",
            text: text
        };
        
        setMessages(prev => [...prev, userMessage]);
        
        try {
            const response = await axios.post('/api/gemini', { text });
            console.log(response);
            
            if (response.status === 200) {
                setText('');
                
               
                const aiMessage = {
                    id: Date.now() + 1,
                    role: "ai",
                    text: response.data.answer
                };
                
                setMessages(prev => [...prev, aiMessage]);
            }
            
        } catch (error) {
            console.error('Error sending message:', error);
            
            // Add error message
            const errorMessage = {
                id: Date.now() + 1,
                role: "ai",
                text: "Sorry, I encountered an error. Please try again."
            };
            
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setLoading(false);
        }
    }

    
    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowIcon(true);
            } else {
                setShowIcon(false);
                setOpenChat(false);
            }
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="w-full h-screen relative">
            {showIcon && !openChat && (
                <div className="fixed bottom-6 right-6 flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg">
                    <p className="text-sm font-medium">Help</p>
                    <button
                        className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
                        onClick={() => {
                            setOpenChat(true);
                            setShowIcon(false);
                        }}
                    >
                        <MessageSquareShare size={20} />
                    </button>
                </div>
            )}

            {openChat && (
                <div className="fixed bottom-6 right-6 w-full max-w-sm md:max-w-md lg:max-w-lg h-96 bg-white shadow-lg rounded-lg flex flex-col border border-gray-200">
                    <div className="p-4 font-semibold border-b flex justify-between items-center">
                        Welcome to Techwens Solutions
                        <button
                            onClick={() => {
                                setOpenChat(false);
                                setShowIcon(true);
                            }}
                            className="text-gray-500 hover:text-red-500"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-3 hide-scroll">
                        {messages?.length === 0 && (
                            <div className="w-full h-full flex justify-center items-center text-gray-500">
                                No Messages
                            </div>
                        )}
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`p-3 rounded-lg text-sm max-w-[80%] ${
                                    message.role === "user"
                                        ? "bg-blue-500 text-white ml-auto"
                                        : "bg-gray-100 text-gray-800 mr-auto" 
                                }`}
                            >
                                <div className="text-xs opacity-70 mb-1">
                                    {message.role === "user" ? "You" : "Techwens AI"}
                                </div>
                                {message.text}
                            </div>
                        ))}
                        
                       
                        {loading && (
                            <div className="bg-gray-100 text-gray-800 p-3 rounded-lg text-sm max-w-[80%] mr-auto">
                                <div className="text-xs opacity-70 mb-1">Techwens AI</div>
                                <div className="flex items-center gap-1">
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                </div>
                            </div>
                        )}
                    </div>
                    
                    <div ref={chatRef}></div>
                    
                    <form className="p-4 flex w-full gap-4" onSubmit={onSubmitHandler}>
                        <input 
                            type="text" 
                            placeholder="I'm here to help..." 
                            className="outline-none w-[80%] flex-1 py-2 px-2 border border-blue-100 hover:border-blue-500 rounded-md placeholder:font-semibold" 
                            name="text" 
                            value={text} 
                            onChange={(e) => setText(e.target.value)}
                            disabled={loading}
                        />
                        <button 
                            className="hover:scale-105 hover:text-blue-400 hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed" 
                            disabled={loading || !text.trim()} 
                            type="submit"
                        >
                            <Send size={25} />
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Chat;
