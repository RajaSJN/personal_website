"use client";
// import { useClient } from "react";
import { useState, useEffect } from "react";
import { createWorker, Worker, RecognizeResult, ImageLike } from "tesseract.js";

export default function OCRComponent() {
	// const [ocrText, setOcrText] = useState("");

	// useEffect(() => {
	//     loadTextFromPdf();
	// }, []);

	// const loadTextFromPdf = async () => {
	//     console.log("loadTextFromPdf");
	//     const worker: Worker = createWorker({
	//         logger: (m: any) => console.log(m),
	//     }) as any;
	//     await worker.load();
	//     console.log("I finished");
	//     await worker.loadLanguage("eng");
	//     await worker.initialize("eng");

	//     const pdfUrl = "/Resume.pdf";
	//     const response = await fetch(pdfUrl);
	//     console.log(response, "response");
	//     const pdfBytes = await response.arrayBuffer();

	//     const { data }: RecognizeResult = await worker.recognize({ imageData: pdfBytes as ImageLike });
	//     await worker.terminate();

	//     setOcrText(data.text);
	// };
	const ocrText = "Hello";

	return (
		<div>
			<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
				OCR Text
			</h2>
			<p className="mt-4 text-zinc-400">{ocrText}</p>
		</div>
	);
}
