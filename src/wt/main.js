import { Worker } from "worker_threads";
import path from "path";
import { getDirnameFromUrl } from "../utils/utils.js";

const CPUs = 8;
const START_NUMBER = 10;

const __dirname = getDirnameFromUrl(import.meta.url);
const workerScript = path.join(__dirname, "worker.js");

const fibonacciWorkerService = (number) => new Promise(resolve => {
    const worker = new Worker(workerScript, { workerData: number });

    worker.on('message', data => resolve({
        status: "resolved",
        data
    }));

    worker.on('error', () => resolve({
        status: "error",
        data: null
    }));
})

const performCalculations = async () => {
    const workersPool = Array.from({length: CPUs}, (_, i) => fibonacciWorkerService(START_NUMBER + i));
    const result = await Promise.all(workersPool);
    console.log(result);
};

await performCalculations();