'use client'

import Link from 'next/link';
import { SidebarContainer } from './style';

const infosHeader = {
  nav: {
    home: { name: 'home', href: '/' },
    langs: { name: 'langs', href: '/langs' },
  },
};

export default function Sidebar() {
  const navItems = Object.values(infosHeader.nav);

  return (
    <SidebarContainer>
      <div className="left">
        {navItems.slice(0, 2).map((item) => (
          <Link key={item.name} href={item.href}>
            {item.name}
          </Link>
        ))}
      </div>
      <div className="right">
        {navItems.slice(2).map((item) => (
          <Link key={item.name} href={item.href}>
            {item.name}
          </Link>
        ))}
      </div>
    </SidebarContainer>
  );
}
