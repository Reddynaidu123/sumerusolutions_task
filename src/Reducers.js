

export const INITIAL_STATE = {
   user_data:[]
  }
const postreducer=(state=INITIAL_STATE,action)=>{

// console.log("action",action.data.state)
    switch(action.type){
        case "posts":
            return{
                ...state,
                posts:state.user_data.push(action.data.state)
            }
            default:
                return state;
    }
}
export default postreducer;