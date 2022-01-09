export default class GenerateGif {  
  static async getGif(tag) {
    try {
      const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${process.env.API_KEY}&tag=${tag}&rating=g`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}