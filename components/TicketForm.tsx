"use client";
import React from 'react';
import { Form, FormControl, FormField, FormItem, FormLabel } from './ui/form';
import { ticketSchema } from '@/ValidationSchemas/tickets';
import { z } from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from './ui/input';
import "easymde/dist/easymde.min.css";
import SimpleMDE from "react-simplemde-editor";

type TicketFormData = z.infer<typeof ticketSchema>;

const TicketForm = () => {
    const form = useForm<TicketFormData>({
        resolver: zodResolver(ticketSchema),
    });

    async function onSubmit(values: z.infer<typeof ticketSchema>) {
        console.log(values);

    }

    return (
        <div>
            <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Ticket Title</FormLabel>
                                <FormControl>
                                    <Input placeholder='Ticket Title' {...field} />
                                </FormControl>
                            </FormItem>
                        )} />
                    <Controller
                        name="description"
                        control={form.control}
                        render={({ field }) => (
                            <SimpleMDE placeholder='Ticket Description' {...field} />
                        )} />
                </form>
            </Form>
        </div>
    );
};

export default TicketForm;
