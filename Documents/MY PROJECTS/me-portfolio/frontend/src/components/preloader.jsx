import React, { useEffect, useState } from 'react';

export default function Preloader(){
  const [visible, setVisible] = useState(true);
  useEffect(()=>{
    const onLoad = () => setTimeout(()=> setVisible(false), 700);
    if(document.readyState === 'complete') onLoad();
    else window.addEventListener('load', onLoad);
    return ()=> window.removeEventListener('load', onLoad);
  },[]);
  if(!visible) return null;
  return (
    <div id="preloader" style={{position:'fixed', inset:0, display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',background:'linear-gradient(180deg,#050506,#0a0a0b)', zIndex:9999}}>
      <div style={{width:76,height:76,borderRadius:999,border:'6px solid rgba(255,255,255,0.12)', borderTopColor:'var(--accent1)', animation:'spin 1s linear infinite'}} />
      <div style={{marginTop:16, fontWeight:700}}>Loading Joyce Miako — Portfolio</div>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}
