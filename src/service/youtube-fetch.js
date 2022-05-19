class YoutubeFetch {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }

  async mostPopular() {
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=KR&maxResults=26&key=${this.apiKey}`,
        this.getRequestOptions
      );
      const data = await response.json();
      return data.items;
    } catch (error) {
      return console.log('error', error);
    }
  }

  async search(keyword) {
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=26&q=${keyword}&regionCode=KR&type=video&key=${this.apiKey}`,
        this.getRequestOptions
      );
      const result_1 = await response.json();
      return result_1.items.map((item) => ({ ...item, id: item.id.videoId }));
    } catch (error) {
      return console.log('error', error);
    }
  }
}
export default YoutubeFetch;
