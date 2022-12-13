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
<<<<<<< Updated upstream
  }

  addBananas() {}
=======
    const div = document.querySelector("#emojis");
    div.innerHTML = "";
    this.emojis.forEach(emoji => {
      const emojiP = document.createElement("p");
      emojiP.innerText = emoji;
      div.appendChild(emojiP);
    })
  }

  addBananas() {
    this.emojis = this.emojis.map(emoji => emoji + this.banana);
  }
>>>>>>> Stashed changes
}
