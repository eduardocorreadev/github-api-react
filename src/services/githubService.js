export async function getGithubUser(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const result = await response.json();

        return result;
    } catch (error) {
        console.log(error);
    }
}