import Run from "./run"
import SingleRunning from "./singleRunning"
import UsePolling from "./usePolling"

const promise = {
    run: Run,
    singleRunning: SingleRunning,
    usePolling: UsePolling
}

export const {
    run,
    singleRunning,
    usePolling
} = promise

export default promise
