import { NextResponse } from 'next/server';
import { getRecentTracks } from '@/lib/spotify';
import { config } from '@/config';

export async function GET() {
    try {
        if (!config.recentTracks) {
            return NextResponse.json(
                { error: 'Recent tracks have been turned off.' },
                { status: 500 }
            );
        }

        const response = await getRecentTracks();
        const data = await response.json();

        return NextResponse.json(data);

    } catch (error) {
        console.error('Error in recent-tracks API:', error);
        return NextResponse.json(
            { error: 'Error fetching recent tracks' },
            { status: 500 }
        );
    }
}

export async function OPTIONS() {
    return NextResponse.json(
        {},
        {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            },
        }
    );
}