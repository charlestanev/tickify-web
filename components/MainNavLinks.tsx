'use client'

import Link from 'next/link'
import React, { use } from 'react'

const MainNavLinks = () => {
    const links = [
        { href: '/', label: 'Dashboard' },
        { href: '/tickets', label: 'Tickets' },
        { href: '/users', label: 'Users' },
    ];


    return (
        <div className="flex items-center gap-2">
            {links.map(link => (
                <Link
                    href={link.href}
                    className='navbar-link'>
                    {link.label}
                </Link>
            ))}
        </div>
    )
}

export default MainNavLinks