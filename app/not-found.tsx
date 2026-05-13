import Link from 'next/link';
import PageShell from '@/components/PageShell';
import { siteConfig } from '@/data/site';

export const metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <PageShell>
      <div className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#1a56a0] mb-3">404</p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-5">
            That page does not exist
          </h1>
          <p className="text-slate-600 leading-relaxed mb-8 max-w-xl">
            The page you were looking for has moved or was never published. The links below cover the most useful starting points on the {siteConfig.name} site.
          </p>
          <ul className="space-y-3">
            <li>
              <Link href="/services/" className="text-[#1a56a0] underline">
                All implant treatment pillars
              </Link>
            </li>
            <li>
              <Link href="/location/" className="text-[#1a56a0] underline">
                Essex areas covered
              </Link>
            </li>
            <li>
              <Link href="/blog/" className="text-[#1a56a0] underline">
                Implant guides
              </Link>
            </li>
            <li>
              <Link href="/about/" className="text-[#1a56a0] underline">
                About the matching service
              </Link>
            </li>
            <li>
              <Link href="/" className="text-[#1a56a0] underline">
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </PageShell>
  );
}
