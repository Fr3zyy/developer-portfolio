/* eslint-disable react/no-unescaped-entities */
"use client"
import React from 'react';
import { motion } from 'framer-motion';
import BackgroundEffects from '@/components/ui/background-effects';
import ContactForm from './components/ContactForm';
import { toast } from 'sonner';

const ContactPage = () => {
    const handleSubmit = async (formData) => {
        try {
            console.log('Form submitted:', formData);
            toast.success("Thank you for your message. I'll get back to you soon.");
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error("Something went wrong. Please try again later.");
        }
    };

    return (
        <section className="relative flex items-center justify-center min-h-screen" id="contact">
            <BackgroundEffects
                variant="corners"
                colors={{ first: "secondary", second: "secondary" }}
                intensity="10"
                blurAmount="3xl"
            />

            <div className="container mx-auto px-6 py-20 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center space-y-4 mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-primary">
                        Get In Touch
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        Have a project in mind? Looking to collaborate? Drop me a message,
                        and let's create something amazing together.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-full max-w-lg backdrop-blur-sm bg-secondary/5 p-6 rounded-2xl border border-secondary/10"
                >
                    <ContactForm onSubmit={handleSubmit} />
                </motion.div>
            </div>
        </section>
    );
};

export default ContactPage;
