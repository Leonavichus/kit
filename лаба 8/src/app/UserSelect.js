const initialUserState = {
  friends: []
};

export default function (state = initialUserState, action) {
  switch (action.type) {
    case "Add_Friend":
      const friendlist = state.friends;
      for (var i = 0; i < friendlist.length; i++) {
        if (action.payloader === friendlist[i]) {
        }
      }
      return {
        ...state,
        friends: [...state.friends, action.payloader]
      };
    case "Remove_Friend":
      return {
        ...state,
        friends: state.friends.filter((friends) => friends !== action.payloader)
      };

    default:
      return state;
  }
}
