// const API_KEY = "555c9ff4fc5288d5396dc63d8cadf61d" ; 
const requests = {
    fetchTrending :'/movie/upcoming?api_key=555c9ff4fc5288d5396dc63d8cadf61d&language=en-US&page=1',
    fetchNetflixOriginals: '/discover/tv?api_key=555c9ff4fc5288d5396dc63d8cadf61d&with_gen=231',
    fetchTopRated:'/movie/top_rated?api_key=555c9ff4fc5288d5396dc63d8cadf61d&language=en-US ',
    fetchActionMovies : '/discover/movie?api_key=555c9ff4fc5288d5396dc63d8cadf61d&with_genres=28',
    fetchComedyMovies : '/discover/movie?api_key=555c9ff4fc5288d5396dc63d8cadf61d&with_genres=35',
    fetchHorrorMovies : '/discover/movie?api_key=555c9ff4fc5288d5396dc63d8cadf61d&with_genres=27',
    fetchRomanceMovies : '/discover/movie?api_key=555c9ff4fc5288d5396dc63d8cadf61d&with_genres=10749',
    fetchDocumentaries : '/discover/movie?api_key=555c9ff4fc5288d5396dc63d8cadf61d&with_genres=99',
    
}
export default requests ;