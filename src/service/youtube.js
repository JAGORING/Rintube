class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
  }

  async mostPopular() {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        regionCode: 'KR',
        maxResults: 30,
      },
    });
    return response.data.items;
  }

  async search(keyword) {
    const response = await this.youtube.get('search', {
      params: {
        part: 'snippet',
        regionCode: 'KR',
        maxResults: 30,
        type: 'video',
        q: keyword,
      },
    });
    return response.data.items;
  }
}

export default Youtube;
