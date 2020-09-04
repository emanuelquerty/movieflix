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

  async getAll(category, movieOrTv) {
    const url = `${this.baseUrl}/${movieOrTv}/${category}?api_key=${this.apiKey}&${this.misc}`;

    try {
      const res = await fetch(url);
      return res.json();
    } catch (error) {
      console.error(error);
    }
  }

  async getMovieById(id, movieOrTv) {
    const url = `${this.baseUrl}/${movieOrTv}/${id}?api_key=${this.apiKey}&${this.misc}`;

    try {
      const res = await fetch(url);
      return res.json();
    } catch (error) {
      console.error(error);
    }
  }

  async getFullCast(id, movieOrTv) {
    const url = `${this.baseUrl}/${movieOrTv}/${id}/credits?api_key=${this.apiKey}&${this.misc}`;

    try {
      const res = await fetch(url);
      return res.json();
    } catch (error) {
      console.error(error);
    }
  }
}

export default SearchMoviesService;
