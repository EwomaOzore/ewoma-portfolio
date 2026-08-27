import React from "react";
import { links } from "@/constants";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-content flex-col items-start justify-between gap-6 px-6 py-8 sm:flex-row sm:items-center">
        <p className="font-serif italic text-muted">
          © {new Date().getFullYear()} Ewomaoghene Ozore
        </p>
        <div className="flex items-center gap-6 text-sm text-muted">
          <a
            href="/projects"
            className="transition-colors hover:text-foreground"
          >
            Projects
          </a>
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${links.email}`}
            className="transition-colors hover:text-foreground"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
