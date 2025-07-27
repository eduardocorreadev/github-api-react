import { useState } from "react";
import { getGithubUser } from "../services/githubService";

export default function SearchUser({ getData }) {
    const [input, setInput] = useState("");

    async function handleSubmit(input) {
        const res = await getGithubUser(input);
        getData(res);
    }

    return (
        <div className="search">
            <h3>Procurar Perfil do Github</h3>
            <div className="area">
                <input type="text" placeholder="@username in github" value={input} onChange={(e) => setInput(e.target.value)} />
                <button onClick={() => handleSubmit(input)}>Procurar</button>
            </div>
        </div>
    );
}