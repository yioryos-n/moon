import { MediaQueryFlag } from './mediaQueryFlag';
import Link from 'next/link';

export function ResponsiveLink() {
  const isLargeScreen = MediaQueryFlag('(min-width: 768px)'); //If screen is less that the Tailwinds md breakpoint, the link is removed.
  return (
    <>
      {isLargeScreen && (
        <Link href="/about">
          <button type="button" className="font-serif text-xl text-shadow-small hover:text-shadow-hover hover:duration-500 hover:cursor-pointer">About</button>
        </Link>
      )}
    </>
  );
}