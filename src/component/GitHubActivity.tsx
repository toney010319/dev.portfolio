import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";

type GitHubUser = { public_repos: number };
type GitHubRepo = { language: string | null; size: number; fork: boolean };
type Contribution = { date: string; count: number; level: number };
type ContributionResponse = { total: Record<string, number>; contributions: Contribution[] };

const GitHubActivity = ({ username }: { username: string }) => {
  const profileUrl = `https://github.com/${username}`;
  const [profile, setProfile] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [contributions, setContributions] = useState<Contribution[]>([]);
  const [allTimeTotal, setAllTimeTotal] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const options = { signal: controller.signal };
    Promise.allSettled([
      fetch(`https://api.github.com/users/${username}`, options).then((response) => {
        if (!response.ok) throw new Error("Profile unavailable");
        return response.json() as Promise<GitHubUser>;
      }),
      fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, options).then((response) => {
        if (!response.ok) throw new Error("Repositories unavailable");
        return response.json() as Promise<GitHubRepo[]>;
      }),
      fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=all`, options).then((response) => {
        if (!response.ok) throw new Error("Contributions unavailable");
        return response.json() as Promise<ContributionResponse>;
      }),
    ]).then(([profileResult, reposResult, contributionsResult]) => {
      if (profileResult.status === "fulfilled") setProfile(profileResult.value);
      if (reposResult.status === "fulfilled") setRepos(reposResult.value);
      if (contributionsResult.status === "fulfilled") {
        setContributions(contributionsResult.value.contributions);
        setAllTimeTotal(contributionsResult.value.contributions.reduce((sum, day) => sum + day.count, 0));
      }
      setLoading(false);
    });
    return () => controller.abort();
  }, [username]);

  const graphDays = useMemo(() => {
    const byDate = new Map(contributions.map((day) => [day.date, day]));
    return Array.from({ length: 364 }, (_, index) => {
      const date = new Date();
      date.setUTCHours(0, 0, 0, 0);
      date.setUTCDate(date.getUTCDate() - (363 - index));
      const key = date.toISOString().slice(0, 10);
      return byDate.get(key) ?? { date: key, count: 0, level: 0 };
    });
  }, [contributions]);

  const currentYearTotal = graphDays.reduce((sum, day) => sum + day.count, 0);
  const languages = useMemo(() => {
    const totals = new Map<string, number>();
    repos.filter((repo) => !repo.fork && repo.language).forEach((repo) =>
      totals.set(repo.language!, (totals.get(repo.language!) ?? 0) + Math.max(repo.size, 1)),
    );
    const total = Array.from(totals.values()).reduce((sum, value) => sum + value, 0);
    return Array.from(totals.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([name, value]) => ({ name, percent: total ? Math.round((value / total) * 100) : 0 }));
  }, [repos]);

  return (
    <section id="github-activity" className="github-section" aria-labelledby="github-heading">
      <div className="page-shell">
        <div className="github-heading">
          <div>
            <p className="eyebrow">Open source</p>
            <h2 id="github-heading">GitHub activity</h2>
            <p>A live snapshot of how I ship—contributions, stack focus, and public repositories.</p>
          </div>
          <a href={profileUrl} target="_blank" rel="noopener noreferrer">
            <Github size={16} /> @{username} <ArrowUpRight size={15} />
          </a>
        </div>

        <div className="github-dashboard">
          <article className="github-contribution-card">
            <div className="github-card-title">
              <div><h3>Contribution graph</h3><p>Last 52 weeks · live public contributions</p></div>
              <div className="github-legend" aria-hidden="true">
                <span>Less</span>
                {[0, 1, 2, 3, 4].map((level) => <i key={level} className={`level-${level}`} />)}
                <span>More</span>
              </div>
            </div>
            <div className="github-graph-scroller">
              <div className="github-graph" aria-label={`${currentYearTotal} public contributions during the last 52 weeks`}>
                {graphDays.map((day) => (
                  <span key={day.date} className={`activity-cell level-${Math.min(day.level, 4)}`} title={`${day.date}: ${day.count} contributions`} />
                ))}
              </div>
            </div>
            <div className="github-summary">
              <span><small>Public repos</small><strong>{profile?.public_repos ?? "—"}</strong></span>
              <span><small>All-time contributions</small><strong>{loading ? "…" : (allTimeTotal ?? "—")}</strong></span>
              <span><small>Profile</small><strong>@{username}</strong></span>
            </div>
          </article>

          <article className="github-language-card">
            <h3>Top languages</h3>
            <p>Based on my public, original repositories.</p>
            <div className="language-list">
              {languages.length ? languages.map((language) => (
                <div key={language.name}>
                  <div><span>{language.name}</span><strong>{language.percent}%</strong></div>
                  <span className="language-track"><i style={{ width: `${language.percent}%` }} /></span>
                </div>
              )) : Array.from({ length: 5 }, (_, index) => (
                <div className="language-loading" key={index}><span /><i /></div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default GitHubActivity;
