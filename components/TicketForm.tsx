"use client";
import React from 'react';
import { Form } from './ui/form';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ticketSchema } from '@/lib/schema';

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
