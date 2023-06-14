import fs from "fs/promises"
import path from "path";
import { getDirnameFromUrl, checkIfExists } from "../utils/utils.js";

const __dirname = getDirnameFromUrl(import.meta.url);
const freshFile = path.join(__dirname, "files", "fresh.txt");

const create = async () => {
    const isExisting = await checkIfExists(freshFile);
    if (isExisting) {
        throw new Error ("FS operation failed")
    } else {
        await fs.writeFile(freshFile, "I am fresh and young");
    }
};

await create();