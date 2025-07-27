import { FaGithub } from "react-icons/fa";

export default function CardProfile({ user }) {
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