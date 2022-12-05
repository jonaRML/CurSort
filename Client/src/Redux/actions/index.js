import axios from 'axios';

export function getCourses(name) {

    return async (dispatch) => {
        let response = await axios.get(`http://localhost:3001/courses?name=${name}`)
        console.log(response)
        dispatch({
            type: "GET_COURSES",
            payload: response.data
        })

    }


}

export function getDetail(id) {

    return async (dispatch) => {
        let response = await axios.get(`http://localhost:3001/courses/${id}`)

        dispatch({
            type: "GET_DETAIL",
            payload: response.data
        })

    }


}
