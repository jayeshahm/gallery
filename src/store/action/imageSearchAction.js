export const setImageData = (value,category)=>{
    return {
        type:"SET_IMAGE_DATA",
        data: value,
        category: category
    }
}

export const getImageData = (value) =>{
    return {
        type:"GET_IMAGE_DATA",
        text: value
    }
}