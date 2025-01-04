

import MessageForm from '@/Components/ContactPage/MessageForm';
import SectionTitle from '@/Components/Shared/SectionTitle';

import React from 'react';

const ContactPage = () => {
    return (
        <div className='min-h-screen container mx-auto'>
           <SectionTitle title={'Contact'} subTitle={"Let's Talk About Ideas"}/>
           <MessageForm/>
        </div>
    );
};

export default ContactPage;