import { createHash } from "crypto";
import path from "path";
import { getDirnameFromUrl } from "../utils/utils.js";

const __dirname = getDirnameFromUrl(import.meta.url);
const file = path.join(__dirname, "files", "fileToCalculateHashFor.txt");

const calculateHash = async () => {
    const hash = createHash('sha256').update(file).digest('hex');
    console.log(hash);
};

await calculateHash();