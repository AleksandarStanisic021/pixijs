import { Application, Assets, Sprite } from "pixi.js";

(async () => {
  const app = new Application();
  await app.init({ background: "#1099bb", resizeTo: window });

  const texture = await Assets.load("/assets/bunny.png");
  const bunny = new Sprite(texture);
  bunny.anchor.set(0.5);
  bunny.position.set(app.screen.width / 2, app.screen.height / 2);
  app.stage.addChild(bunny);
})();
