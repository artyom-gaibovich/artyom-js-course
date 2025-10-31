const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Папка с видео
const VIDEO_DIR = path.join(__dirname, "videos");

// Стрим видео с поддержкой Range
app.get("/video/:name", (req, res) => {
	const videoName = req.params.name;
	const videoPath = path.join(VIDEO_DIR, videoName);
	console.log(videoPath);
	if (!fs.existsSync(videoPath)) {
		return res.status(404).send("Видео не найдено");
	}

	const stat = fs.statSync(videoPath);
	const fileSize = stat.size;
	const range = req.headers.range;

	if (!range) {
		// Если Range не указан — отдать целиком
		res.writeHead(200, {
			"Content-Length": fileSize,
			"Content-Type": "videos/webm",
		});
		fs.createReadStream(videoPath).pipe(res);
		return;
	}

	// Парсим Range, пример: "bytes=12345-"
	const parts = range.replace(/bytes=/, "").split("-");
	const start = parseInt(parts[0], 10);
	const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
	const chunkSize = end - start + 1;

	const stream = fs.createReadStream(videoPath, { start, end });

	res.writeHead(206, {
		"Content-Range": `bytes ${start}-${end}/${fileSize}`,
		"Accept-Ranges": "bytes",
		"Content-Length": chunkSize,
		"Content-Type": "videos/webm",
	});

	stream.pipe(res);
});

app.listen(PORT, () =>
	console.log(`🎥 Сервер запущен: http://localhost:${PORT}/video/demo.webm`)
);
