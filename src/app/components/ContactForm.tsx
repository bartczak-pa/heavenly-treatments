'use client';

import { useState } from 'react';

const treatmentsList = [
    { id: 'swedish', name: 'Swedish Massage' },
    { id: 'deep-tissue', name: 'Deep Tissue Massage' },
    { id: 'facial', name: 'Facial Treatment' },
    { id: 'reflexology', name: 'Reflexology' },
    { id: 'seasonal', name: 'Seasonal Treatment' },
];

const ContactForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [selectedTreatments, setSelectedTreatments] = useState<string[]>([]);
    const [preferredDate, setPreferredDate] = useState('');
    const [preferredTime, setPreferredTime] = useState('');
    const [message, setMessage] = useState('');
    const [acceptPolicy, setAcceptPolicy] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        // Basic validation
        const phoneRegex = /^[0-9\s\-\+]{7,15}$/; // Adjust regex as needed for your phone format
        if (!firstName || !lastName || !email || !phone || selectedTreatments.length === 0 || !message || !acceptPolicy) {
            setError('All fields are required.');
            return;
        }

        if (!phoneRegex.test(phone)) {
            setError('Please enter a valid phone number.');
            return;
        }

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ firstName, lastName, email, phone, selectedTreatments, preferredDate, preferredTime, message }),
            });

            const data = await response.json();
            if (data.success) {
                setSuccess('Your message has been sent successfully!');
                // Clear the form
                setFirstName('');
                setLastName('');
                setEmail('');
                setPhone('');
                setSelectedTreatments([]);
                setPreferredDate('');
                setPreferredTime('');
                setMessage('');
                setAcceptPolicy(false);
            } else {
                setError('Failed to send your message. Please try again later.');
            }
        } catch (err) {
            console.error('Error sending message:', err);
            setError('An error occurred while sending your message.');
        }
    };

    const handleTreatmentChange = (treatmentId: string) => {
        setSelectedTreatments(prev => 
            prev.includes(treatmentId) 
                ? prev.filter(id => id !== treatmentId) 
                : [...prev, treatmentId]
        );
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}
            <div className="flex space-x-4">
                <div className="flex-1">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        className="border p-2 w-full"
                    />
                </div>
                <div className="flex-1">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                        className="border p-2 w-full"
                    />
                </div>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border p-2 w-full"
                />
            </div>
            <div>
                <label htmlFor="phone">Phone Number</label>
                <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="border p-2 w-full"
                />
            </div>
            <div>
                <label>Treatments Interested In</label>
                <div className="space-y-2">
                    {treatmentsList.map(treatment => (
                        <div key={treatment.id}>
                            <input
                                type="checkbox"
                                id={treatment.id}
                                checked={selectedTreatments.includes(treatment.id)}
                                onChange={() => handleTreatmentChange(treatment.id)}
                            />
                            <label htmlFor={treatment.id}>{treatment.name}</label>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex space-x-4">
                <div className="flex-1">
                    <label htmlFor="preferredDate">Preferred Date</label>
                    <input
                        type="date"
                        id="preferredDate"
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="border p-2 w-full"
                    />
                </div>
                <div className="flex-1">
                    <label htmlFor="preferredTime">Preferred Time</label>
                    <input
                        type="time"
                        id="preferredTime"
                        value={preferredTime}
                        onChange={(e) => setPreferredTime(e.target.value)}
                        className="border p-2 w-full"
                    />
                </div>
            </div>
            <div>
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    placeholder="Please let me know of any allergies or medical conditions, e.g., pregnancy."
                    className="border p-2 w-full"
                />
            </div>
            <div>
                <input
                    type="checkbox"
                    id="acceptPolicy"
                    checked={acceptPolicy}
                    onChange={() => setAcceptPolicy(!acceptPolicy)}
                    required
                />
                <label htmlFor="acceptPolicy">
                    I accept that cancelling confirmed booking with less than 24 hours notice will result in a 50% charge.
                </label>
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2">
                Send Message
            </button>
        </form>
    );
};

export default ContactForm; 