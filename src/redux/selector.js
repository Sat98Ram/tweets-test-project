export const selectUsers = (state) => state.users.items;
export const selectIsLoading = (state) => state.users.isLoading;
export const selectFollowersCountById = (state, userId) => {
  const user = state.users.items.find((item) => item.id === userId);
  return user ? user.followers : null;
};
