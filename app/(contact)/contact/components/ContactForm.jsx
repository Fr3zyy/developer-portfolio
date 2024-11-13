"use client"
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';

const ContactForm = ({ onSubmit }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting }
    } = useForm();

    const onSubmitHandler = async (data) => {
        await onSubmit(data);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmitHandler)} className="space-y-6">
            <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-muted-foreground">
                            First Name
                        </label>
                        <Input
                            {...register("firstName", { required: "First name is required" })}
                            type="text"
                            placeholder="Fr3zy"
                            className="rounded-lg border-primary/20"
                        />
                        {errors.firstName && (
                            <span className="text-xs text-red-500">{errors.firstName.message}</span>
                        )}
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-muted-foreground">
                            Last Name
                        </label>
                        <Input
                            {...register("lastName", { required: "Last name is required" })}
                            type="text"
                            placeholder="Doe"
                            className="rounded-lg border-primary/20"
                        />
                        {errors.lastName && (
                            <span className="text-xs text-red-500">{errors.lastName.message}</span>
                        )}
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">
                        Email
                    </label>
                    <Input
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address"
                            }
                        })}
                        type="email"
                        placeholder="fr3zy@example.com"
                        className="rounded-lg border-primary/20"
                    />
                    {errors.email && (
                        <span className="text-xs text-red-500">{errors.email.message}</span>
                    )}
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">
                        Subject
                    </label>
                    <Input
                        {...register("subject", { required: "Subject is required" })}
                        type="text"
                        placeholder="How can I help you?"
                        className="rounded-lg border-primary/20"
                    />
                    {errors.subject && (
                        <span className="text-xs text-red-500">{errors.subject.message}</span>
                    )}
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">
                        Message
                    </label>
                    <Textarea
                        {...register("message", { required: "Message is required" })}
                        placeholder="Write your message here..."
                        className="rounded-lg border-primary/20 min-h-[150px]"
                    />
                    {errors.message && (
                        <span className="text-xs text-red-500">{errors.message.message}</span>
                    )}
                </div>
            </div>

            <Button 
                type="submit"
                className="w-full rounded-xl py-6 text-base font-semibold"
                disabled={isSubmitting}
            >
                {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
        </form>
    );
};

export default ContactForm;