"use client"
import React from 'react';
import Square from '@/components/Background/Square';

export default function LayoutWrapper({ children }) {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <Square
                column={8}
                row={8}
                transparentEffectDirection="leftRightBottomTop"
                blockColor="#fff"
                zIndex={0}
            />
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}