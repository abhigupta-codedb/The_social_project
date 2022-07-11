const KEY = "Group1";
export const loadState = async () => {
  try {
    const serializedState = localStorage.getItem(KEY);
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (e) {
    console.log("error in loading", e);
  }
};

export const saveState = async (state) => {
  try {
    for (const key in state) {
      const value = state[key];
      localStorage.setItem(key, JSON.stringify(value));
    }
  } catch (e) {
    console.log("error in saving", e);
  }
};
