import * as data from '../data.json';

export class YoutubeAPI {
    constructor(id, category) {
        this.id = id;
        this.category = category;
    }

    GetApiKey() {
        return data.ApiKey;
    }

    async GetMovieInfoAsync() {
        let orderby;
        switch (this.category) {
            case `再生回数の多い順`:
                orderby = `viewCount`;
                break;
            case `Goodの多い順`:
                orderby = `rating`;
                break;
            case `投稿順`:
                orderby = `date`;
                break;
        }

        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${this.id}&order=${orderby}&key=${this.GetApiKey()}`;
        const res = await fetch(url);
        return await res.json();
    }

    async GetStatisticsAsync(idList) {
        const url = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${idList.join(',')}&key=${this.GetApiKey()}`;
        const res = await fetch(url);
        return await res.json();
    }
}