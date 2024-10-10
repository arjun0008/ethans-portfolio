import Link from "next/link";

import { RiBehanceLine, RiDribbbleLine, RiFacebookLine, RiInstagramLine, RiPinterestLine, RiYoutubeLine } from 'react-icons/ri';

const Socials = () => {
  return (
    <div className="flex items-start gap-x-5 text-lg">
      <Link href={'youtube.com'} className="hover:text-accent transition-all duration-300"><RiYoutubeLine /></Link>
      <Link href={'instagram.com'} className="hover:text-accent transition-all duration-300"><RiInstagramLine /></Link>
      <Link href={'facebook.com'} className="hover:text-accent transition-all duration-300"><RiFacebookLine /></Link>
      <Link href={'dribble.com'} className="hover:text-accent transition-all duration-300"><RiDribbbleLine /></Link>
      <Link href={'behance.com'} className="hover:text-accent transition-all duration-300"><RiBehanceLine /></Link>
      <Link href={'pinterest.com'} className="hover:text-accent transition-all duration-300"><RiPinterestLine /></Link>
    </div>
  );
};

export default Socials;
