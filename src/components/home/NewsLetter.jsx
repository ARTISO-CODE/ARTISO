import React, { useState, useEffect, useContext } from 'react';
import './NewsLetter.css';
import { messagePOPUP_Context } from '../../App';

const NewsLetter = () => {
    const [email, setEmail] = useState('');
    const { setMessagePOPUP } = useContext(messagePOPUP_Context);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        setMessagePOPUP({ show: true, message: 'Thank you for subscribing', type: 'success' });
        setEmail('');
        setTimeout(() => {
            setMessagePOPUP({ show: false, message: '', type: '' });
        }, 3000);
    };

    return (
        <section className="newsletter-section">
            <div className="newsletter-Home">
                <h2>Un accès privilégié à nos collections et à l'histoire de nos artisans</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Votre adresse e-mail..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit">Je m’abonne</button>
                </form>
            </div>
        </section>
    );
};

export default NewsLetter;