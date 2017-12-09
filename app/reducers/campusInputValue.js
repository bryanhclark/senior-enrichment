import axios from 'axios'

//action type
const CAMPUS_NAME_CHANGE = 'CAMPUS_NAME_CHANGE'
const CAMPUS_IMGURL_CHANGE = 'CAMPUS_IMGURL_CHANGE'
const CAMPUS_DESC_CHANGE = 'CAMPUS_DESC_CHANGE'


//action creators
export const campusNameChange = (name) => {
    return {
        type: CAMPUS_NAME_CHANGE,
        name
    }
}
export const campusImgUrlChange = (igmUrl) => {
    return {
        type: CAMPUS_IMGURL_CHANGE,
        igmUrl
    }
}
export const campusDescChange = (description) => {
    return {
        type: CAMPUS_DESC_CHANGE,
        description
    }
}

//thunk






//sub-reducer





//export sub-reducer

