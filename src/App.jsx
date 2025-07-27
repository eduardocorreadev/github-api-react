import { useEffect, useState } from "react";
import SearchUser from "./components/SearchUser";

import { FaGithub } from "react-icons/fa";

export function CardProfile({ user }) {
  return (
    <div className="card">
      <div className="container">
        <div className="banner">
          <a href={user.html_url} target="_blank">
            <FaGithub />
          </a>
        </div>

        <div className="user">
          <div className="image">
            <img src={user.avatar_url} alt="" />
          </div>
          <h3>{user.name}</h3>
          <span className="username">@{user.login}</span>

          <p className="bio">{user.bio || "Nada informado!"}</p>

          <ul>
            <li>
              <span>{user.followers} <span>seguidores</span></span>
            </li>
            <li>
              <span>{user.following} <span>seguindo</span></span>
            </li>
            <li>
              <span>{user.public_repos} <span>repositórios</span></span>
            </li>
          </ul>

        </div>
      </div>
    </div>
  );
}

export function ListFollowers({ user }) {

  const [listUser, setListUser] = useState([]);

  useEffect(() => {
    async function getList() {
      try {
        const response = await fetch(`https://api.github.com/users/${user}/followers`);
        const result = await response.json();

        setListUser(result);
      } catch (error) {
        console.log(error);
      }
    }

    getList();
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

export default function App() {

  const [user, setUser] = useState(null);

  return (
    <div className="wrapper">
      {
        user ? (
          <>
            <CardProfile user={user} />
            <ListFollowers user={user.login} />
          </>
        ) : (
          <SearchUser getData={(data) => setUser(data)} />
        )
      }
    </div>
  )
}