import fs from "fs/promises"
import path from "path";
import { getDirnameFromUrl } from "../utils/utils.js";

const __dirname = getDirnameFromUrl(import.meta.url);
const sourceDir = path.join(__dirname, "files");

const list = async () => {
    try {
        const fileList = await fs.readdir(sourceDir);
        console.log(fileList);
    } catch {
        throw new Error ("FS operation failed");
    }
};

await list();