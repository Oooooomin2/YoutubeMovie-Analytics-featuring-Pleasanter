import { YoutubeAPI } from "./model/YoutubeAPI";
import { CreateHtml } from "./model/CreateHtml";
import { CreatePieChart } from "./model/CreatePieChart";

$p.events.on_editor_load = function () {
    GetData();
    $p.getControl(`ClassA`).change(() => {
        $('#UiView').remove();
        GetData();
    });
    $p.getControl(`ClassB`).change(() => {
        $('#UiView').remove();
        GetData();
    });
}

function GetData() {
    $p.apiGet({
        id: $p.getControl(`ClassA`).val(),
        data: {
            ApiVersion: 1.1
        },
        done: data => {
            let youtubeApi = new YoutubeAPI(data.Response.Data[0].ClassHash.ClassA, $p.getControl(`ClassB`).val());
            let createHtml = new CreateHtml();
            youtubeApi.GetMovieInfoAsync()
                .then(data => {
                    console.log(data.items);
                    let idList = [];
                    for (let i = 0; i < data.items.length; i++) {
                        createHtml.Create($(`#Editor`), createHtml.UiHtml(
                            data.items[i].snippet.thumbnails.medium.url,
                            `https://www.youtube.com/watch?v=${data.items[i].id.videoId}`,
                            data.items[i].snippet.title));
                        idList.push(data.items[i].id.videoId);
                    }
                    $('.create-ui').wrapAll('<div id=UiView style="width:60%;display:inline-block;margin-top:60px;">');
                    return youtubeApi.GetStatisticsAsync(idList);
                })
                .catch(err => {
                    console.log(err);
                })
                .then(data => {
                    console.log(data.items);
                    let createPieChart = new CreatePieChart(100, 100, 50);
                    switch ($p.getControl(`ClassB`).val()) {
                        case `再生回数の多い順`:
                            for (let i = 0; i < data.items.length; i++) {
                                $($('.create-ui')[i]).append(createHtml.UiHtml_ViewCount(data.items[i].statistics.viewCount));
                            }
                            break;
                        case `Goodの多い順`:
                            for (let i = 0; i < data.items.length; i++) {
                                $($('.create-ui')[i]).append(createHtml.UiHtml_like_Dislike(data.items[i].statistics.likeCount, data.items[i].statistics.dislikeCount));
                                let dataset = [Number(data.items[i].statistics.likeCount), Number(data.items[i].statistics.dislikeCount)];
                                console.log(dataset);
                                createPieChart.Create(dataset, $('.create-ui')[i]);
                            }
                            break;
                        default:
                            break;
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        },
        fail: () => {
            console.log('失敗');
        }
    });

}