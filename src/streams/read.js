import { createReadStream } from "fs";

import path from "path";
import { getDirnameFromUrl } from "../utils/utils.js";

const __dirname = getDirnameFromUrl(import.meta.url);
const file = path.join(__dirname, "files", "fileToRead.txt");

const readStream = createReadStream(file);

const read = async () => {
    readStream.pipe(process.stdout);
};

await read();