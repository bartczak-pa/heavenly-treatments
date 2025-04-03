import { treatmentCategoriesData } from './treatmentCategoriesData';

export const fetchTreatmentCategories = () => {
    try {
        if (!Array.isArray(treatmentCategoriesData)) {
            throw new Error('Treatment categories data is not in the expected format.');
        }
        return treatmentCategoriesData;
    } catch (error) {
        console.error('Error accessing treatment categories data:', error instanceof Error ? error.message : String(error));
        throw new Error('Could not load treatment categories. Please contact support.');
    }
};
