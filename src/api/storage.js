class Storage {
   get(name) {
      // return auth.token;
      let status= window.localStorage.getItem(name);
      console.log(status)
      return status;
    }
  
    set(name,value) {
      console.log(name,value)
      window.localStorage.setItem(name,value);
    }
  
  };
  
export default new Storage();