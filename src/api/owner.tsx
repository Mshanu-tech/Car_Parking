const saveOwner = (data: any) => {
    localStorage.setItem("owner", JSON.stringify(data));
  };
  
  const isLoggedin = () => {
    try {
      const val = localStorage.getItem("owner");
      return !!val && val !== "null"; // Check for null value explicitly
    } catch {
      return false;
    }
  };

  const isLogout = () =>{
    localStorage.removeItem('owner')
  }
  
  export { saveOwner, isLoggedin, isLogout };
  