import { treatments } from './treatmentsData';

// Helper function to filter treatments by category slug
const getTreatmentsByCategory = (categorySlug: string) => {
    return treatments.filter(treatment => treatment.category === categorySlug);
};

export const treatmentCategoriesData = [
    {
        id: 1,
        name: 'Body Treatments',
        description: 'Comprehensive treatments focusing on the body, including scrubs, massages, and holistic therapies.',
        image: '/images/body-treatments.jpg',
        slug: 'body-treatments',
        treatments: getTreatmentsByCategory('body-treatments'),
    },
    {
        id: 2,
        name: 'Facials',
        description: 'Luxurious facial treatments designed to nourish, soothe, and revitalize your skin using high-quality products.',
        image: '/images/facials.jpg',
        slug: 'facials',
        treatments: getTreatmentsByCategory('facials'),
    },
    {
        id: 3,
        name: 'Massages',
        description: 'A variety of massage techniques tailored to relieve tension, promote relaxation, and enhance well-being.',
        image: '/images/massages.jpg',
        slug: 'massages',
        treatments: getTreatmentsByCategory('massages'),
    },
    {
        id: 4,
        name: 'Reflexology',
        description: 'Therapeutic foot treatments that apply pressure to specific points to promote overall wellness and balance.',
        image: '/images/reflexology.jpg',
        slug: 'reflexology',
        treatments: getTreatmentsByCategory('reflexology'),
    },
    {
        id: 5,
        name: 'Seasonal Treatments',
        description: 'Special treatments designed to rejuvenate and refresh your skin according to the season, featuring unique ingredients.',
        image: '/images/seasonal-treatments.jpg',
        slug: 'seasonal-treatments',
        treatments: getTreatmentsByCategory('seasonal-treatments'),
    },
];
