'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the shape of the context data
interface ChatContextType {
    isChatOpen: boolean;
    toggleChat: (open?: boolean) => void;
}

// Create the context with a default value
const ChatContext = createContext<ChatContextType | undefined>(undefined);

// Create the provider component. It's now the default export.
function ChatProvider({ children }: { children: ReactNode }) {
    const [isChatOpen, setIsChatOpen] = useState(false);

    const toggleChat = (open?: boolean) => {
        // If an explicit boolean is provided, use it. Otherwise, toggle the state.
        setIsChatOpen(prev => typeof open === 'boolean' ? open : !prev);
    };

    return (
        <ChatContext.Provider value={{ isChatOpen, toggleChat }}>
            {children}
        </ChatContext.Provider>
    );
};

// Create a custom hook for easy access to the context (remains a named export)
export const useChatUI = () => {
    const context = useContext(ChatContext);
    if (context === undefined) {
        throw new Error('useChatUI must be used within a ChatProvider');
    }
    return context;
};

export default ChatProvider;
