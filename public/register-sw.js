"use strict";

const stockSW = "/uv/uv.sw.js";
const swConfig = {
    scope: "/uv/service/",
};

async function registerSW() {
    if ("serviceWorker" in navigator) {
        await navigator.serviceWorker.register(stockSW, swConfig);
    } else {
        throw new Error("Your browser doesn't support service workers.");
    }
}
