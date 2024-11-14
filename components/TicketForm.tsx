"use client";
import React from 'react';
import { Form } from './ui/form';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// Define or import ticketSchema
const ticketSchema = z.object({
    // Define your schema here, for example:
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
});

type TicketFormData = z.infer<typeof ticketSchema>;

const TicketForm = () => {
    const form = useForm<TicketFormData>({
        resolver: zodResolver(ticketSchema),
    });

    return (
        <div>
            <Form {...form} />
        </div>
    );
};

export default TicketForm;
