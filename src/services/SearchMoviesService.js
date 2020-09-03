class SearchMoviesService {
  constructor() {
    this.baseUrl = "https://api.themoviedb.org/3";
    this.apiKey = "a5d9da0bec0cbce6fa2abb066af3d2a2";
    this.misc = "include_adult=false&language=en-US&page=1";
  }
  async getMoviesFromQuery(event, query) {
    event.preventDefault();

    const url = `${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${query}&${this.misc}`;

    try {
      const res = await fetch(url);
      return res.json();
    } catch (error) {
      console.error(error);
    }
  }

  async getAll(movieCategory) {
    const url = `${this.baseUrl}/movie/${movieCategory}?api_key=${this.apiKey}&${this.misc}`;

    try {
      const res = await fetch(url);
      return res.json();
    } catch (error) {
      console.error(error);
    }
  }

  async getMovieById(id) {
    const url = `${this.baseUrl}/movie/${id}?api_key=${this.apiKey}&${this.misc}`;

    try {
      const res = await fetch(url);
      return res.json();
    } catch (error) {
      console.error(error);
    }
  }

  async getFullCast(id) {
    const url = `${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}&${this.misc}`;

    try {
      const res = await fetch(url);
      return res.json();
    } catch (error) {
      console.error(error);
    }
  }
}

export default SearchMoviesService;
