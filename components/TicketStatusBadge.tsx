import React from 'react'
import { Badge } from './ui/badge'
import { Status } from '@prisma/client'
import { stat } from 'fs'

interface Props {
    status: Status
}

const statusMap: Record<
    Status,
    { label: string; color: "bg-red-500" | "bg-blue-500" | "bg-green-500" }
> = {
    OPEN: { label: "Open", color: "bg-red-500" },
    STARTED: { label: "Started", color: "bg-blue-500" },
    CLOSED: { label: "Closed", color: "bg-green-500" },
}


const TicketStatusBadge = ({ status }: Props) => {
    return (
        <Badge className={`${statusMap[status].color} text-background hover:${statusMap[status].color} hover:bg-opacity-75`}>
            {statusMap[status].label}
        </Badge>
    )
}

export default TicketStatusBadge