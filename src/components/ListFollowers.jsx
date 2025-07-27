import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { getGithubUsers } from "../services/githubService";

export function ListFollowers({ user }) {
    const [listUser, setListUser] = useState([]);

    useEffect(() => {
        async function loadList() {
            const followers = await getGithubUsers(user);
            setListUser(followers);
        }

        loadList();
    }, []);

    return (
        <div className="slide">
            <div className="title">
                <h1>Seguidores Recentes</h1>
            </div>

            <div className="list-users">
                {
                    listUser.map((user) => (
                        <div className="user" key={user.id}>
                            <div className="user-content">
                                <div className="image">
                                    <img src={user.avatar_url} alt="" />
                                </div>
                                <div className="name">
                                    <h2>{user.login}</h2>
                                    <span>{user.user_view_type == "public" ? "Conta Pública" : "Conta Privada"}</span>
                                </div>
                            </div>

                            <a href={user.html_url} target="_blank">
                                <FaGithub />
                            </a>

                        </div>
                    ))
                }
            </div>

        </div>
    );
}