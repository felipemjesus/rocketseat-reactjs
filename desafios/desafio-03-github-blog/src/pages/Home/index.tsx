import { useContextSelector } from "use-context-selector";
import { HomeContainer, PostCard, PostsContainer, ProfileContainer, ProfileStats, SearchForm } from "./styles";
import { GitHubContext } from "../../contexts/GitHubContext";

export function Home() {
  const issues = useContextSelector(GitHubContext, context => context.issues);

  return (
    <HomeContainer>
      <ProfileContainer>
        <ProfileStats>
          <img src="https://github.com/felipemjesus.png" alt="" />
          <div>
            <h1>Felipe Martins</h1>
            <p>Full Stack Developer</p>
          </div>
        </ProfileStats>
      </ProfileContainer>

      <SearchForm>
        <div>
          <h2>Publicações</h2>
          <span>6 publicações</span>
        </div>
        <input type="text" placeholder="Busque por tópicos" />
        <button type="submit">Pesquisar</button>
      </SearchForm>

      <PostsContainer>
        {issues.map(issue => (
          <PostCard key={issue.id}>
            <h2>{issue.title}</h2>
            <p>{issue.resume}</p>
          </PostCard>
        ))}
      </PostsContainer>

    </HomeContainer>
  )
}
