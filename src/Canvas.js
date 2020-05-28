const Canvas = require("canvas");
const jimp = require("jimp");
const GIFEncoder = require("gifencoder");
const circle = require('@jimp/plugin-circle');
const configure = require('@jimp/custom');
const fetch = require("node-fetch");
const NEKO = "https://nekobot.xyz/api/imagegen?type";

// load custom plugins
configure({ plugins: [circle] }, jimp);

class Canvacord {

    /**
     * batslap
     * @param {Image1} image1 first image
     * @param {Image2} image2 second image
     * @returns <Buffer>
     */
    async batslap(image1, image2) {
        if (!image1) throw new Error("first image was not provided!");
        if (!image2) throw new Error("second image was not provided!");
        let base = await jimp.read(__dirname+"/assets/batslap.png");
        image1 = await jimp.read(image1);
        image2 = await jimp.read(image2);
        base.resize(1000, 500);
        image1.resize(220, 220);
        image2.resize(200, 200);
        base.composite(image2, 580, 260);
        base.composite(image1, 350, 70);
        let raw = await base.getBufferAsync("image/png");
        return raw;
    }

    /**
     * beautiful
     * @param {Image} image image
     * @returns <Buffer>
     */
    async beautiful(image) {
        if (!image) throw new Error("image was not provided!");
        let base = await jimp.read(__dirname +"/assets/beautiful.png");
        base.resize(376, 400);
        let img = await jimp.read(image);
        img.resize(84, 95);
        base.composite(img, 258, 28);
        base.composite(img, 258, 229);
        let raw = await base.getBufferAsync("image/png");
        return raw;
    }

