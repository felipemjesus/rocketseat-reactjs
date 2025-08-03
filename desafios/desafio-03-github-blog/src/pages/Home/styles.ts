import styled from "styled-components";

export const HomeContainer = styled.div`

`

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  background: ${({ theme }) => theme["base-profile"]};
  padding: 2rem;
  border-radius: 10px;
  margin-top: -10rem;
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);
  border: 2px solid ${({ theme }) => theme["base-border"]};

  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }

  h1 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme["base-title"]};
  }

  p {
    margin-top: 0.5rem;
    color: ${({ theme }) => theme["base-text"]};
  }
`

export const ProfileLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme["blue"]};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  span {
    color: ${({ theme }) => theme["base-span"]};
  }

  a {
    color: ${({ theme }) => theme["blue"]};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const ProfileStats = styled.div`
  display: flex;
  gap: 1.5rem;

  div {
    display: flex;
    flex-direction: column;

    strong {
      color: ${({ theme }) => theme["base-subtitle"]};
    }

    span {
      color: ${({ theme }) => theme["base-text"]};
    }
  }
`

export const SearchForm = styled.form`
  margin-top: 3rem;
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    padding: 0.75rem;
    border-radius: 6px;
    border: 2px solid ${({ theme }) => theme["base-border"]};
    background: ${({ theme }) => theme["base-input"]};
    color: ${({ theme }) => theme["base-text"]};

    &::placeholder {
      color: ${({ theme }) => theme["base-label"]};
    }
  }

  button {
    padding: 0.75rem 1.5rem;
    background: ${({ theme }) => theme["blue"]};
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
      background: ${({ theme }) => theme["blue"]}CC; // Slightly darker on hover
    }
  }
`

export const PostsContainer = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`

export const PostCard = styled.div`
  background: ${({ theme }) => theme["base-post"]};
  padding: 2rem;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: ${({ theme }) => theme["base-post"]}CC; // Slightly darker on hover
  }

  h2 {
    font-size: 1.25rem;
    color: ${({ theme }) => theme["base-title"]};
    margin-bottom: 0.5rem;
  }

  p {
    color: ${({ theme }) => theme["base-text"]};
    margin-bottom: 1rem;
  }

  footer {
    display: flex;
    justify-content: space-between;
    color: ${({ theme }) => theme["base-span"]};
  }
`
