import fs from "fs/promises"
import path from "path";
import { getDirnameFromUrl, checkIfExists } from "../utils/utils.js";

const __dirname = getDirnameFromUrl(import.meta.url);
const sourceDir = path.join(__dirname, "files");
const targetDir = path.join(__dirname, "files_copy")

const copy = async () => {
    const isSourceDirExisting = await checkIfExists(sourceDir);
    if (!isSourceDirExisting) {
        throw new Error ("FS operation failed");
    }

    const isTargetDirExisting = await checkIfExists(targetDir);
    if (isTargetDirExisting) {
        throw new Error ("FS operation failed");
    }

    await fs.cp(sourceDir, targetDir, { recursive: true });
};

await copy();
