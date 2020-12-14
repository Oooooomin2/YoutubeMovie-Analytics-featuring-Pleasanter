export class CreateHtml {
    UiHtml(src, href, title) {
        return `
            <div class="create-ui" style="display:inline-block;width:350px;height:300px;padding:40px;">
                <img src=${src} style="width:240px; height: 135px"></img>
                <p style="font-size:1em;height: 50px;"><a href=${href}>${title}</a></p>
            </div>`
    }

    UiHtml_like_Dislike(like, bad) {
        return `
            <p>Good: ${like}</p>
            <p>Bad: ${bad}</p>`;
    }

    UiHtml_ViewCount(viewCount) {
        return `
            <p>再生回数: ${viewCount}回</p>`;
    }

    Create($control, html) {
        $control.after(html);
    }
}