'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, Send, ChevronUp, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from 'framer-motion';
import { useChatUI } from '../app/context/ChatContext';
import { DefaultChatTransport } from 'ai';
import { useChat } from '@ai-sdk/react';

// Mock data for initial display
const initialMessages = [
    { id: 1, role: 'assistant', content: "Hi! I'm the AI assistant. Ask me anything about Diego's professional background." },
];

// Main Chat Component
export default function Chat() {
    const { isChatOpen, toggleChat } = useChatUI();

    return (
        <>
            <AnimatePresence>
                {isChatOpen && <ChatWindow closeChat={() => toggleChat(false)} />}
            </AnimatePresence>
            <ChatIcon openChat={() => toggleChat(true)} isOpen={isChatOpen} />
        </>
    );
}


// The floating icon that opens the chat
const ChatIcon = ({ openChat, isOpen }: { openChat: () => void; isOpen: boolean }) => {
    return (
        <AnimatePresence>
            {!isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 50, scale: 0.9 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="fixed bottom-4 right-4 z-50"
                >
                    <Button
                        onClick={openChat}
                        className="w-auto h-16 rounded-lg shadow-lg flex items-center justify-center p-4 gap-3"
                        aria-label="Open chat"
                        variant="outline"
                    >
                        <Bot className="w-6 h-6 text-primary" />
                        <div className="flex flex-col items-start">
                            <h3 className="font-semibold text-lg">Tech Support</h3>
                            <div className="flex items-center gap-1.5">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                <span className="text-xs text-muted-foreground">Online</span>
                            </div>
                        </div>
                        <ChevronUp className="w-6 h-6 ml-4" />
                    </Button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};


// The main chat window component (Phase 1 Logic)
const ChatWindow = ({ closeChat }: { closeChat: () => void }) => {
    const [input, setInput] = useState('');

    const { messages, sendMessage } = useChat();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!input.trim()) return;
        sendMessage({
            text: input,
        })
        setInput('');
    }

    // Auto-scroll to the bottom of the message list
    const messagesEndRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-24 right-4 w-full max-w-md h-[70vh] max-h-[600px] z-50 bg-background border rounded-lg shadow-xl flex flex-col"
        >
            {/* Chat Header */}
            <header>
                <button
                    onClick={closeChat}
                    className="w-full p-4 border-b flex items-center justify-between cursor-pointer hover:bg-muted/50 transition-colors"
                    aria-label="Minimize chat"
                >
                    <div className="flex items-center gap-3">
                        <Bot className="w-6 h-6 text-primary" />
                        <div>
                            <h3 className="font-semibold text-lg">Tech Support</h3>
                            <div className="flex items-center gap-1.5">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                <span className="text-xs text-muted-foreground">Online</span>
                            </div>
                        </div>
                    </div>
                    <ChevronDown className="h-6 w-6 text-muted-foreground" />
                </button>
            </header>

            {/* Message List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (
                    <div key={message.id} className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        {message.role === 'assistant' && (
                            <div className="w-8 h-8 rounded-full bg-primary flex-shrink-0 flex items-center justify-center">
                                <Bot className="w-5 h-5 text-primary-foreground" />
                            </div>
                        )}
                        <div className={`rounded-lg px-4 py-2 max-w-xs md:max-w-sm whitespace-pre-wrap ${message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                            {message.parts.map((part, i) => {
                                switch (part.type) {
                                    case 'text':
                                        return <div key={`${message.id}-${i}`}>{part.text}</div>;
                                }
                            })}
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            {/* Chat Input Form */}
            <footer className="p-4 border-t">
                <form onSubmit={handleSubmit} className="flex items-center gap-2">
                    <Input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask a question..."
                        className="flex-1"
                        autoComplete="off"
                    />
                    <Button type="submit" size="icon" aria-label="Send message">
                        <Send className="h-5 w-5" />
                    </Button>
                </form>
            </footer>
        </motion.div>
    );
};
