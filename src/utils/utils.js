import { fileURLToPath } from "url";
import { dirname } from "path";
import { stat } from "fs/promises";

export const getFilenameFromUrl = fileURLToPath;

export const getDirnameFromUrl = (url) => dirname(fileURLToPath(url));

export const checkIfExists = async (path) => {
  let isExisting = false;
  try {
    await stat(path);
    isExisting = true;
  } catch {
    isExisting = false;
  }
  return isExisting;
}