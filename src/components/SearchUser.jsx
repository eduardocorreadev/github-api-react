import { useState } from "react";
import { getGithubUser } from "../services/githubService";

export default function SearchUser({ getData }) {
    const [input, setInput] = useState("");
    const [error, setError] = useState(false);

    async function handleSubmit(input) {
        const res = await getGithubUser(input);

        if (res.status != "404") {
            getData(res);
        } else {
            setError(true);
        }

    }

    return (
        <div className="search">
            <h3>Procurar Perfil do Github</h3>
            <div className="area">
                <input type="text" placeholder="@username in github" value={input} onChange={(e) => setInput(e.target.value)} />
                <button onClick={() => handleSubmit(input)}>Procurar</button>
            </div>

            {
                error && (
                    <div className="error-message">
                        <span>A conta não existe ou foi removida.</span>
                    </div>
                )
            }
        </div>
    );
}