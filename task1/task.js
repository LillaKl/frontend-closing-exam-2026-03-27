export function findByActorNameAndGenre(allMovies, allActors, actorName, genre) {
    const actor = allActors.find(a => a.name === actorName);
    
    if (!actor) return [];
    
    return allMovies
    .filter(movie => 
        movie.actor_ids.includes(actor.id) && 
        movie.genres.includes(genre)
    )
    .map(movie => movie.title);
}