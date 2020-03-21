
const postReducer = (state = [], action) => {
    switch(action.type) {
      case 'ADD_POST':
          //console.log(action)
        return state.concat([action.data]);
      default:
        return state;
    }
  }
  export default postReducer;