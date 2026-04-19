import About from './about/About'

const App = () => {
   let getdatafromchild  = (data)=>{
    console.log(data);
   }
  return (
    <div>
      <h1>App</h1>
      <About fn={getdatafromchild}/>
    </div>
  )
}

export default App
