import { GlobalNav } from '#/ui/global-nav';
import Header from '#/ui/header';
import React from 'react';

export const metadata = {
  title: 'Settings',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalNav />
      <div className="mx-auto h-full bg-slate-200 py-20 pl-0 lg:py-0 lg:pl-56">
        <div className="rounded-lg">
          <Header />
        </div>
        <div className="">{children}</div>
      </div>
    </>
  );
}
