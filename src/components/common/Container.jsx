function Container({children}) {

  return (

    <div style={{
      maxWidth:"1200px",
      margin:"auto",
      padding:"0 80px"
    }}>

      {children}

    </div>

  );

}

export default Container;