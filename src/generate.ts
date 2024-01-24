import { Canvas, Image, FontLibrary } from "skia-canvas";

export const generate = async (top: string, bottom: string) => {
	const topImg = await drawTop(top);
	return topImg;
}

	const drawTop = function (top: string) {
		const width = top.length * 120;
		const height = 140;
		const x = 0;
		const y = 0;

		const canvas = new Canvas(width, height);
		const ctx = canvas.getContext("2d");
		let img = new Image();
		FontLibrary.use("notobk", `./fonts/notobk-subset.otf`);

		ctx.font = "100px notobk";
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		// Set the stroke style and width
		ctx.strokeStyle = "#000000";
		ctx.lineWidth = 16;

		// Draw the text
		ctx.strokeText(top, x, y);

		// Set the gradient for the gold color
		const grad = ctx.createLinearGradient(0, 20, 0, 100);
		grad.addColorStop(0, "rgb(253,241,0)");
		grad.addColorStop(0.25, "rgb(245,253,187)");
		grad.addColorStop(0.4, "rgb(255,255,255)");
		grad.addColorStop(0.75, "rgb(253,219,9)");
		grad.addColorStop(0.9, "rgb(127,53,0)");
		grad.addColorStop(1, "rgb(243,196,11)");

		// Set the stroke style and width for the gold color
		ctx.strokeStyle = grad;
		ctx.lineWidth = 10;

		// Draw the text with the gold color
		ctx.strokeText(top, x, y);

		// Set the stroke style and width for the black color
		ctx.lineWidth = 6;
		ctx.strokeStyle = "#000";

		// Draw the text with the black color
		ctx.strokeText(top, x + 2, y - 3);

		// Use the Skia canvas to draw the text
		ctx.fillText(top, x, y);

		return canvas.toBuffer("png");
	};
