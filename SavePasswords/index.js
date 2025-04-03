import AsynStorage from "@react-native-async-storage/async-storage";


const savePassword = ( ) => {

  // busca itens 
  const getItem = async (chave) => {

    try { 
      
      const passwords = await AsynStorage.getItem(chave);
      return JSON.parse(passwords) || [];

    } catch ( error ) {
      return [];
    }

  }

  // salva item 

  const saveItem = async (chave, value) => {
      try {

        let passwords = await getItem(chave);
        passwords.push(value) 
        await AsynStorage.setItem(chave, JSON.stringify(passwords))

      } catch (error) {
        console.log("error", error)
      }
  }

  // Remove item

  const removeItem = async (chave, item ) => {

      try {
        
        let passwords = await getItem(chave);
        let myPass = passwords.filter((passwords) => {
          return (passwords !== item)
        })

        await AsynStorage.setItem(chave, JSON.stringify(myPass))
        return myPass;

      } catch {
        console.log("error", error)
      }

  }

  return {
    getItem,
    saveItem,
    removeItem,
  }

}


export default savePassword;