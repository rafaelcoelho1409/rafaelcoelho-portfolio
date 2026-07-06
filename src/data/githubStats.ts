// Snapshot of public GitHub data, fetched directly from the GitHub REST API.
// The github-readme-stats.vercel.app widget this used to depend on has its
// deployment paused by its maintainer (a known, ongoing outage affecting many
// sites, not specific to this repo) — https://github.com/anuraghazra/github-readme-stats/issues/4737
// Update by re-running the same API calls and editing the values below.
export const GITHUB_STATS_AS_OF = "July 2026";

export const GITHUB_STATS = {
  publicRepos: 27,
  followers: 17,
  totalStars: 5,
  memberSince: 2019,
};

export type LanguageStat = {
  name: string;
  percent: number;
};

// Byte-weighted across all non-fork public repos (same methodology as the
// original github-readme-stats top-langs card).
export const TOP_LANGUAGES: LanguageStat[] = [
  { name: "Jupyter Notebook", percent: 47.1 },
  { name: "HTML", percent: 20.2 },
  { name: "Python", percent: 18.5 },
  { name: "JavaScript", percent: 5.1 },
  { name: "SCSS", percent: 4.5 },
];
