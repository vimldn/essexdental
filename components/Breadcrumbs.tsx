import Link from 'next/link';
import { Breadcrumb } from '@/lib/breadcrumbs';

export default function Breadcrumbs({ items, onDark }: { items: Breadcrumb[]; onDark?: boolean }) {
  const last = items.length - 1;
  return (
    <nav aria-label="Breadcrumb" className="text-xs">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, idx) => {
          const isLast = idx === last;
          const href = item.url.replace(/^https?:\/\/[^/]+/, '') || '/';
          return (
            <li key={item.url} className="flex items-center gap-1.5">
              {!isLast ? (
                <>
                  <Link
                    href={href}
                    className={onDark ? 'text-white/60 hover:text-white' : 'text-slate-500 hover:text-[#1a56a0]'}
                  >
                    {item.name}
                  </Link>
                  <span className={onDark ? 'text-white/30' : 'text-slate-300'}>/</span>
                </>
              ) : (
                <span className={onDark ? 'text-white' : 'text-slate-900'} aria-current="page">
                  {item.name}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
