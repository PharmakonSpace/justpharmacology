import {useEffect,useState} from 'react';
const steps=[
['Administration site','💊','The drug is placed at its administration site. Route and formulation influence how much drug can become available.'],
['Crossing the barrier','↔️','Drug molecules cross biological barriers. Lipid solubility, molecular size, ionization and transport mechanisms can affect this movement.'],
['Bloodstream','🩸','The absorbed drug reaches systemic circulation. This is the point represented by systemic availability.'],
['Systemic availability','🎯','The amount reaching systemic circulation contributes to the concentration available for distribution and pharmacological action.']
];
export default function AbsorptionAnimation(){
 const [active,setActive]=useState(0),[playing,setPlaying]=useState(false);
 useEffect(()=>{if(!playing)return;const t=setInterval(()=>setActive(s=>(s+1)%4),1500);return()=>clearInterval(t)},[playing]);
 const s=steps[active];
 return <div className="absorption-lab">
  <div className="absorption-header"><div><b>How drug absorption happens</b><p>Click a stage or press Play to follow the journey.</p></div><span className="lab-badge">INTERACTIVE</span></div>
  <div className="absorption-track">{steps.map((x,i)=><div className="absorption-stage" key={x[0]}><button className={i===active?'active':''} onClick={()=>{setActive(i);setPlaying(false)}}><span className="stage-icon">{x[1]}</span><strong>{x[0]}</strong><small>Step {i+1}</small></button>{i<3&&<span className="stage-arrow">→</span>}</div>)}</div>
  <div className="absorption-visual"><div className="body-label">SYSTEMIC CIRCULATION MODEL</div><div className="body-line">
   {['Administration 💊','Barrier ↔️','Bloodstream 🩸','Barrier ↔️','Available 🎯'].map((x,i)=><div className={i%2===0?'compartment '+(i/2<=active?'lit':''):'barrier-line'} key={i}>{i%2===0?x:<i className={active>=Math.ceil(i/2)?'flowing':''}/>}</div>)}
  </div></div>
  <div className="absorption-explain"><div className="step-number">{active+1}</div><div><strong>{s[0]}</strong><p>{s[2]}</p></div></div>
  <div className="controls"><button onClick={()=>{setActive(0);setPlaying(false)}}>Reset</button><button className={playing?'selected':''} onClick={()=>setPlaying(v=>!v)}>{playing?'Pause':'Play'}</button><button onClick={()=>{setActive(v=>Math.min(3,v+1));setPlaying(false)}} disabled={active===3}>Next step →</button></div>
  <div className="absorption-note"><b>Remember:</b> Absorption is movement from the site of administration into systemic circulation. IV administration delivers drug directly into systemic circulation and bypasses an absorption step.</div>
 </div>
}