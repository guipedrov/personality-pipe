import React from 'react'

import FeAs1 from "../assets/images/Fe-hero.fw.png"
import FeAs2 from "../assets/images/Fe-2nd.fw.png"
import FeAs3 from "../assets/images/Fe-3rd.fw.png"
import FeAs4 from "../assets/images/Fe-4th.fw.png"
import FeAs5 from "../assets/images/Fe-5th.fw.png"
import FeAs6 from "../assets/images/Fe-6th.fw.png"
import FeAs7 from "../assets/images/Fe-7th.fw.png"
import FeAs8 from "../assets/images/Fe-8th.fw.png"
import FiAs1 from "../assets/images/Fi-hero.fw.png"
import FiAs2 from "../assets/images/Fi-2nd.fw.png"
import FiAs3 from "../assets/images/Fi-3rd.fw.png"
import FiAs4 from "../assets/images/Fi-4th.fw.png"
import FiAs5 from "../assets/images/Fi-5th.fw.png"
import FiAs6 from "../assets/images/Fi-6th.fw.png"
import FiAs7 from "../assets/images/Fi-7th.fw.png"
import FiAs8 from "../assets/images/Fi-8th.fw.png"
import TeAs1 from "../assets/images/Te-hero.fw.png"
import TeAs2 from "../assets/images/Te-2nd.fw.png"
import TeAs3 from "../assets/images/Te-3rd.fw.png"
import TeAs4 from "../assets/images/Te-4th.fw.png"
import TeAs5 from "../assets/images/Te-5th.fw.png"
import TeAs6 from "../assets/images/Te-6th.fw.png"
import TeAs7 from "../assets/images/Te-7th.fw.png"
import TeAs8 from "../assets/images/Te-8th.fw.png"
import TiAs1 from "../assets/images/Ti-hero.fw.png"
import TiAs2 from "../assets/images/Ti-2nd.fw.png"
import TiAs3 from "../assets/images/Ti-3rd.fw.png"
import TiAs4 from "../assets/images/Ti-4th.fw.png"
import TiAs5 from "../assets/images/Ti-5th.fw.png"
import TiAs6 from "../assets/images/Ti-6th.fw.png"
import TiAs7 from "../assets/images/Ti-7th.fw.png"
import TiAs8 from "../assets/images/Ti-8th.fw.png"
import SeAs1 from "../assets/images/Se-hero.fw.png"
import SeAs2 from "../assets/images/Se-2nd.fw.png"
import SeAs3 from "../assets/images/Se-3rd.fw.png"
import SeAs4 from "../assets/images/Se-4th.fw.png"
import SeAs5 from "../assets/images/Se-5th.fw.png"
import SeAs6 from "../assets/images/Se-6th.fw.png"
import SeAs7 from "../assets/images/Se-7th.fw.png"
import SeAs8 from "../assets/images/Se-8th.fw.png"
import SiAs1 from "../assets/images/Si-hero.fw.png"
import SiAs2 from "../assets/images/Si-2nd.fw.png"
import SiAs3 from "../assets/images/Si-3rd.fw.png"
import SiAs4 from "../assets/images/Si-4th.fw.png"
import SiAs5 from "../assets/images/Si-5th.fw.png"
import SiAs6 from "../assets/images/Si-6th.fw.png"
import SiAs7 from "../assets/images/Si-7th.fw.png"
import SiAs8 from "../assets/images/Si-8th.fw.png"
import NeAs1 from "../assets/images/Ne-hero.fw.png"
import NeAs2 from "../assets/images/Ne-2nd.fw.png"
import NeAs3 from "../assets/images/Ne-3rd.fw.png"
import NeAs4 from "../assets/images/Ne-4th.fw.png"
import NeAs5 from "../assets/images/Ne-5th.fw.png"
import NeAs6 from "../assets/images/Ne-6th.fw.png"
import NeAs7 from "../assets/images/Ne-7th.fw.png"
import NeAs8 from "../assets/images/Ne-8th.fw.png"
import NiAs1 from "../assets/images/Ni-hero.fw.png"
import NiAs2 from "../assets/images/Ni-2nd.fw.png"
import NiAs3 from "../assets/images/Ni-3rd.fw.png"
import NiAs4 from "../assets/images/Ni-4th.fw.png"
import NiAs5 from "../assets/images/Ni-5th.fw.png"
import NiAs6 from "../assets/images/Ni-6th.fw.png"
import NiAs7 from "../assets/images/Ni-7th.fw.png"
import NiAs8 from "../assets/images/Ni-8th.fw.png"
import avatarPeqENTP from "../assets/images/small/avatar-entp.fw.png"
import avatarPeqENTJ from "../assets/images/small/avatar-entj.fw.png"
import avatarPeqINTP from "../assets/images/small/avatar-intp.fw.png"
import avatarPeqINTJ from "../assets/images/small/avatar-intj.fw.png"
import avatarPeqESTJ from "../assets/images/small/avatar-estj.fw.png"
import avatarPeqESFJ from "../assets/images/small/avatar-esfj.fw.png"
import avatarPeqISTJ from "../assets/images/small/avatar-istj.fw.png"
import avatarPeqISFJ from "../assets/images/small/avatar-isfj.fw.png"
import avatarPeqESTP from "../assets/images/small/avatar-estp.fw.png"
import avatarPeqESFP from "../assets/images/small/avatar-esfp.fw.png"
import avatarPeqISTP from "../assets/images/small/avatar-istp.fw.png"
import avatarPeqISFP from "../assets/images/small/avatar-isfp.fw.png"
import avatarPeqENFJ from "../assets/images/small/avatar-enfj.fw.png"
import avatarPeqENFP from "../assets/images/small/avatar-enfp.fw.png"
import avatarPeqINFJ from "../assets/images/small/avatar-infj.fw.png"
import avatarPeqINFP from "../assets/images/small/avatar-infp.fw.png"


