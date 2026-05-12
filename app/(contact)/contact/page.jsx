import React from 'react';
import ContactPageContent from './components/ContactPageContent';

export const metadata = {
    title: 'Contact',
    description:
        'Have a project in mind or want to collaborate? Send Fr3zy a message.',
    alternates: { canonical: '/contact' },
    openGraph: {
        title: 'Contact | Fr3zy',
        description:
            'Have a project in mind or want to collaborate? Send Fr3zy a message.',
        url: '/contact',
    },
    twitter: {
        title: 'Contact | Fr3zy',
        description:
            'Have a project in mind or want to collaborate? Send Fr3zy a message.',
    },
};

const ContactPage = () => <ContactPageContent />;

export default ContactPage;
