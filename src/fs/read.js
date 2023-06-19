import fs from "fs/promises"
import path from "path";
import { getDirnameFromUrl } from "../utils/utils.js";

const __dirname = getDirnameFromUrl(import.meta.url);
const fileToRead = path.join(__dirname, "files", "fileToRead.txt")

const read = async () => {
    try {
        const text = await fs.readFile(fileToRead, { encoding: 'utf8' });
        console.log(text);
    } catch {
        throw new Error ("FS operation failed");
    }
};

await read();