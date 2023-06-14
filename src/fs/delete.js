import fs from "fs/promises"
import path from "path";
import { getDirnameFromUrl } from "../utils/utils.js";

const __dirname = getDirnameFromUrl(import.meta.url);
const filetoRemove = path.join(__dirname, "files", "fileToRemove.txt");

const remove = async () => {
    try {
        await fs.rm(filetoRemove);
    } catch {
        throw new Error ("FS operation failed");
    }
};

await remove();