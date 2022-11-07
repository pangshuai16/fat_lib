import GetAllKeys from "./getAllKeys"
import LeftJoin from "./leftJoin"
import InnerJoin from "./innerJoin";

const data = {
    getAllKeys: GetAllKeys,
    leftJoin: LeftJoin,
    innerJoin: InnerJoin
}

export const {
    getAllKeys,
    leftJoin,
    innerJoin
} = data

export default data
