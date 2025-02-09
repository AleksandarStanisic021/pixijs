import { Application, Assets, Sprite } from "pixi.js";

(async () => {
  const app = new Application();
  //trlala
  var texture = await Assets.load("https://pixijs.com/assets/bunny.png");
  var sprite = new Sprite(texture);
  app.stage.addChild(sprite);
  app.stage.interactive = true;
  app.stage.on("pointermove", (event) => {
    sprite.x = event.data.global.x;
  });
  app.stage.on("pointerdown", (event) => {
    sprite.x = event. .global.x;
    sprite.y = event.data.global.y;
  });
})();
