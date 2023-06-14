import { fileURLToPath } from "url";
import { dirname } from "path";
import { stat } from "fs/promises";

export const getFilenameFromUrl = fileURLToPath;

export const getDirnameFromUrl = (url) => dirname(fileURLToPath(url));
