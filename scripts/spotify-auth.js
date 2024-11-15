import 'dotenv/config';
import express from 'express';
import open from 'open';
import fetch from 'node-fetch';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { config } from 'dotenv';
import { join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

config({ path: join(dirname(__dirname), '.env') });

const app = express();
const PORT = 3333;

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REDIRECT_URI = `http://localhost:${PORT}/callback`;
const SCOPE = 'user-read-recently-played user-read-currently-playing user-read-playback-state';

if (!CLIENT_ID || !CLIENT_SECRET) {
    console.error('\n❌ Missing CLIENT_ID or CLIENT_SECRET in .env.local file');
    process.exit(1);
}

const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');

app.get('/login', (req, res) => {
    const params = new URLSearchParams({
        client_id: CLIENT_ID,
        response_type: 'code',
        redirect_uri: REDIRECT_URI,
        scope: SCOPE,
    });

    res.redirect(`https://accounts.spotify.com/authorize?${params.toString()}`);
});

app.get('/callback', async (req, res) => {
    const { code } = req.query;

    try {
        const response = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                Authorization: `Basic ${basic}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                grant_type: 'authorization_code',
                code,
                redirect_uri: REDIRECT_URI,
            }),
        });

        const data = await response.json();
        
        res.send(`
            <html>
                <head>
                    <style>
                        body {
                            font-family: system-ui, -apple-system, sans-serif;
                            max-width: 800px;
                            margin: 0 auto;
                            padding: 2rem;
                            background: #1a1a1a;
                            color: #fff;
                        }
                        pre {
                            background: #2a2a2a;
                            padding: 1rem;
                            border-radius: 8px;
                            overflow-x: auto;
                        }
                        .token {
                            background: #2a2a2a;
                            padding: 1rem;
                            border-radius: 8px;
                            margin-top: 1rem;
                            position: relative;
                        }
                        .copy-button {
                            position: absolute;
                            top: 0.5rem;
                            right: 0.5rem;
                            background: #404040;
                            border: none;
                            color: #fff;
                            padding: 0.5rem 1rem;
                            border-radius: 4px;
                            cursor: pointer;
                        }
                        .copy-button:hover {
                            background: #505050;
                        }
                    </style>
                </head>
                <body>
                    <h1>🎉 Authentication Successful!</h1>
                    <p>Here's your refresh token:</p>
                    <div class="token">
                        <code>SPOTIFY_REFRESH_TOKEN=${data.refresh_token}</code>
                        <button class="copy-button" onclick="copyToken()">Copy</button>
                    </div>
                    <p>Add this line to your <code>.env.local</code> file.</p>
                    
                    <h2>Next Steps:</h2>
                    <ol>
                        <li>Copy the refresh token above</li>
                        <li>Add it to your .env file</li>
                        <li>Restart your Next.js development server</li>
                    </ol>

                    <script>
                        function copyToken() {
                            const token = 'SPOTIFY_REFRESH_TOKEN=${data.refresh_token}';
                            navigator.clipboard.writeText(token);
                            const button = document.querySelector('.copy-button');
                            button.textContent = 'Copied!';
                            setTimeout(() => {
                                button.textContent = 'Copy';
                            }, 2000);
                        }
                    </script>
                </body>
            </html>
        `);

    } catch (error) {
        console.error('Error getting tokens:', error);
        res.status(500).send('Error getting tokens');
    }
});

app.listen(PORT, () => {
    console.log('\n🎵 Spotify Auth Server Starting...');
    console.log(`\n⚡️ Server running at http://localhost:${PORT}`);
    console.log('\n🔑 Make sure you have added your Spotify Client ID and Secret to .env.local');
    console.log('\n🌐 Opening browser for authentication...\n');
    open(`http://localhost:${PORT}/login`);
});