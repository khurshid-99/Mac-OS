import MacWindow from "./MacWindow";
import githubData from "../../assets/github.json";
import "./gitHub.scss";

const GitCard = ({
  data = {
    id: 1,
    image: "",
    title: "",
    description: "",
    tags: "",
    repoLink: "",
    demoLink: "",
  },
}) => {
  return (
    <div className="card">
      <img src={data.image} alt="" />
      <h1>{data.title}</h1>
      <p className="description">{data.description}</p>

      <div className="tags">
        {data.tags.map((tag) => (
          <p className="tag">{tag}</p>
        ))}
      </div>
      <div className="urls">
        <a href={data.repoLink}>Github RepoLink</a>
       {data.demoLink && <a href={data.demoLink}>Live Demo</a>}
      </div>
    </div>
  );
};

const GitHub = () => {
  return (
    <MacWindow>
      <div className="cards">
        {githubData.map((data) => (
          <GitCard data={data} />
        ))}
      </div>
    </MacWindow>
  );
};

export default GitHub;