    /**
     * facepalm
     * @param {Image} image image
     * @returns <Buffer>
     */
    async facepalm(image) {
        if (!image) throw new Error("image was not provided!");
        let canvas = Canvas.createCanvas(632, 357);
        let ctx = canvas.getContext("2d");
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, 632, 357);
        let avatar = await Canvas.loadImage(image);
        ctx.drawImage(avatar, 199, 112, 235, 235);
        let layer = await Canvas.loadImage(__dirname +"/assets/facepalm.png");
        ctx.drawImage(layer, 0, 0, 632, 357);
        return canvas.toBuffer();
    }

    /**
     * gay
     * @param {Image} image Image
     * @returns <Buffer>
     */
    async gay(image) {
        if (!image) throw new Error("image was not provided!");
        let bg = await Canvas.loadImage(__dirname +"/assets/gay.png");
        let img = await Canvas.loadImage(image);
        const canvas = Canvas.createCanvas(400, 400);
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, 400, 400);
        ctx.drawImage(bg, 0, 0, 400, 400);
        return canvas.toBuffer();
    }

    /**
     * kiss
     * @param {image1} image1 first image
     * @param {image2} image2 second image
     * @returns <Buffer>
     */
    async kiss(image1, image2) {
        if (!image1) throw new Error("first image was not provided!");
        if (!image2) throw new Error("second image was not provided!");
        const canvas = Canvas.createCanvas(768, 574);
        const ctx = canvas.getContext("2d");
        const background = await Canvas.loadImage(__dirname +"/assets/kiss.png");
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        const avatar = await Canvas.loadImage(image1);
        const avatar1 = await Canvas.loadImage(image2);
        ctx.drawImage(avatar1, 370, 25, 200, 200);
        ctx.drawImage(avatar, 150, 25, 200, 200);
        return canvas.toBuffer();
    }

    /**
     * rip
     * @param {Image} image Image
     * @returns <Buffer>
     */
    async rip(image) {
        if (!image) throw new Error("image was not provided!");
        const canvas = Canvas.createCanvas(244, 253);
        const ctx = canvas.getContext("2d");
        const background = await Canvas.loadImage(__dirname +"/assets/rip.png");
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        const avatar = await Canvas.loadImage(image);
        ctx.drawImage(avatar, 63, 110, 90, 90);
        return canvas.toBuffer();
    }

    /**
     * spank
     * @param {image1} image1 first image
     * @param {image2} image2 second image
     * @returns <Buffer>
     */
    async spank(image1, image2) {
        if (!image1) throw new Error("first image was not provided!");
        if (!image2) throw new Error("second image was not provided!");
        let bg = await jimp.read(__dirname +"/assets/spank.png");
        image1 = await jimp.read(image1);
        image2 = await jimp.read(image2);
        bg.resize(500, 500);
        image1.resize(140, 140);
        image2.resize(120, 120);
        bg.composite(image2, 350, 220);
        bg.composite(image1, 225, 5);
        let raw = await bg.getBufferAsync("image/png");
        return raw;
    }

    /**
     * trash
     * @param {Image} image Image
     * @returns <Buffer>
     */
    async trash(image) {
        if (!image) throw new Error("image was not provided!");
        let bg = await jimp.read(__dirname +"/assets/trash.png");
        image = await jimp.read(image);
        image.resize(309, 309);
        image.blur(5);
        bg.composite(image, 309, 0);
        let raw = await bg.getBufferAsync("image/png");
        return raw;
    }

    /**
     * blur
     * @param {Image} image Image
     * @param {Number} level blur level
     * @returns <Buffer>
     */
    async blur(image, level = 5) {
        if (!image) throw new Error("image was not provided!");
        image = await jimp.read(image);
        image.blur(isNaN(level) ? 5 : parseInt(level));
        let raw = await image.getBufferAsync("image/png");
        return raw;
    }

    /**
     * greyscale
     * @param {Image} image Image
     * @returns <Buffer>
     */
    async greyscale(image) {
        if (!image) throw new Error("image was not provided!");
        image = await jimp.read(image);
        image.greyscale();
        let raw = await image.getBufferAsync("image/png");
        return raw;
    }

    /**
     * sepia
     * @param {Image} image Image
     * @returns <Buffer>
     */
    async sepia(image) {
        if (!image) throw new Error("image was not provided!");
        image = await jimp.read(image);
        image.sepia();
        let raw = await image.getBufferAsync("image/png");
        return raw;
    }

    /**
     * invert
     * @param {Image} image Image
     * @returns <Buffer>
     */
    async invert(image) {
        if (!image) throw new Error("image was not provided!");
        image = await jimp.read(image);
        image.invert();
        let raw = await image.getBufferAsync("image/png");
        return raw;
    }

    /**
     * delete
     * @param {Image} image Image
     * @returns <Buffer>
     */
    async delete(image) {
        if (!image) throw new Error("image was not provided!");
        let bg = await jimp.read(__dirname + "/assets/delete.png");
        image = await jimp.read(image);
        image.resize(195, 195);
        bg.composite(image, 120, 135);
        let raw = await bg.getBufferAsync("image/png");
        return raw;
    }

    /**
     * color
     * @param {Color} color name/hex
     * @returns <Buffer>
     */
    async color(color = "#FFFFFF") {
        const canvas = Canvas.createCanvas(2048, 2048);
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        return canvas.toBuffer();
    }

    /**
     * trigger
     * @param {Image} image image
     * @returns <Buffer>
     */
    async trigger(image) {
        if (!image) throw new Error("image was not provided!");
        const base = await Canvas.loadImage(__dirname +"/assets/triggered.png");
        const img = await Canvas.loadImage(image);
        const GIF = new GIFEncoder(256, 310)
        GIF.start();
        GIF.setRepeat(0);
        GIF.setDelay(15);
        const canvas = Canvas.createCanvas(256, 310);
        const ctx = canvas.getContext('2d');
        const BR = 20;
        const LR = 10;
        for (var i = 0; i < 9; i++) {
            ctx.clearRect(0, 0, 256, 310);
            ctx.drawImage(img, Math.floor(Math.random() * BR) - BR, Math.floor(Math.random() * BR) - BR, 256 + BR, 310 - 54 + BR);
             ctx.fillStyle = '#FF000033';
            ctx.fillRect(0, 0, 256, 310);
            ctx.drawImage(base, Math.floor(Math.random() * LR) - LR, 310 - 54 + Math.floor(Math.random() * LR) - LR, 256 + LR, 54 + LR);
            GIF.addFrame(ctx);
        };
        GIF.finish();
        return GIF.out.getData();
    }
    
    /**
     * hitler
     * @param {Image} image Image
     * @returns <Buffer>
     */
    async hitler(image) {
        if (!image) throw new Error("Image was not provided!");
        let bg = await jimp.read(__dirname + "/assets/hitler.png");
        let img = await jimp.read(image);
        img.resize(140, 140);
        bg.composite(img, 46, 43);
        let raw = await bg.getBufferAsync("image/png");
        return raw;
    }
    
    /**
     * bed
     * @param {image1} image1 first image
     * @param {image2} image2 second image
     * @returns <Buffer>
     */
    async bed(image1, image2) {
        if (!image1) throw new Error("first image was not provided!");
        if (!image2) throw new Error("second image was not provided!");
        let bg = await jimp.read(__dirname +"/assets/bed.png");
        image1 = await jimp.read(image1);
        image2 = await jimp.read(image2);
        image1.resize(100, 100);
        image2.resize(70, 70);
        let image3 = image1.clone().resize(70, 70);
        bg.composite(image1, 25, 100);
        bg.composite(image1, 25, 300);
        bg.composite(image3, 53, 450);
        bg.composite(image2, 53, 575);
        let raw = await bg.getBufferAsync("image/png");
        return raw;
    }
    
    /**
     * wanted
     * @param {image} Image
     * @returns <Buffer>
     */
    async wanted(image) {
        if (!image) throw new Error("no image provided!");
        let base = await jimp.read(__dirname + "/assets/wanted.png");
        let img = await jimp.read(image);
        img.resize(447, 447);
        base.composite(img, 145, 282);
        let raw = await base.getBufferAsync("image/png");
        return raw;
    }

    /**
     * circle
     * @param {Image} image Image
     * @returns <Buffer>
     */
    async circle(image) {
        if (!image) throw new Error("image was not provided!");
        image = await jimp.read(image);
        image.circle();
        let raw = await image.getBufferAsync("image/png");
        return raw;
    }

    // Beta endpoints
    
    /**
     * jail
     * @param {image} Image
     * @returns <Buffer>
     */
    async jail(image) {
        if (!image) throw new Error("no image provided!");
        let canvas = Canvas.createCanvas(350, 350);
        let ctx = canvas.getContext("2d");
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, 350, 350);
        let avatar = await Canvas.loadImage(image);
        ctx.drawImage(avatar, 0, 0, 350, 350);
        let layer = await Canvas.loadImage(__dirname +"/assets/jail.png");
        ctx.drawImage(layer, 0, 0, 350, 350);
        return canvas.toBuffer();
    }

    /**
     * affect
     * @param {image} Image
     * @returns <Buffer>
     */
    async affect(image) {
        if (!image) throw new Error("no image provided!");
        let base = await jimp.read(__dirname + "/assets/affect.png");
        let img = await jimp.read(image);
        img.resize(200, 157);
        base.composite(img, 180, 383);
        let raw = await base.getBufferAsync("image/png");
        return raw;
    }


   // External apis
   /*
   /**
     * clyde
     * @param {string} Text
     * @returns <Buffer>
     */
    async clyde(text) {
        if (!text) throw new Error("no text provided!");
        let i = await fetch(`${NEKO}=clyde&text=${text}`);
        i = i.json();
        let base = await jimp.read(i.message);
        let raw = await base.getBufferAsync("image/png");
        return raw;
    }

    /**
     * blurple
     * @param {image} image
     * @returns <Buffer>
     */
    async blurple(image) {
        if (!image) throw new Error("no image provided!");
        let i = await fetch(`${NEKO}=blurpify&image=${image}`);
        i = i.json();
        let base = await jimp.read(i.message);
        let raw = await base.getBufferAsync("image/png");
        return raw;
    }*/
}

module.exports = Canvacord;
