import { ArrowUp } from "lucide-react";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell">
        <span>© {new Date().getFullYear()} Anthony Bautista</span>
        <span>Built with care. Made to work.</span>
        <a href="#profile">
          Back to top <ArrowUp size={15} />
        </a>
      </div>
    </footer>
  );
}
