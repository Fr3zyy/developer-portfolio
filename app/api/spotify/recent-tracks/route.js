import { NextResponse } from 'next/server';
import { getRecentTracks } from '@/lib/spotify';
import { config } from '@/config';

const isSpotifyConfigured = () =>
    Boolean(
        process.env.SPOTIFY_CLIENT_ID &&
        process.env.SPOTIFY_CLIENT_SECRET &&
        process.env.SPOTIFY_REFRESH_TOKEN
    );

export async function GET() {
    try {
        if (!config.recentTracks || !isSpotifyConfigured()) {
            return NextResponse.json({ configured: false, items: [] });
        }

        const response = await getRecentTracks();

        if (!response.ok) {
            return NextResponse.json(
                { configured: true, error: 'Spotify API error', items: [] },
                { status: response.status }
            );
        }

        const data = await response.json();
        return NextResponse.json({ configured: true, ...data });
    } catch (error) {
        console.error('Error in recent-tracks API:', error);
        return NextResponse.json(
            { configured: true, error: 'Error fetching recent tracks', items: [] },
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
