import { useQuery } from "@tanstack/react-query";

export interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  homepage: string | null;
}

export function useGithubRepos(username: string) {
  return useQuery({
    queryKey: ["github-repos", username],
    queryFn: async () => {
      const res = await fetch(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=12`
      );
      if (!res.ok) throw new Error("Failed to fetch repositories");
      return res.json() as Promise<Repo[]>;
    },
    staleTime: 1000 * 60 * 5,
  });
}
