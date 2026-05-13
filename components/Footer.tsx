import Link from 'next/link';
import Image from 'next/image';
import { SERVICES } from '@/data/services';
import { LOCATIONS } from '@/data/locations';
import { siteConfig } from '@/data/site';
import { BLOG_POSTS } from '@/data/blog';

export default function Footer() {
  const latestArticles = BLOG_POSTS.slice(0, 3);

  return (
    <footer className="bg-[#060e1c] pt-16 pb-10 border-t border-white/8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-white/10 rounded-md overflow-hidden flex items-center justify-center flex-shrink-0">
                <Image src="/logo.png" alt="" width={36} height={36} className="object-contain" />
              </div>
              <span className="text-lg font-bold text-white">{siteConfig.name}</span>
            </div>
            <p className="text-sm text-white/45 leading-relaxed mb-5">
              {siteConfig.description}
            </p>
            <p className="text-xs text-white/30">
              Independent matching service. Not a clinical provider.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-5 uppercase tracking-widest text-[10px]">Treatments</h4>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}/`}
                    className="text-sm text-white/45 hover:text-[#7fb9e8] transition-colors"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-5 uppercase tracking-widest text-[10px]">Essex coverage</h4>
            <ul className="space-y-3">
              {LOCATIONS.map((location) => (
                <li key={location.slug}>
                  <Link
                    href={`/location/${location.slug}/`}
                    className="text-sm text-white/45 hover:text-[#7fb9e8] transition-colors"
                  >
                    Dental implants in {location.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-5 uppercase tracking-widest text-[10px]">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/blog/" className="text-sm text-white/45 hover:text-[#7fb9e8] transition-colors">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="/services/" className="text-sm text-white/45 hover:text-[#7fb9e8] transition-colors">
                  All treatments
                </Link>
              </li>
              <li>
                <Link href="/location/" className="text-sm text-white/45 hover:text-[#7fb9e8] transition-colors">
                  All locations
                </Link>
              </li>
              <li>
                <Link href="/about/" className="text-sm text-white/45 hover:text-[#7fb9e8] transition-colors">
                  About
                </Link>
              </li>
            </ul>
            {latestArticles.length > 0 && (
              <>
                <h4 className="text-white font-bold mt-8 mb-5 uppercase tracking-widest text-[10px]">Latest guides</h4>
                <ul className="space-y-3">
                  {latestArticles.map((article) => (
                    <li key={article.slug}>
                      <Link
                        href={`/blog/${article.slug}/`}
                        className="text-sm text-white/45 hover:text-[#7fb9e8] transition-colors line-clamp-2 leading-snug"
                      >
                        {article.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>

        <div className="border-t border-white/8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] uppercase font-semibold tracking-widest text-white/30">
            &copy; {new Date().getFullYear()} {siteConfig.name}. Independent referral facilitator. Not a dental provider.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy/" className="text-[10px] uppercase font-semibold tracking-widest text-white/30 hover:text-[#7fb9e8] transition-colors">
              Privacy
            </Link>
            <Link href="/terms/" className="text-[10px] uppercase font-semibold tracking-widest text-white/30 hover:text-[#7fb9e8] transition-colors">
              Terms
            </Link>
            <Link href="/about/" className="text-[10px] uppercase font-semibold tracking-widest text-white/30 hover:text-[#7fb9e8] transition-colors">
              About
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
