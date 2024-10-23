import React from 'react'
import prisma from '@/prisma/db'
import { log } from 'console'

const Tickets = async () => {
    const tickets = await prisma.ticket.findMany()
    console.log(tickets);


    return (
        <div>Tickets</div>
    )
}

export default Tickets