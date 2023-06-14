import fs from "fs/promises"
import path from "path";
import { getDirnameFromUrl, checkIfExists } from "../utils/utils.js";

const __dirname = getDirnameFromUrl(import.meta.url);
const sourceDir = path.join(__dirname, "files");
const targetDir = path.join(__dirname, "files_copy")

const copy = async () => {
    const isTargetDirExisting = await checkIfExists(targetDir);
    if (isTargetDirExisting) {
        throw new Error ("FS operation failed");
    }

    try {
        await fs.cp(sourceDir, targetDir, { recursive: true });
    } catch {
        throw new Error ("FS operation failed");
    }

};

await copy();
