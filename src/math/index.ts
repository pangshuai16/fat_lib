import Sum from "./sum"
import Avg from "./avg"
import Variance from "./variance"
import Std from "./std"

const math = {
    sum: Sum,
    avg: Avg,
    variance: Variance,
    std: Std
}

export const {
    sum,
    avg,
    variance,
    std
} = math

export default math
