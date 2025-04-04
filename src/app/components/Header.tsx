'use client';

import Link from 'next/link';

const Header = () => {
    return (
        <header className="navbar bg-base-200">
            <div className="navbar-start">
                <Link href="/" className="btn btn-ghost normal-case text-xl">Heavenly Treatments</Link>
            </div>
            <div className="navbar-center">
                <ul className="menu menu-horizontal p-0">
                    <li><Link href="/treatments">Treatments</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </div>
        </header>
    );
};

export default Header; 