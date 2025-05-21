import { MediaQueryFlag } from './mediaQueryFlag';
import Link from 'next/link';

export function ResponsiveLinkSmallScreen() {
  const isLargeScreen = MediaQueryFlag('(max-width: 768px)'); //If screen is less that the Tailwinds md breakpoint, the link is rendered.
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