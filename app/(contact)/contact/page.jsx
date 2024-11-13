/* eslint-disable react/no-unescaped-entities */
"use client"
import React from 'react';
import { motion } from 'framer-motion';
import BackgroundEffects from '@/components/ui/background-effects';
import ContactForm from './components/ContactForm';
import { toast } from 'sonner';
import { config } from '@/config';

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

    const contactInfo = config.contactInfo;

    return (
        <section className="relative flex items-center justify-center py-6" id="contact">
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

                <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-8 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-full lg:w-2/3 backdrop-blur-sm bg-secondary/5 p-6 rounded-2xl border border-secondary/10"
                    >
                        <ContactForm onSubmit={handleSubmit} />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="w-full lg:w-1/3 backdrop-blur-sm bg-secondary/5 p-6 rounded-2xl border border-secondary/10"
                    >
                        <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                        <div className="space-y-6">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="flex items-start space-x-4">
                                    <div className="p-2 rounded-lg bg-secondary/10">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">
                                            {info.label}
                                        </p>
                                        {info.link ? (
                                            <a
                                                href={info.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-primary hover:underline"
                                            >
                                                {info.value}
                                            </a>
                                        ) : (
                                            <p className="text-primary">
                                                {info.value}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;