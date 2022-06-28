function Home(){
  const ctx = React.useContext(UserContext)
  return (
  <>
    <h1 className="text-white">Home<br/>
    </h1> 
    <Card 
      txtcolor= "white"
      bgcolor= "dark"
      header="Bad Bank Landing Page"
      title="Welcome to the Bad Bank"
      text="Use with appropriate caution."
      body={(<img src="piggybank.jpg" className= "img-fluid" alt="Responsive image" />)}
    />
  </>

  );  
}
