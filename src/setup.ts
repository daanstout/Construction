import { App } from "./app/app";

export async function setup(ctx: Modding.ModContext) {
    const app = new App(ctx, game);
    await app.init();
}