class GetData{
    url = "";
    data = null;

    constructor(newURL) {
        this.url = newURL;
    }

    async getData() {
        await fetch(this.url)
            .then(function (response) {
                return response.json();
            }).then((data) => {
                this.data = data.episodes;
            });
        return this.data;
    }
}

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
        this.placeToRenderHeader.appendChild(this.headerElement);

        this.headerElement.appendChild(this.figureElement);
        this.figureElement.appendChild(this.logoIElement);
        this.figureElement.appendChild(this.logoHeadingElement);
    }
}

class PodcastMain{
    placeToRenderPodcastMain;
    leftSection;
    rightSection;

    constructor(placeToRenderPodcastMain, data) {
        this.placeToRenderPodcastMain = document.getElementsByTagName(placeToRenderPodcastMain)[0];

        this.mainElement = document.createElement("main");
        this.mainElement.classList = "podcast";

        this.leftSection = new leftSection(this.mainElement,  this.rightSection);
        this.rightSection = new rightSection(this.mainElement, data);
    }

    makeCardsFromData(data){
        this.leftSection.makeCardsFromData(data);
    }

    render() {
        this.placeToRenderPodcastMain.appendChild(this.mainElement);
        this.leftSection.render();
        this.rightSection.render();
    }
}

class leftSection{
    mainElement;
    rightSection;

    constructor(mainElement, rightSection) {
        this.mainElement = mainElement;
        this.rightSection = rightSection;

        this.leftSectionElement = document.createElement("section");
        this.leftSectionElement.classList = "podcast__section podcast__section--left";

        this.cardsElement = document.createElement("ul");
        this.cardsElement.classList = "podcast__cards";
    }

    makeCardsFromData(data) {
        this.cardsElement.innerHTML = "";
        for (let i = 0; i < 4; i++) {
            const random = Math.floor(Math.random() * data.length);

            this.cardElement = document.createElement("li");
            this.cardElement.classList = "podcast__card";
            
            this.cardImgElement = document.createElement("img");
            this.cardImgElement.classList = "card__img";
            this.cardImgElement.src = data[random].img;
            
            this.cardDateElement = document.createElement("h3");
            this.cardDateElement.classList = "card__date";
            this.cardDateElement.innerText = data[random].date;
            
            this.cardTitleElement = document.createElement("h3");
            this.cardTitleElement.classList = "card__title";
            this.cardTitleElement.innerText = data[random].title;
            
            this.rightSection.changeInnerData(data[random]);

            this.cardElement.onclick = () => {
                this.rightSection.changeInnerData(data[random]);
            }

            this.cardsElement.appendChild(this.cardElement);
            this.cardElement.appendChild(this.cardImgElement);
            this.cardElement.appendChild(this.cardDateElement);
            this.cardElement.appendChild(this.cardTitleElement);
        }
    }

    render() {
        this.mainElement.appendChild(this.leftSectionElement);
        this.leftSectionElement.appendChild(this.cardsElement);
    }
}

class rightSection{
    mainElement;

    constructor(mainElement, data) {
        console.log(mainElement);
        this.mainElement = mainElement;
        this.data = data

        this.rightSectionElement = document.createElement("section");
        this.rightSectionElement.classList = "podcast__section podcast__section--right";

        this.imgElement = document.createElement("article");
        this.imgElement.classList = "podcast__img";

        this.imgImageElement = document.createElement("img");
        this.imgImageElement.classList = "podcast__image";
        this.imgImageElement.src = "img/WhyWeNeedFriendswithSharedInterest.webp";

        this.imgDateElement = document.createElement("h3");
        this.imgDateElement.classList = "podcast__date";

        this.imgTitleElement = document.createElement("h3");
        this.imgTitleElement.classList = "podcast__title";

        this.descriptionElement = document.createElement("article");
        this.descriptionElement.classList = "podcast__description";

        this.descriptionPElement = document.createElement("p");
        this.descriptionPElement.classList = "podcast__p";
        this.descriptionPElement.innerHTML = "She's the world's leading animal behaviorist and an Autism advocacy leader. Guest Temple Grandin shares what kind of support systems led her to success, and we hear about how community, and lack thereof, affects our health and ability to succeed.";

        this.audioElement = document.createElement("article");
        this.audioElement.classList = "podcast__audio";

        this.audioAudioElement = document.createElement("audio");
        this.audioAudioElement.controls = true;
        this.audioAudioElement.src = "https://dts.podtrac.com/redirect.mp3/dovetail.prxu.org/_/192/dd6e09d0-92a2-40eb-be53-c7b24c023f8d/SoH_S07E20_Temple_Grandin_SEG_1_mix_3.5.mp3";
        // this.audioAudioElement.src = this.src;
        // this.src = data.audioAudioElement;

        this.audioButtonElement = document.createElement("button");
        this.audioButtonElement.classList = "podcast__button";

        this.audioAElement = document.createElement("a");
        this.audioAElement.innerText = "Source >>";
        this.audioAElement.href = "https://greatergood.berkeley.edu/podcasts/item/why_we_need_friends_with_shared_interests_temple_grandin_autism_advocacy";
        // this.src = data.url;
        // this.audioAElement.src = this.audioAElement;
    }

    changeInnerData(data) {
        this.imgTitleElement.innerText = data.title;
        this.imgImageElement.src = data.img;
        this.imgDateElement.innerText = data.date;
        this.descriptionPElement.innerText = data.summary;
        this.audioAudioElement.innerText = "audio";
        this.audioAElement.innerText = "source";
        this.audioAudioElement.src = data.audioAudioElement;
        this.audioAElement.href = data.audioAElement;
    }

    render() {
        this.mainElement.appendChild(this.rightSectionElement);
        this.rightSectionElement.appendChild(this.imgElement);
        this.imgElement.appendChild(this.imgImageElement);
        this.imgElement.appendChild(this.imgDateElement);
        this.imgElement.appendChild(this.imgTitleElement);
        this.rightSectionElement.appendChild(this.descriptionElement);
        this.descriptionElement.appendChild(this.descriptionPElement);
        this.rightSectionElement.appendChild(this.audioElement);
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

        this.render();
    }

    render() {
        this.placeToRenderFooter.appendChild(this.footerElement);

        this.footerElement.appendChild(this.footerHeadingElement);
    }
}

class App{
    getData;
    podcastHeader;
    podcastMain;
    podcastFooter;

    constructor() {
        this.podcastHeader = new Header("body");
        this.podcastMain = new PodcastMain("body");
        this.podcastFooter = new Footer("body");
        this.getData = new GetData("./data/transactions.json");

        this.getData.getData().then((data) => {
            this.podcastMain.makeCardsFromData(data);
        });

        this.podcastHeader.render();
        this.podcastMain.render();
        this.podcastFooter.render();
    }
}

const app = new App();
