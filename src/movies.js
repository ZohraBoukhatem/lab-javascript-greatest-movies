// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(moviesArray) {
  const arrayOfDirectors = moviesArray.map(function (elm) {
    return elm.director;
  });
  return arrayOfDirectors;
}




// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const arrayOfSpielbergMovies = moviesArray.filter((drama) => 
    drama.director == "Steven Spielberg" 
    && drama.genre.includes("Drama"))
return arrayOfSpielbergMovies.length
}




// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length == 0) {
        return 0
    } 
    const score = moviesArray.reduce(function(acc, movie){
        if (movie.score) {
            return acc + movie.score } else {
                return acc
        }
    },0)
    let avg = score / moviesArray.length
    return Math.round(avg*100)/100
}




// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovies = []
    moviesArray.forEach(function(elm){
        if (elm.genre.includes("Drama")) {
            dramaMovies.push(elm)
            }
    })
    return scoresAverage(dramaMovies)
    }








// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortedMovies = moviesArray.sort((elm1, elm2) => {
        return elm1.year - elm2.year})
      return sortedMovies
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

}






// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
