import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Ticket } from '@prisma/client'
import React from 'react'

interface Props {
    tickets: Ticket[]
}

const DataTable = ({ tickets }: Props) => {
    return (
        <div className="w-full mt-8 px-4">
            <div className="w-full overflow-x-auto shadow-md rounded-lg">
                <Table className="min-w-full divide-y divide-gray-200 border">
                    <TableHeader className="">
                        <TableRow>
                            <TableHead className="px-6 py-3 text-left text-xs font-medium text-primary-900 uppercase tracking-wider">Title</TableHead>
                            <TableHead className="px-6 py-3 text-left text-xs font-medium text-primary-900 uppercase tracking-wider">Status</TableHead>
                            <TableHead className="px-6 py-3 text-left text-xs font-medium text-primary-900 uppercase tracking-wider">Priority</TableHead>
                            <TableHead className="px-6 py-3 text-left text-xs font-medium text-primary-900 uppercase tracking-wider">Created At</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="divide-y divide-gray-200">
                        {tickets && tickets.length > 0 ? tickets.map(ticket => (
                            <TableRow key={ticket.id} className="hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
                                <TableCell className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">{ticket.title}</TableCell>
                                <TableCell className="px-6 py-4 whitespace-nowrap text-sm" style={{ color: 'var(--muted-foreground)' }}>{ticket.status}</TableCell>
                                <TableCell className={`px-6 py-4 whitespace-nowrap text-sm ${getPriorityClass(ticket.priority)}`}>{ticket.priority}</TableCell>
                                <TableCell className="px-6 py-4 whitespace-nowrap text-sm" style={{ color: 'var(--muted-foreground)' }}>{new Date(ticket.createdAt).toLocaleDateString()}</TableCell>
                            </TableRow>
                        )) : (
                            <TableRow>
                                <TableCell colSpan={4} className="px-6 py-4 text-center text-sm" style={{ color: 'var(--muted-foreground)' }}>No tickets found</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

const getPriorityClass = (priority: string) => {
    switch (priority) {
        case 'HIGH':
            return 'text-red-500 font-semibold';
        case 'MEDIUM':
            return 'text-yellow-500 font-semibold';
        case 'LOW':
            return 'text-green-500 font-semibold';
        default:
            return 'var(--muted-foreground)';
    }
}

export default DataTable
