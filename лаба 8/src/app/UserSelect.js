const initialUserState = {
  friends: []
};

export default function counterReducer(state = initialUserState, action) {
  switch (action.type) {
    case "Add_Friend":
      return {
        ...state,
        friends: [...state.friends, action.payload]
      };
    case "Remove_Friend":
      return {
        ...state,
        friends: state.friends.filter((friends) => friends !== action.payload)
      };

    default:
      return state;
  }
}
