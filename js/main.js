// class GetData{

// }

class Header{
    placeToRenderHeader;
    headerElement;
    figureElement;
    logoIElement;
    logoHeadingElement;

    constructor(placeToRenderHeader) {
        this.placeToRenderHeader = document.getElementsByTagName(placeToRenderHeader)[0];
        this.headerElement = document.createElement("header");
        this.headerElement.classList = "header";

        this.figureElement = document.createElement("figure");
        this.figureElement.classList = "header__logo";

        this.logoIElement = document.createElement("i");
        this.logoIElement.classList = "fa-solid fa-podcast";

        this.logoHeadingElement = document.createElement("h1");
        this.logoHeadingElement.classList = "header__podcast";
        this.logoHeadingElement.innerText = "Collection of Happiness";
    }

    render() {
        this.headerElement.appendChild(this.figureElement);
        this.figureElement.appendChild(this.logoIElement);
        this.figureElement.appendChild(this.logoHeadingElement);

        this.placeToRenderHeader.appendChild(this.headerElement);
    }
}

class PodcastMain{
    placeToRenderPodcastMain;
    leftSection;
    rightSection;

    constructor(placeToRenderPodcastMain) {
        this.placeToRenderPodcastMain = document.getElementsByTagName(placeToRenderPodcastMain)[0];

        this.mainElement = document.createElement("main");
        this.mainElement.classList = "podcast";

        this.leftSection = new PodcastLeftSection(this.mainElement);
        this.rightSection = new PodcastRightSection(this.mainElement, this);
    }

    render() {
        this.placeToRenderPodcastMain.appendChild(this.mainElement);
        this.leftSection.render();
        this.rightSection.render();
    }
}

class PodcastLeftSection{
    mainElement;
    podcastMain;

    constructor(mainElement, podcastMain) {
        this.mainElement = mainElement;
        this.bankyMain = podcastMain;

        this.leftSectionElement = document.createElement("section");
        this.leftSectionElement.classList = "podcast__section podcast__section--left";

        this.cardsElement = document.createElement("ul");
        this.cardsElement.classList = "podcast__cards";

        this.cardElement = document.createElement("li");
        this.cardElement.classList = "podcast__card";

        this.cardImgElement = document.createElement("img");
        this.cardImgElement.classList = "card__img";

        this.cardDateElement = document.createElement("h3");
        this.cardDateElement.classList = "card__date";

        this.cardTitleElement = document.createElement("h3");
        this.cardTitleElement.classList = "card__title";       
    }

    render() {
        this.mainElement.appendChild(this.leftSectionElement);

        this.leftSectionElement.appendChild(this.cardsElement);
        this.cardsElement.appendChild(this.cardElement);
        this.cardElement.appendChild(this.cardImgElement);
        this.cardElement.appendChild( this.cardDateElement);
        this.cardElement.appendChild(this.cardTitleElement);
    }
}

class PodcastRightSection{
    mainElement;
        
    constructor(mainElement) {
        this.mainElement = mainElement;

        this.rightSectionElement = document.createElement("section");
        this.rightSectionElement.classList = "podcast__section podcast__section--right";

        this.detailElement = document.createElement("ul");
        this.detailElement.classList = "podcast__detail";

        this.imgElement = document.createElement("li");
        this.imgElement.classList = "podcast__img";

        this.imgImageElement = document.createElement("img");
        this.imgImageElement.classList = "podcast__image";

        this.imgDateElement = document.createElement("h3");
        this.imgDateElement.classList = "podcast__date";

        this.imgTitleElement = document.createElement("h3");
        this.imgTitleElement.classList = "podcast__title";  
        
        this.descriptionElement = document.createElement("li");
        this.descriptionElement.classList = "podcast__description";

        this.descriptionPElement = document.createElement("p");
        this.descriptionPElement.classList = "podcast__p";

        this.audioElement = document.createElement("li");
        this.audioElement.classList = "podcast__audio";

        this.audioAudioElement = document.createElement("audio");

        this.audioButtonElement = document.createElement("button");
        this.audioButtonElement.classList = "podcast__button";

        this.audioAElement = document.createElement("a");
    }

    render() {
        this.mainElement.appendChild(this.rightSectionElement);

        this.rightSectionElement.appendChild(this.detailElement);
        this.detailElement.appendChild(this.imgElement);
        this.imgElement.appendChild(this.imgImageElement);
        this.imgElement.appendChild( this.imgDateElement);
        this.imgElement.appendChild(this.imgTitleElement);

        this.detailElement.appendChild(this.descriptionElement);
        this.descriptionElement.appendChild(this.descriptionPElement);

        this.detailElement.appendChild(this.audioElement);
        this.audioElement.appendChild(this.audioAudioElement);
        this.audioElement.appendChild(this.audioButtonElement);
        this.audioButtonElement.appendChild(this.audioAElement);
    }
}

class Footer{
    placeToRenderFooter;
    footerElement;
    footerHeadingElement;

    constructor(placeToRenderFooter) {
        this.placeToRenderFooter = document.getElementsByTagName(placeToRenderFooter)[0];
        this.footerElement = document.createElement("footer");
        this.footerElement.classList = "footer";

        this.footerHeadingElement = document.createElement("h2");
        this.footerHeadingElement.classList = "footer__header";
        this.footerHeadingElement.innerText = "Gemaakt door - Ahmet Asut SD2C MediaCollege";
    }

    render() {
        this.footerElement.appendChild(this.footerHeadingElement);

        this.placeToRenderFooter.appendChild(this.footerElement);
    }
}

class App{
    podcastHeader;
    podcastMain;
    GetDataFromApi;

    constructor() {
        this.header = new Header("body");
        this.podcastMain = new podcastMain("body");

        this.header.render();
        this.podcastMain.render();
    }
}

const app = new App();