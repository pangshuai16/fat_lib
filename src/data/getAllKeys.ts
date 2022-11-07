export default function getAllKeys(array: Object[]) {
    const keys: string[] = array.map(item => Object.keys(item)).flat()
    return [...new Set(keys)]
}
