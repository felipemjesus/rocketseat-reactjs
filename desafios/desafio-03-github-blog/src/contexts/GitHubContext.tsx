import { useEffect, useState, useCallback } from "react";
import { createContext } from "use-context-selector";
import { api } from "../lib/axios";

interface Issue {
  id: number;
  title: string;
  resume: string;
  body: string;
  created_at: string;
  user: {
    login: string;
    avatar_url: string;
  };
  url: string;
}

interface GitHubContextType {
  issues: Issue[];
  fetchIssues: (query?: string) => Promise<void>;
}

interface GitHubProviderProps {
  children: React.ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
export const GitHubContext = createContext({} as GitHubContextType);

export function GitHubProvider({ children }: GitHubProviderProps) {
const [issues, setIssues] = useState<Issue[]>([]);

  const fetchIssues = useCallback(async (query: string = '') => {
    const response = await api.get('/search/issues', {
      params: {
        q: query + ' repo:rocketseat-education/reactjs-github-blog-challenge',
      },
    });

    setIssues(response.data.items.map((issue: any) => ({
      id: issue.id,
      title: issue.title,
      body: issue.body,
      resume: (issue.body ?? '').substring(0, 200) + '...',
      created_at: issue.created_at,
      user: {
        login: issue.user.login,
        avatar_url: issue.user.avatar_url,
      },
      url: issue.html_url,
    })));
  }, []);

  useEffect(() => {
    fetchIssues();
  }, [fetchIssues]);

  return (
    <GitHubContext.Provider
      value={{
        issues,
        fetchIssues
      }}
    >
      {children}
    </GitHubContext.Provider>
  );
}
