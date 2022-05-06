import React, { useEffect } from "react";

import the404 from "../../assets/images/404.png";

function Page404({onMajor}) {

  useEffect(() => {
    onMajor(false)
  }, [])

  return (
    <div style={{
      // margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '2rem 0 0 0',
      margin: '2rem 0 10rem 0',
    }}>
      <img style={{margin: '0 auto', width: '15rem'}} src={the404} alt="" />
      <div style={{fontSize: '2.75rem', color: '#222222', fontWeight: '600'}}>Erro 404</div>
      <div style={{fontSize: '1.32rem', color: '#222222', fontWeight: '500'}}>Página não encontrada</div>
    </div>
  )
}

export default Page404