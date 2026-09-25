import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname } from "node:path";

import { siteConfig } from "@/config/site";
import fallbackRepos from "@/data/projects.json";

export type ProjectRepo = {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  pushed_at: string;
  archived: boolean;
  stargazers_count: number;
};

type GitHubApiRepo = ProjectRepo & { fork?: boolean };

const CACHE_PATH = ".cache/github-repos.json";

function isBlocked(name: string): boolean {
  return (siteConfig.blocklistedRepos as readonly string[]).includes(name);
}

function sortRepos(repos: ProjectRepo[]): ProjectRepo[] {
  const featured = siteConfig.featuredRepos as readonly string[];
  return [...repos].sort((a, b) => {
    const aFeatured = featured.indexOf(a.name);
    const bFeatured = featured.indexOf(b.name);
    if (aFeatured !== -1 || bFeatured !== -1) {
      if (aFeatured === -1) return 1;
      if (bFeatured === -1) return -1;
      return aFeatured - bFeatured;
    }
    return new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime();
  });
}

function normalize(repos: GitHubApiRepo[]): ProjectRepo[] {
  return repos
    .filter((repo) => !repo.archived && !isBlocked(repo.name))
    .map(({ name, description, html_url, language, pushed_at, archived, stargazers_count }) => ({
      name,
      description,
      html_url,
      language,
      pushed_at,
      archived,
      stargazers_count,
    }));
}

async function fetchFromGitHub(): Promise<ProjectRepo[]> {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "User-Agent": "pareshkhaneja-portfolio",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  const token = process.env.GITHUB_TOKEN;
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(
    `https://api.github.com/users/${siteConfig.githubUsername}/repos?per_page=100&sort=pushed`,
    { headers },
  );

  if (!response.ok) {
    throw new Error(`GitHub API responded with ${response.status}`);
  }

  const data = (await response.json()) as GitHubApiRepo[];
  return sortRepos(normalize(data));
}

async function readCache(): Promise<ProjectRepo[] | null> {
  try {
    const cached = await readFile(CACHE_PATH, "utf-8");
    const parsed = JSON.parse(cached) as ProjectRepo[];
    return parsed.length > 0 ? sortRepos(parsed) : null;
  } catch {
    return null;
  }
}

async function writeCache(repos: ProjectRepo[]): Promise<void> {
  await mkdir(dirname(CACHE_PATH), { recursive: true });
  await writeFile(CACHE_PATH, JSON.stringify(repos, null, 2));
}

export async function getProjects(): Promise<ProjectRepo[]> {
  try {
    const repos = await fetchFromGitHub();
    await writeCache(repos);
    return repos;
  } catch {
    const cached = await readCache();
    if (cached) return cached;
    return sortRepos(fallbackRepos as ProjectRepo[]);
  }
}

export function formatUpdated(iso: string): string {
  return new Intl.DateTimeFormat("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(iso));
}
