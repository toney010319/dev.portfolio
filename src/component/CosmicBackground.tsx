import type { CSSProperties } from "react";

type ParticleStyle = CSSProperties & {
  "--particle-x": string;
  "--particle-y": string;
  "--particle-size": string;
  "--particle-opacity": number;
  "--particle-duration": string;
  "--particle-delay": string;
};

type StarStyle = CSSProperties & {
  "--star-x": string;
  "--star-y": string;
  "--star-length": string;
  "--star-duration": string;
  "--star-delay": string;
  "--star-angle": string;
};

const particles = Array.from({ length: 78 }, (_, index): ParticleStyle => ({
  "--particle-x": `${(index * 47 + 13) % 100}%`,
  "--particle-y": `${(index * 71 + 9) % 100}%`,
  "--particle-size": `${1.5 + (index % 3) * 0.75}px`,
  "--particle-opacity": 0.35 + (index % 5) * 0.1,
  "--particle-duration": `${4 + (index % 6)}s`,
  "--particle-delay": `${-(index % 8)}s`,
}));

const shootingStars: StarStyle[] = [
  ["8%", "10%", "150px", "4.8s", "0.5s", "24deg"],
  ["42%", "4%", "110px", "5.6s", "4.2s", "28deg"],
  ["70%", "18%", "180px", "6.2s", "8.5s", "22deg"],
  ["20%", "32%", "125px", "5.2s", "12.8s", "26deg"],
  ["58%", "42%", "145px", "6s", "16.1s", "25deg"],
].map(([x, y, length, duration, delay, angle]) => ({
  "--star-x": x,
  "--star-y": y,
  "--star-length": length,
  "--star-duration": duration,
  "--star-delay": delay,
  "--star-angle": angle,
}));

const CosmicBackground = () => (
  <div className="cosmic-background" aria-hidden="true">
    <div className="particle-field">
      {particles.map((style, index) => (
        <span className="cosmic-particle" style={style} key={index} />
      ))}
    </div>
    <div className="shooting-star-field">
      {shootingStars.map((style, index) => (
        <span className="shooting-star" style={style} key={index} />
      ))}
    </div>
  </div>
);

export default CosmicBackground;
