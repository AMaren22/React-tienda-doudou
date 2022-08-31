 export const checkInputsVoid = (params) =>{

    const values = Object.values(params)
    const isVoid = values.includes('')

    return isVoid
 }