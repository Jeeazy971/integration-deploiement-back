/**
 * Calculate a person's age in years.
 *
 *
 * @param {object} p An object representing a person, implementing a birth Date parameter.
 * @returns {number} The age in years of p.
 */

export function calculateAge(p) {
    if (!p || typeof p !== 'object') {
        throw new Error('Invalid input');
    }
    if (!p.birth) {
        throw new Error('Invalid input: missing birth field');
    }
    if (!(p.birth instanceof Date) || isNaN(p.birth.getTime())) {
        throw new Error('Invalid input: birth must be a valid date');
    }

    const now = new Date();
    const birthDate = p.birth;

    // Normaliser les dates pour ne prendre en compte que jour/mois/année
    function normalizeDate(date) {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    }

    const normalizedNow = normalizeDate(now);
    const normalizedBirthDate = normalizeDate(birthDate);

    // Si la date de naissance est dans le futur, renvoyer 0
    if (normalizedBirthDate > normalizedNow) {
        return 0;
    }

    let age = normalizedNow.getFullYear() - normalizedBirthDate.getFullYear();

    // Comparer les mois et les jours pour vérifier si l'anniversaire est déjà passé cette année
    const hasBirthdayPassedThisYear =
        normalizedNow.getMonth() > normalizedBirthDate.getMonth() ||
        (normalizedNow.getMonth() === normalizedBirthDate.getMonth() &&
            normalizedNow.getDate() >= normalizedBirthDate.getDate());

    // Si l'anniversaire n'est pas encore passé cette année, décrémenter l'âge
    if (!hasBirthdayPassedThisYear) {
        age--;
    }

    return age;
}
