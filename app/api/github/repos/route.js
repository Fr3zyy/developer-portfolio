import { NextResponse } from 'next/server';
import { config } from '@/config';

// Cache on the server for 1 hour. Avoids hitting GitHub from every visitor.
export const revalidate = 3600;

const FIELDS = [
    'id',
    'name',
    'description',
    'html_url',
    'language',
    'stargazers_count',
    'forks_count',
    'topics',
    'fork',
    'updated_at',
];

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const perPage = Math.min(
        Math.max(parseInt(searchParams.get('per_page') || '30', 10) || 30, 1),
        100
    );

    const headers = {
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
    };

    // Optional: authenticated requests get 5000/h instead of 60/h.
    if (process.env.GITHUB_TOKEN) {
        headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    try {
        const res = await fetch(
            `https://api.github.com/users/${config.social.github}/repos?sort=updated&per_page=${perPage}`,
            {
                headers,
                next: { revalidate: 3600, tags: ['github-repos'] },
            }
        );

        if (!res.ok) {
            const body = await res.json().catch(() => ({}));
            return NextResponse.json(
                {
                    error: body.message || 'GitHub API error',
                    status: res.status,
                },
                { status: res.status }
            );
        }

        const data = await res.json();

        const trimmed = Array.isArray(data)
            ? data.map((repo) =>
                FIELDS.reduce((acc, key) => {
                    acc[key] = repo[key];
                    return acc;
                }, {})
            )
            : [];

        return NextResponse.json(trimmed);
    } catch (error) {
        console.error('GitHub API fetch error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch repos' },
            { status: 500 }
        );
    }
}
