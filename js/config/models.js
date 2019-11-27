import AsyncStorage from '@react-native-community/async-storage';

export const addFaves = async favId => {
  try {
    return await AsyncStorage.setItem(
      `${favId}`,
      JSON.stringify({id: favId, faved_on: new Date()}),
    );
  } catch (e) {
    console.log(e);
    return false;
  }

  console.log('Done.');
};

export const getAllFaves = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const values = await AsyncStorage.multiGet(keys);
    // console.log(values, 'VALUES');
    return values.filter(value => value[1].includes('faved_on'));
  } catch (e) {
    console.log(e);
    return [];
  }

  console.log('Done.');
};

export const removeFaves = async favId => {
  try {
    const fav = await AsyncStorage.removeItem(`${favId}`);
    return fav;
  } catch (e) {
    console.log(e);
    return false;
  }

  console.log('Done.');
};
