import Link from "next/link";
import { Container } from "@/components/ui/Container";

const links = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Clients", href: "/clients" },
  { label: "Insights", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="relative bg-black">
      <div className="h-px w-full bg-white/10" />
      <Container className="py-12">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="text-lg font-semibold text-white">Aflink Events Ltd</div>
            <div className="mt-2 text-sm text-white/70">
              Rwanda-based event partner delivering corporate-grade operations with creative excellence.
            </div>

            <div className="mt-6 text-sm text-white/60">
              Kigali, Rwanda<br />
              info@aflinkevents.rw<br />
              +250 …<br />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-3 sm:grid-cols-3">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm font-medium text-white/70 hover:text-white"
                >
                  {l.label}
                </Link>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/60">
              <a className="hover:text-white" href="#" target="_blank" rel="noreferrer">Facebook</a>
              <a className="hover:text-white" href="#" target="_blank" rel="noreferrer">Instagram</a>
              <a className="hover:text-white" href="#" target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="hover:text-white" href="#" target="_blank" rel="noreferrer">YouTube</a>
            </div>

            <div className="mt-10 text-xs text-white/45">
              © {new Date().getFullYear()} Aflink Events Ltd. All rights reserved.
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
