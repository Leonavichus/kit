export const AddFriend = (user) => {
  return {
    type: "Add_Friend",
    payloader: {
      photo: user.picture.medium,
      name: user.name.first + " " + user.name.last,
      email: user.email,
      gender: user.gender,
      location: user.location.street.name,
      phone: user.phone,
      age: user.dob.age
    }
  };
};

export const RemoveFriend = (friend) => {
  return {
    type: "Remove_Friend",
    payloader: friend
  };
};
