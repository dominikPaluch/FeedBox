export class Slide {
    title: string;
    text: string;
    url: string;
    active: boolean;
    img: string;

    constructor(title: string, text: string, url: string, active: boolean, img: string){
        this.title = title;
        this.text = text;
        this.url = url;
        this.active = active;
        this.img = img;
    }
}
