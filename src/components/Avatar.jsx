import React from 'react'

import avatarENTP from "../assets/images/avatar-entp.fw.png"
import avatarENTJ from "../assets/images/avatar-entj.fw.png"
import avatarINTP from "../assets/images/avatar-intp.fw.png"
import avatarINTJ from "../assets/images/avatar-intj.fw.png"
import avatarESTJ from "../assets/images/avatar-estj.fw.png"
import avatarESFJ from "../assets/images/avatar-esfj.fw.png"
import avatarISTJ from "../assets/images/avatar-istj.fw.png"
import avatarISFJ from "../assets/images/avatar-isfj.fw.png"
import avatarESTP from "../assets/images/avatar-estp.fw.png"
import avatarESFP from "../assets/images/avatar-esfp.fw.png"
import avatarISTP from "../assets/images/avatar-istp.fw.png"
import avatarISFP from "../assets/images/avatar-isfp.fw.png"
import avatarENFJ from "../assets/images/avatar-enfj.fw.png"
import avatarENFP from "../assets/images/avatar-enfp.fw.png"
import avatarINFJ from "../assets/images/avatar-infj.fw.png"
import avatarINFP from "../assets/images/avatar-infp.fw.png"
import avatarFe from "../assets/images/avatar-fe.fw.png"
import avatarFi from "../assets/images/avatar-fi.fw.png"
import avatarTe from "../assets/images/avatar-te.fw.png"
import avatarTi from "../assets/images/avatar-ti.fw.png"
import avatarSe from "../assets/images/avatar-se.fw.png"
import avatarSi from "../assets/images/avatar-si.fw.png"
import avatarNe from "../assets/images/avatar-ne.fw.png"
import avatarNi from "../assets/images/avatar-ni.fw.png"
import fnFe from "../assets/images/Fe.fw.png"
import fnFi from "../assets/images/Fi.fw.png"
import fnTe from "../assets/images/Te.fw.png"
import fnTi from "../assets/images/Ti.fw.png"
import fnSe from "../assets/images/Se.fw.png"
import fnSi from "../assets/images/Si.fw.png"
import fnNe from "../assets/images/Ne.fw.png"
import fnNi from "../assets/images/Ni.fw.png"


function Avatar({ url, numCode, type, size }) {
  
  return (
    <>
        {(url === "as4letras" && type === "ENTP") ? <img style={{width: `${size}`}} src={avatarENTP} alt="ESFP"/> : null}
        {(url === "as4letras" && type === "ENTJ") ? <img style={{width: `${size}`}} src={avatarENTJ} alt="ESFP"/> : null}
        {(url === "as4letras" && type === "INTP") ? <img style={{width: `${size}`}} src={avatarINTP} alt="ESFP"/> : null}
        {(url === "as4letras" && type === "INTJ") ? <img style={{width: `${size}`}} src={avatarINTJ} alt="ESFP"/> : null}
        {(url === "as4letras" && type === "ESTJ") ? <img style={{width: `${size}`}} src={avatarESTJ} alt="ESFP"/> : null}
        {(url === "as4letras" && type === "ESFJ") ? <img style={{width: `${size}`}} src={avatarESFJ} alt="ESFP"/> : null}
        {(url === "as4letras" && type === "ISTJ") ? <img style={{width: `${size}`}} src={avatarISTJ} alt="ESFP"/> : null}
        {(url === "as4letras" && type === "ISFJ") ? <img style={{width: `${size}`}} src={avatarISFJ} alt="ESFP"/> : null}
        {(url === "as4letras" && type === "ESTP") ? <img style={{width: `${size}`}} src={avatarESTP} alt="ESFP"/> : null}
        {(url === "as4letras" && type === "ESFP") ? <img style={{width: `${size}`}} src={avatarESFP} alt="ESFP"/> : null}
        {(url === "as4letras" && type === "ISTP") ? <img style={{width: `${size}`}} src={avatarISTP} alt="ESFP"/> : null}
        {(url === "as4letras" && type === "ISFP") ? <img style={{width: `${size}`}} src={avatarISFP} alt="ESFP"/> : null}
        {(url === "as4letras" && type === "ENFJ") ? <img style={{width: `${size}`}} src={avatarENFJ} alt="ESFP"/> : null}
        {(url === "as4letras" && type === "ENFP") ? <img style={{width: `${size}`}} src={avatarENFP} alt="ESFP"/> : null}
        {(url === "as4letras" && type === "INFJ") ? <img style={{width: `${size}`}} src={avatarINFJ} alt="ESFP"/> : null}
        {(url === "as4letras" && type === "INFP") ? <img style={{width: `${size}`}} src={avatarINFP} alt="ESFP"/> : null}
        {(url === "jung" && type === "Fe") ? <img style={{width: `${size}`}} src={avatarFe} alt="Fe"/> : null}
        {(url === "jung" && type === "Fi") ? <img style={{width: `${size}`}} src={avatarFi} alt="Fe"/> : null}
        {(url === "jung" && type === "Te") ? <img style={{width: `${size}`}} src={avatarTe} alt="Fe"/> : null}
        {(url === "jung" && type === "Ti") ? <img style={{width: `${size}`}} src={avatarTi} alt="Fe"/> : null}
        {(url === "jung" && type === "Se") ? <img style={{width: `${size}`}} src={avatarSe} alt="Fe"/> : null}
        {(url === "jung" && type === "Si") ? <img style={{width: `${size}`}} src={avatarSi} alt="Fe"/> : null}
        {(url === "jung" && type === "Ne") ? <img style={{width: `${size}`}} src={avatarNe} alt="Fe"/> : null}
        {(url === "jung" && type === "Ni") ? <img style={{width: `${size}`}} src={avatarNi} alt="Fe"/> : null}
        {(url === "fn" && type === "Fe") ? <img style={{width: `${size}`}} src={fnFe} alt="Fe"/> : null}
        {(url === "fn" && type === "Fi") ? <img style={{width: `${size}`}} src={fnFi} alt="Fe"/> : null}
        {(url === "fn" && type === "Te") ? <img style={{width: `${size}`}} src={fnTe} alt="Fe"/> : null}
        {(url === "fn" && type === "Ti") ? <img style={{width: `${size}`}} src={fnTi} alt="Fe"/> : null}
        {(url === "fn" && type === "Se") ? <img style={{width: `${size}`}} src={fnSe} alt="Fe"/> : null}
        {(url === "fn" && type === "Si") ? <img style={{width: `${size}`}} src={fnSi} alt="Fe"/> : null}
        {(url === "fn" && type === "Ne") ? <img style={{width: `${size}`}} src={fnNe} alt="Fe"/> : null}
        {(url === "fn" && type === "Ni") ? <img style={{width: `${size}`}} src={fnNi} alt="Fe"/> : null}
    </>  
  )
}

export default Avatar

/*
<TypeContext.Consumer> 
        {({ type }) => (
        
        )} 
      </TypeContext.Consumer>
*/