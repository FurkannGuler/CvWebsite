import Link from 'next/link';

import React from 'react'


const logo = "logo.svg";

const Logo = () => {
  return (
    <div className="flex">
      <Link href="/">
        <img src={logo} alt="" className="w-40 max-[800px]:w-28" />
      </Link>
    </div>
  );
}

export default Logo