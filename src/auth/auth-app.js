import AsyncStorage from "@react-native-async-storage/async-storage";

export const signIn = async (data) =>{
    const content = JSON.stringify(data)
    await AsyncStorage.setItem('USER_DATA',content)
}

export const signOut = async () =>{
    
    AsyncStorage.removeItem('USER_DATA')
}

export const getData = async (data) =>{
    
    return await AsyncStorage.getItem('USER_DATA')
}