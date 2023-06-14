import { createGzip } from "zlib";
import { pipeline } from "stream";
import { createReadStream, createWriteStream } from "fs";
import path from "path";
import { getDirnameFromUrl } from "../utils/utils.js";

const __dirname = getDirnameFromUrl(import.meta.url);
const sourceFile = path.join(__dirname, "files", "fileToCompress.txt");
const zippedFile = path.join(__dirname, "files", "archive.gz");

const sourceFileStream = createReadStream(sourceFile);
const zipStream = createGzip();
const zippedFileStream = createWriteStream(zippedFile);

const compress = async () => {
    pipeline(
        sourceFileStream,
        zipStream,
        zippedFileStream,
        (error) => {
            console.log(error)
        }
    ) 
};

await compress();