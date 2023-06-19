import { createUnzip } from "zlib";
import { pipeline } from "stream";
import { createReadStream, createWriteStream } from "fs";
import path from "path";
import { getDirnameFromUrl } from "../utils/utils.js";

const __dirname = getDirnameFromUrl(import.meta.url);
const zippedFile = path.join(__dirname, "files", "archive.gz");
const unzippedFile = path.join(__dirname, "files", "fileToCompress.txt");

const zippedFileStream = createReadStream(zippedFile);
const unzipStream = createUnzip();
const unzippedFileStream = createWriteStream(unzippedFile);

const decompress = async () => {
    pipeline(
        zippedFileStream,
        unzipStream,
        unzippedFileStream,
        (error) => console.error(error)
    )
};

await decompress();