import React, { FC } from 'react';

const Header: FC = function Header() {
  return (
    <div className="flex py-4 gap-1">
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-fg-green to-fg-cyan tracking-wide">
        zulfi's journal
      </h1>
      <span className="text-2xl font-extrabold blinking-cursor w-[10px]"></span>
    </div>
  );
};

export default Header;
