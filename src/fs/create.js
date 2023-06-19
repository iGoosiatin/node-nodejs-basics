import fs from "fs/promises"
import path from "path";
import { getDirnameFromUrl } from "../utils/utils.js";

const __dirname = getDirnameFromUrl(import.meta.url);
const freshFile = path.join(__dirname, "files", "fresh.txt");

const create = async () => {
    try {
        await fs.writeFile(freshFile, "I am fresh and young", { flag: "wx" });
    } catch {
        throw new Error ("FS operation failed");
    }
};

await create();