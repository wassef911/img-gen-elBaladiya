const Jimp = require("jimp");

class Event {
  constructor(img = "", logo = "", date = "") {
    this.img = img;
    this.logo = logo;
    this.date = date;
  }

  async createConference() {
    try {
      // load background and logo
      const img = await Jimp.read(this.img);
      const logo = await Jimp.read(this.logo);
      // load font
      const font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);

      // aad date and logo
      img.print(font, 1175, 845, this.date);
      img.blit(logo, 1420, 0);

      // save to path
      const outPath = "assets/newEvent.png";
      await img.writeAsync(outPath);
      return outPath;
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = Event;
