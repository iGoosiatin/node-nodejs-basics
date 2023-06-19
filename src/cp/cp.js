import path from "path";
import { fork } from "child_process";
import { getDirnameFromUrl } from "../utils/utils.js";

const __dirname = getDirnameFromUrl(import.meta.url);
const childModule = path.join(__dirname, "files", "script.js");

const spawnChildProcess = async (args) => {
    fork(childModule, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess([1, "a"]);
