import ContactForm from "../components/ContactForm";

export default function ContactPage() {
    return (
        <>
            <head>
                <title>Contact Us - Heavenly Treatments</title>
                <meta name="description" content="Get in touch with Heavenly Treatments to schedule your appointment or ask any questions." />
                <meta name="robots" content="index, follow" />
            </head>
            <header>
                <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
            </header>
            <main className="container mx-auto px-4 py-8">
                <section>
                    <ContactForm />
                </section>
            </main>
        </>
    );
}