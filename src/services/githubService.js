export async function getGithubUser(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const result = await response.json();

        return result;
    } catch (err) {
        console.log(err);
    }
}

export async function getGithubUsers(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/followers`);
        const result = await response.json();

        return result;
      } catch (err) {
        console.log(err);
      }
}