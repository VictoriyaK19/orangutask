import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }

  setEmojis(emojis) {
    this.emojis = emojis;
    const div = document.querySelector("#emojis");
    div.innerHTML = "";
    this.emojis.forEach(emoji => {
      const emojiP = document.createElement("p");
      emojiP.innerText = emoji;
      div.appendChild(emojiP);
    })
  }

  addBananas() {
    const ptag = document.querySelectorAll("p");
    const div = document.querySelector("#emojis");
    this.emojis = this.emojis.map(emoji => emoji + this.banana);
    div.innerHTML = "";
    this.emojis.forEach(emoji => {
      const emojiP = document.createElement("p");
      emojiP.innerText = emoji;
      div.appendChild(emojiP);
    })
  }
}
