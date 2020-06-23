export const updObjInArr = (items, id, objPropName, newObjProps) => {
    debugger
   return items.map(i => {
        if (i[objPropName] === id) {
            return {
                ...i,
                ...newObjProps
            }
        }
        return i
    })
}