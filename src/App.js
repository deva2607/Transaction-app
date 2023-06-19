function App() {
  const isLogin = JSON.parse(localStorage.getItem("ISLOGIN"));
  if(!isLogin || isLogin === false){
     if(window.location.pathname !== '/'){
         window.location.replace('/')
         localStorage.setItem('ISLOGIN', false)
         localStorage.setItem('id', null)
     } else {
        return false
     }
  }
  
}

export default App;
