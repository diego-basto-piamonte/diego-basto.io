'use client';

import React, { createContext, useState, useContext, ReactNode, useCallback } from 'react';

interface ChatStoreContextType {
    // UI state management only
    isChatOpen: boolean;
    toggleChat: (open?: boolean) => void;
}

const ChatStoreContext = createContext<ChatStoreContextType | undefined>(undefined);

export function ChatStoreProvider({ children }: { children: ReactNode }) {
    const [isChatOpen, setIsChatOpen] = useState(false);

    // UI state management functions
    const toggleChat = useCallback((open?: boolean) => {
        // If an explicit boolean is provided, use it. Otherwise, toggle the state.
        setIsChatOpen(prev => typeof open === 'boolean' ? open : !prev);
    }, []);

    return (
        <ChatStoreContext.Provider value={{
            isChatOpen,
            toggleChat
        }}>
            {children}
        </ChatStoreContext.Provider>
    );
}

export const useChatStore = () => {
    const context = useContext(ChatStoreContext);
    if (context === undefined) {
        throw new Error('useChatStore must be used within a ChatStoreProvider');
    }
    return context;
};