function Badges({ url, index, numCode, role, size }) {
  
  return (
    <>
        {/*As 4 Letras | Jung | Fns:*/}
        {/*...*/}
        {(url === "as4l" && index === 1 && role === "x1") ? <img style={{width: `${size}`}} src={FeAs1} alt="ESFP"/> : null}
        {(url === "as4l" && index === 1 && role === "x2") ? <img style={{width: `${size}`}} src={FeAs2} alt="ESFP"/> : null}
        {(url === "as4l" && index === 1 && role === "x3") ? <img style={{width: `${size}`}} src={FeAs3} alt="ESFP"/> : null}
        {(url === "as4l" && index === 1 && role === "x4") ? <img style={{width: `${size}`}} src={FeAs4} alt="ESFP"/> : null}
        {(url === "as4l" && index === 1 && role === "x5") ? <img style={{width: `${size}`}} src={FeAs5} alt="ESFP"/> : null}
        {(url === "as4l" && index === 1 && role === "x6") ? <img style={{width: `${size}`}} src={FeAs6} alt="ESFP"/> : null}
        {(url === "as4l" && index === 1 && role === "x7") ? <img style={{width: `${size}`}} src={FeAs7} alt="ESFP"/> : null}
        {(url === "as4l" && index === 1 && role === "x8") ? <img style={{width: `${size}`}} src={FeAs8} alt="ESFP"/> : null}
        {/**/}
        {(url === "as4l" && index === 2 && role === "x1") ? <img style={{width: `${size}`}} src={FiAs1} alt="ESFP"/> : null}
        {(url === "as4l" && index === 2 && role === "x2") ? <img style={{width: `${size}`}} src={FiAs2} alt="ESFP"/> : null}
        {(url === "as4l" && index === 2 && role === "x3") ? <img style={{width: `${size}`}} src={FiAs3} alt="ESFP"/> : null}
        {(url === "as4l" && index === 2 && role === "x4") ? <img style={{width: `${size}`}} src={FiAs4} alt="ESFP"/> : null}
        {(url === "as4l" && index === 2 && role === "x5") ? <img style={{width: `${size}`}} src={FiAs5} alt="ESFP"/> : null}
        {(url === "as4l" && index === 2 && role === "x6") ? <img style={{width: `${size}`}} src={FiAs6} alt="ESFP"/> : null}
        {(url === "as4l" && index === 2 && role === "x7") ? <img style={{width: `${size}`}} src={FiAs7} alt="ESFP"/> : null}
        {(url === "as4l" && index === 2 && role === "x8") ? <img style={{width: `${size}`}} src={FiAs8} alt="ESFP"/> : null}
        {/**/}
        {(url === "as4l" && index === 3 && role === "x1") ? <img style={{width: `${size}`}} src={TeAs1} alt="ESFP"/> : null}
        {(url === "as4l" && index === 3 && role === "x2") ? <img style={{width: `${size}`}} src={TeAs2} alt="ESFP"/> : null}
        {(url === "as4l" && index === 3 && role === "x3") ? <img style={{width: `${size}`}} src={TeAs3} alt="ESFP"/> : null}
        {(url === "as4l" && index === 3 && role === "x4") ? <img style={{width: `${size}`}} src={TeAs4} alt="ESFP"/> : null}
        {(url === "as4l" && index === 3 && role === "x5") ? <img style={{width: `${size}`}} src={TeAs5} alt="ESFP"/> : null}
        {(url === "as4l" && index === 3 && role === "x6") ? <img style={{width: `${size}`}} src={TeAs6} alt="ESFP"/> : null}
        {(url === "as4l" && index === 3 && role === "x7") ? <img style={{width: `${size}`}} src={TeAs7} alt="ESFP"/> : null}
        {(url === "as4l" && index === 3 && role === "x8") ? <img style={{width: `${size}`}} src={TeAs8} alt="ESFP"/> : null}
        {/**/}
        {(url === "as4l" && index === 4 && role === "x1") ? <img style={{width: `${size}`}} src={TiAs1} alt="ESFP"/> : null}
        {(url === "as4l" && index === 4 && role === "x2") ? <img style={{width: `${size}`}} src={TiAs2} alt="ESFP"/> : null}
        {(url === "as4l" && index === 4 && role === "x3") ? <img style={{width: `${size}`}} src={TiAs3} alt="ESFP"/> : null}
        {(url === "as4l" && index === 4 && role === "x4") ? <img style={{width: `${size}`}} src={TiAs4} alt="ESFP"/> : null}
        {(url === "as4l" && index === 4 && role === "x5") ? <img style={{width: `${size}`}} src={TiAs5} alt="ESFP"/> : null}
        {(url === "as4l" && index === 4 && role === "x6") ? <img style={{width: `${size}`}} src={TiAs6} alt="ESFP"/> : null}
        {(url === "as4l" && index === 4 && role === "x7") ? <img style={{width: `${size}`}} src={TiAs7} alt="ESFP"/> : null}
        {(url === "as4l" && index === 4 && role === "x8") ? <img style={{width: `${size}`}} src={TiAs8} alt="ESFP"/> : null}
        {/**/}
        {(url === "as4l" && index === 5 && role === "x1") ? <img style={{width: `${size}`}} src={SeAs1} alt="ESFP"/> : null}
        {(url === "as4l" && index === 5 && role === "x2") ? <img style={{width: `${size}`}} src={SeAs2} alt="ESFP"/> : null}
        {(url === "as4l" && index === 5 && role === "x3") ? <img style={{width: `${size}`}} src={SeAs3} alt="ESFP"/> : null}
        {(url === "as4l" && index === 5 && role === "x4") ? <img style={{width: `${size}`}} src={SeAs4} alt="ESFP"/> : null}
        {(url === "as4l" && index === 5 && role === "x5") ? <img style={{width: `${size}`}} src={SeAs5} alt="ESFP"/> : null}
        {(url === "as4l" && index === 5 && role === "x6") ? <img style={{width: `${size}`}} src={SeAs6} alt="ESFP"/> : null}
        {(url === "as4l" && index === 5 && role === "x7") ? <img style={{width: `${size}`}} src={SeAs7} alt="ESFP"/> : null}
        {(url === "as4l" && index === 5 && role === "x8") ? <img style={{width: `${size}`}} src={SeAs8} alt="ESFP"/> : null}
        {/**/}
        {(url === "as4l" && index === 6 && role === "x1") ? <img style={{width: `${size}`}} src={SiAs1} alt="ESFP"/> : null}
        {(url === "as4l" && index === 6 && role === "x2") ? <img style={{width: `${size}`}} src={SiAs2} alt="ESFP"/> : null}
        {(url === "as4l" && index === 6 && role === "x3") ? <img style={{width: `${size}`}} src={SiAs3} alt="ESFP"/> : null}
        {(url === "as4l" && index === 6 && role === "x4") ? <img style={{width: `${size}`}} src={SiAs4} alt="ESFP"/> : null}
        {(url === "as4l" && index === 6 && role === "x5") ? <img style={{width: `${size}`}} src={SiAs5} alt="ESFP"/> : null}
        {(url === "as4l" && index === 6 && role === "x6") ? <img style={{width: `${size}`}} src={SiAs6} alt="ESFP"/> : null}
        {(url === "as4l" && index === 6 && role === "x7") ? <img style={{width: `${size}`}} src={SiAs7} alt="ESFP"/> : null}
        {(url === "as4l" && index === 6 && role === "x8") ? <img style={{width: `${size}`}} src={SiAs8} alt="ESFP"/> : null}
        {/**/}
        {(url === "as4l" && index === 7 && role === "x1") ? <img style={{width: `${size}`}} src={NeAs1} alt="ESFP"/> : null}
        {(url === "as4l" && index === 7 && role === "x2") ? <img style={{width: `${size}`}} src={NeAs2} alt="ESFP"/> : null}
        {(url === "as4l" && index === 7 && role === "x3") ? <img style={{width: `${size}`}} src={NeAs3} alt="ESFP"/> : null}
        {(url === "as4l" && index === 7 && role === "x4") ? <img style={{width: `${size}`}} src={NeAs4} alt="ESFP"/> : null}
        {(url === "as4l" && index === 7 && role === "x5") ? <img style={{width: `${size}`}} src={NeAs5} alt="ESFP"/> : null}
        {(url === "as4l" && index === 7 && role === "x6") ? <img style={{width: `${size}`}} src={NeAs6} alt="ESFP"/> : null}
        {(url === "as4l" && index === 7 && role === "x7") ? <img style={{width: `${size}`}} src={NeAs7} alt="ESFP"/> : null}
        {(url === "as4l" && index === 7 && role === "x8") ? <img style={{width: `${size}`}} src={NeAs8} alt="ESFP"/> : null}
        {/**/}
        {(url === "as4l" && index === 8 && role === "x1") ? <img style={{width: `${size}`}} src={NiAs1} alt="ESFP"/> : null}
        {(url === "as4l" && index === 8 && role === "x2") ? <img style={{width: `${size}`}} src={NiAs2} alt="ESFP"/> : null}
        {(url === "as4l" && index === 8 && role === "x3") ? <img style={{width: `${size}`}} src={NiAs3} alt="ESFP"/> : null}
        {(url === "as4l" && index === 8 && role === "x4") ? <img style={{width: `${size}`}} src={NiAs4} alt="ESFP"/> : null}
        {(url === "as4l" && index === 8 && role === "x5") ? <img style={{width: `${size}`}} src={NiAs5} alt="ESFP"/> : null}
        {(url === "as4l" && index === 8 && role === "x6") ? <img style={{width: `${size}`}} src={NiAs6} alt="ESFP"/> : null}
        {(url === "as4l" && index === 8 && role === "x7") ? <img style={{width: `${size}`}} src={NiAs7} alt="ESFP"/> : null}
        {(url === "as4l" && index === 8 && role === "x8") ? <img style={{width: `${size}`}} src={NiAs8} alt="ESFP"/> : null}
        {/**/}
        {/*ESFP*/}
        {(url === "as4l" && numCode === 10 && role === "phase1") ? <img style={{width: '380px'}} src={null} alt="ESFP"/> : null}
        {(url === "as4l" && numCode === 10 && role === "phase2") ? <img style={{width: '380px'}} src={null} alt="ESFP"/> : null}
        {(url === "as4l" && numCode === 10 && role === "phase3") ? <img style={{width: '380px'}} src={null} alt="ESFP"/> : null}
        {(url === "as4l" && numCode === 10 && role === "identity1") ? <img style={{width: '380px'}} src={null} alt="ESFP"/> : null}
        {(url === "as4l" && numCode === 10 && role === "identity2") ? <img style={{width: '380px'}} src={null} alt="ESFP"/> : null}
        {(url === "as4l" && numCode === 10 && role === "couple") ? <img style={{width: '380px'}} src={null} alt="ESFP"/> : null}        {/*Mini badges:*/}
        {/*16 pequenos para "4 letras"*/}
        {(url === "as4letras" && numCode === "100" && role === "ENTP") ? <img style={{width: `${size}`}} src={avatarPeqENTP} alt="~"/> : null}
        {(url === "as4letras" && numCode === "100" && role === "ENTJ") ? <img style={{width: `${size}`}} src={avatarPeqENTJ} alt="~"/> : null}
        {(url === "as4letras" && numCode === "100" && role === "INTP") ? <img style={{width: `${size}`}} src={avatarPeqINTP} alt="~"/> : null}
        {(url === "as4letras" && numCode === "100" && role === "INTJ") ? <img style={{width: `${size}`}} src={avatarPeqINTJ} alt="~"/> : null}
        {(url === "as4letras" && numCode === "100" && role === "ESTJ") ? <img style={{width: `${size}`}} src={avatarPeqESTJ} alt="~"/> : null}
        {(url === "as4letras" && numCode === "100" && role === "ESFJ") ? <img style={{width: `${size}`}} src={avatarPeqESFJ} alt="~"/> : null}
        {(url === "as4letras" && numCode === "100" && role === "ISTJ") ? <img style={{width: `${size}`}} src={avatarPeqISTJ} alt="~"/> : null}
        {(url === "as4letras" && numCode === "100" && role === "ISFJ") ? <img style={{width: `${size}`}} src={avatarPeqISFJ} alt="~"/> : null}
        {(url === "as4letras" && numCode === "100" && role === "ESTP") ? <img style={{width: `${size}`}} src={avatarPeqESTP} alt="~"/> : null}
        {(url === "as4letras" && numCode === "100" && role === "ESFP") ? <img style={{width: `${size}`}} src={avatarPeqESFP} alt="~"/> : null}
        {(url === "as4letras" && numCode === "100" && role === "ISTP") ? <img style={{width: `${size}`}} src={avatarPeqISTP} alt="~"/> : null}
        {(url === "as4letras" && numCode === "100" && role === "ISFP") ? <img style={{width: `${size}`}} src={avatarPeqISFP} alt="~"/> : null}
        {(url === "as4letras" && numCode === "100" && role === "ENFJ") ? <img style={{width: `${size}`}} src={avatarPeqENFJ} alt="~"/> : null}
        {(url === "as4letras" && numCode === "100" && role === "ENFP") ? <img style={{width: `${size}`}} src={avatarPeqENFP} alt="~"/> : null}
        {(url === "as4letras" && numCode === "100" && role === "INFJ") ? <img style={{width: `${size}`}} src={avatarPeqINFJ} alt="~"/> : null}
        {(url === "as4letras" && numCode === "100" && role === "INFP") ? <img style={{width: `${size}`}} src={avatarPeqINFP} alt="~"/> : null}
        {/*8 para "fn"*/}
        {(url === "fn" && numCode === "100" && role === "Fe") ? <img style={{width: `${size}`}} src={null} alt="~"/> : null}
        {(url === "fn" && numCode === "100" && role === "Fi") ? <img style={{width: `${size}`}} src={null} alt="~"/> : null}
        {(url === "fn" && numCode === "100" && role === "Te") ? <img style={{width: `${size}`}} src={null} alt="~"/> : null}
        {(url === "fn" && numCode === "100" && role === "Ti") ? <img style={{width: `${size}`}} src={null} alt="~"/> : null}
        {(url === "fn" && numCode === "100" && role === "Se") ? <img style={{width: `${size}`}} src={null} alt="~"/> : null}
        {(url === "fn" && numCode === "100" && role === "Si") ? <img style={{width: `${size}`}} src={null} alt="~"/> : null}
        {(url === "fn" && numCode === "100" && role === "Ne") ? <img style={{width: `${size}`}} src={null} alt="~"/> : null}
        {(url === "fn" && numCode === "100" && role === "Ni") ? <img style={{width: `${size}`}} src={null} alt="~"/> : null}
        {/*8 para "jung"*/}
        {(url === "jung" && numCode === "100" && role === "Fe") ? <img style={{width: `${size}`}} src={null} alt="~"/> : null}
        {(url === "jung" && numCode === "100" && role === "Fi") ? <img style={{width: `${size}`}} src={null} alt="~"/> : null}
        {(url === "jung" && numCode === "100" && role === "Te") ? <img style={{width: `${size}`}} src={null} alt="~"/> : null}
        {(url === "jung" && numCode === "100" && role === "Ti") ? <img style={{width: `${size}`}} src={null} alt="~"/> : null}
        {(url === "jung" && numCode === "100" && role === "Se") ? <img style={{width: `${size}`}} src={null} alt="~"/> : null}
        {(url === "jung" && numCode === "100" && role === "Si") ? <img style={{width: `${size}`}} src={null} alt="~"/> : null}
        {(url === "jung" && numCode === "100" && role === "Ne") ? <img style={{width: `${size}`}} src={null} alt="~"/> : null}
        {(url === "jung" && numCode === "100" && role === "Ni") ? <img style={{width: `${size}`}} src={null} alt="~"/> : null}
    </>  
  )
}

export default Badges