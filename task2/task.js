export function findUniqueGenres(genres) {
    const result = [];
    
    for (const movieGenres of genres) {
        for (const genre of movieGenres) {
            if (!result.includes(genre)) {
                result.push(genre);
            }
        }
    }
    
    return result;
}