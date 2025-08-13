'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, Send, ChevronUp, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from 'framer-motion';
import { useChat } from '@/app/context/ChatContext';

// Mock data for initial display
const initialMessages = [
    { id: 1, role: 'assistant', content: "Hi there! I'm Diego's personal tech support. Ask me anything about Diego's professional background, skills, or projects." },
    { id: 2, role: 'user', content: "What's his experience with product management?" },
    { id: 3, role: 'assistant', content: "Diego has over 5 years of experience in tech consulting, where he has led cross-functional teams to deliver more than 10 digital products, effectively acting in a product management capacity." }
];

// Main Chat Component - This will be the one you import into your layout
export default function Chat() {
    const { isChatOpen, toggleChat } = useChat();

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
                        {/* Avatar */}
                        {/* <div className="relative w-10 h-10">
                            <Image src="/babyjag.png" alt="Baby Jaguar Avatar" layout="fill" className="rounded-full" />
                        </div> */}

                        <Bot className="w-6 h-6 text-primary" />
                        {/* Name and Status */}
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


// The main chat window component
const ChatWindow = ({ closeChat }: { closeChat: () => void }) => {
    const [messages, setMessages] = useState(initialMessages);
    const [input, setInput] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!input.trim()) return;

        // Add user message to the list
        const userMessage = { id: Date.now(), role: 'user' as const, content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');

        // Simulate an assistant response after a short delay
        setTimeout(() => {
            const assistantResponse = { id: Date.now() + 1, role: 'assistant' as const, content: "This is a simulated response. The AI logic will be implemented in Phase 2!" };
            setMessages(prev => [...prev, assistantResponse]);
        }, 1000);
    };

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
                        {/* Name and Status */}
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
                {messages.map((msg) => (
                    <div key={msg.id} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        {msg.role === 'assistant' && (
                            <div className="w-8 h-8 rounded-full bg-primary flex-shrink-0 flex items-center justify-center">
                                <Bot className="w-5 h-5 text-primary-foreground" />
                            </div>
                        )}
                        <div className={`rounded-lg px-4 py-2 max-w-xs md:max-w-sm ${msg.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                            <p className="text-sm">{msg.content}</p>
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
