import React from 'react';
import { UIProvider } from './context/UIcontext';
import { RouterPage } from './pages/RouterPage';

export const TicketApp = () => {
    return (
        <UIProvider>
            <RouterPage />
        </UIProvider>
    
    )
}
