"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail } from "lucide-react";

export default function Navigation() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <nav className="nav-full">
      <div className="nav-container">
        <Link href="/" className="logo">
          ND.
        </Link>

        <div className="nav-links">
          <Link href={isHome ? "#home" : "/"} className={isHome ? "active" : ""}>
            Home
          </Link>
          <Link href={isHome ? "#about" : "/#about"}>
            About
          </Link>
          <Link href={isHome ? "#skills" : "/#skills"}>
            Skills
          </Link>
          <Link href="/projects" className={pathname === "/projects" ? "active" : ""}>
            Projects
          </Link>
          <Link href={isHome ? "#contact" : "/#contact"}>
            Contact
          </Link>
        </div>

        <a href="mailto:nivrutti.dandekar@example.com" className="nav-email" aria-label="Email Me">
          <Mail size={18} />
        </a>
      </div>
    </nav>
  );
}
