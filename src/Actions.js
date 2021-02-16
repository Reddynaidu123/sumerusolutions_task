import axios from 'axios';
export const getposts =()=>{
    return(dispatch)=>{
        axios.get('http://www.json-generator.com/api/json/get/cpHDBWKsRK?indent=2')
        .then(res=>{
            dispatch({
                type : "posts",
                data:res.data.data
            })
        })
    }
}