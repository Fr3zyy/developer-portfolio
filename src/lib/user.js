export async function fetchGithubData(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        if (!response.ok) {
            throw new Error('Failed to fetch Github data');
        }

        const repositories = await response.json();

        const topStarredRepositories = repositories
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .slice(0, 6);

        return topStarredRepositories;
    } catch (error) {
        console.error('Error fetching Github data:', error);
        return null;
    }
}