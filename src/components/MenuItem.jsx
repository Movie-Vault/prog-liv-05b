// export const DropdownCategories = [
//     {
//         title: ''

//     }
// ]

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDQ2ZGU5N2Y3ZTVkNGE5NTVhOTNhYTIzM2NkNGQ2OCIsInN1YiI6IjY0ZjUxYTgyZjI5ZDY2MDEzYTIxNTE0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3W5rON1JqM34hNA_BR9tvn1JsCkYzSZb3hbiY_P4eCo'
    }
};

fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));