import { treatments } from './treatmentsData';

export const fetchTreatmentsData = () => {
    try {
        if (!Array.isArray(treatments)) {
            throw new Error('Treatments data is not in the expected format.');
        }
        return treatments;
    } catch (error) {
        console.error('Error accessing treatments data:', error instanceof Error ? error.message : String(error));
        throw new Error('Could not load treatments. Please contact support.');
    }
};
