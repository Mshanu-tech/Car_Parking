const saveUser = (data: any) => {
  console.log("'sdfs");
  
    localStorage.setItem("user", JSON.stringify(data));
  };
  
  const userIsLoggedin = () => {
    try {
      const val = localStorage.getItem("user");
      console.log(val);
      
      return !!val && val !== "null"; // Check for null value explicitly
    } catch {
      return false;
    }
  }
  
  const userIsLogout = () =>{
    localStorage.removeItem('user')
  }
  
  export { saveUser, userIsLoggedin, userIsLogout };
  