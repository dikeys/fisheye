export class MediaFactory{

   static createVideo(photographerName,element){
    let video = document.createElement("video");
    video.classList.add("photographer-media__img");
    let source = document.createElement("source");
    source.setAttribute(
        "src",
        new URL(
            `assets/images/media/${
                photographerName.split(" ")[0]
            }/${element.video}`,
            "http://fisheye2/"
        )
    );
    source.setAttribute("type", "video/mp4");
    video.appendChild(source);
    return video
    }


    static createImage(photographerName,element){
        let imgMedia = document.createElement("img");
        imgMedia.classList.add("photographer-media__img");
        imgMedia.tabIndex = "0";
        imgMedia.src = new URL(
            `assets/images/media/${photographerName.split(" ")[0]}/${
                element.image
            }`,
            "http://fisheye2/"
        );
        imgMedia.alt = element.title;
        return imgMedia
    }
}