import express from "express";
import { config } from "dotenv";
import { generate } from "./generate";

config();

const app = express();

app.get("/", (req: any, res: any) => {
	const top = req.query.top;
	const bottom = req.query.bottom;

	if (!top || !bottom) {
		res
			.status(400)
			.send({
				message: "Bad Request: Missing query parameters top and bottom",
			});
	}
	if (top.length > 32 || bottom.length > 32) {
		res
			.status(413)
			.send({
				message:
					"Payload Too Large: Query parameters top and bottom must be less than 32 characters",
			});
	}
	const img = generate(top, bottom);
	res.setHeader("Content-Type", "image/png");
	res.send(img);
});

app.listen(process.env.PORT || 3000, () => {
	console.log(`Server listening on port ${process.env.PORT || 3000}`);
});
