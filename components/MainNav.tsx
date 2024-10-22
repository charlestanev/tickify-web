import Link from 'next/link'
import React from 'react'

const MainNav = () => {
    return (
        <div>
            <Link href="/">Dashboard</Link>
            <Link href="/tickets">Tickets</Link>
            <Link href="/users">Users</Link>
        </div>
    )
}

export default MainNav