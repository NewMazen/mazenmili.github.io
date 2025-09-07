import{u as k,r as l,j as t,F as P,s as $}from"./index-2Zdyoe_Y.js";const w={icy:{cardBg:"bg-white/15 backdrop-blur-xl border-white/20",cardHover:"hover:bg-white/25 hover:border-cyan-300/40 hover:shadow-cyan-400/20",text:"text-gray-800",textSecondary:"text-gray-600",accent:"text-cyan-600",button:"bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-800 border-cyan-400/40",badge:"bg-cyan-100/30 text-cyan-800 border-cyan-300/40",glow:"shadow-cyan-400/20",filterActive:"bg-cyan-500/30 text-cyan-800 border-cyan-400/60",lightboxBg:"bg-white/95 backdrop-blur-xl"},hot:{cardBg:"bg-yellow-50/15 backdrop-blur-xl border-yellow-300/20",cardHover:"hover:bg-yellow-50/25 hover:border-yellow-400/40 hover:shadow-yellow-400/20",text:"text-yellow-900",textSecondary:"text-yellow-800",accent:"text-yellow-600",button:"bg-yellow-400/20 hover:bg-yellow-400/30 text-yellow-900 border-yellow-500/40",badge:"bg-yellow-100/30 text-yellow-900 border-yellow-400/40",glow:"shadow-yellow-400/20",filterActive:"bg-yellow-500/30 text-yellow-900 border-yellow-500/60",lightboxBg:"bg-yellow-50/95 backdrop-blur-xl"},dark:{cardBg:"bg-gray-900/15 backdrop-blur-xl border-gray-700/20",cardHover:"hover:bg-gray-900/25 hover:border-blue-500/40 hover:shadow-blue-400/20",text:"text-gray-100",textSecondary:"text-gray-300",accent:"text-blue-400",button:"bg-blue-600/20 hover:bg-blue-600/30 text-blue-200 border-blue-500/40",badge:"bg-blue-900/30 text-blue-200 border-blue-500/40",glow:"shadow-blue-400/20",filterActive:"bg-blue-600/30 text-blue-200 border-blue-500/60",lightboxBg:"bg-gray-900/95 backdrop-blur-xl"}},g=[{id:1,title:"PMP – Project Management Professional",organization:"Project Management Institute (PMI)",category:"Certification",skills:["Project Management","Agile Delivery","Leadership"],image:"/images/pmp.jpeg"},{id:2,title:"PMI Membership",organization:"Project Management Institute (PMI)",category:"Membership",skills:["Community Engagement","Professional Networking"],image:"/images/pmi.jpg"},{id:3,title:"PDU-35 Program",organization:"Professional Training",category:"Certification",skills:["Project Delivery","Agile Practices"],image:"/images/pdu35.jpeg"},{id:4,title:"Next Step: PMI-PBA",organization:"Project Management Institute (PMI)",category:"In Progress",skills:["Business Analysis","Requirements Management"],progress:35}],C=({isOpen:o,onClose:e,children:n})=>{const[s,a]=l.useState(!1);return l.useEffect(()=>{a(!0)},[]),l.useEffect(()=>{if(s){if(o){if(document.body.style.overflow="hidden",document.body.style.paddingRight="0px",document.documentElement.style.overflow="hidden",!document.getElementById("certificate-modal-container")){const m=document.createElement("div");m.id="certificate-modal-container",m.style.cssText=`
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          z-index: 2147483647 !important;
          pointer-events: auto !important;
          width: 100vw !important;
          height: 100vh !important;
        `,document.body.appendChild(m)}}else{document.body.style.overflow="",document.body.style.paddingRight="",document.documentElement.style.overflow="";const d=document.getElementById("certificate-modal-container");d&&document.body.removeChild(d)}return()=>{document.body.style.overflow="",document.body.style.paddingRight="",document.documentElement.style.overflow="";const d=document.getElementById("certificate-modal-container");if(d)try{document.body.removeChild(d)}catch{}}}},[o,s]),null},S=({certificates:o,index:e,isOpen:n,onClose:s,onPrev:a,onNext:d})=>{const{theme:m}=k(),[p,v]=l.useState(!1);return l.useEffect(()=>{v(!0)},[]),l.useEffect(()=>{if(!n)return;const i=b=>{b.key==="Escape"&&(b.preventDefault(),b.stopPropagation(),s())};return document.addEventListener("keydown",i,!0),()=>{document.removeEventListener("keydown",i,!0)}},[n,s]),l.useEffect(()=>{if(!p)return;const i=document.getElementById("certificate-modal-container");if(n&&e!==null&&o[e]&&i){const b=o[e];i.innerHTML=`
        <div style="
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          z-index: 2147483647 !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          padding: 1rem !important;
          background: rgba(0, 0, 0, 0.8) !important;
          backdrop-filter: blur(4px) !important;
        " id="modal-backdrop">
          <div style="
            background: rgba(255, 255, 255, 0.95) !important;
            backdrop-filter: blur(20px) !important;
            border: 1px solid rgba(255, 255, 255, 0.2) !important;
            border-radius: 1rem !important;
            max-width: 80rem !important;
            width: 100% !important;
            max-height: 97vh !important;
            overflow: hidden !important;
            position: relative !important;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5) !important;
          " id="modal-content">
            
            <!-- Close Button -->
            <button id="modal-close" style="
              position: absolute !important;
              top: 1rem !important;
              right: 1rem !important;
              z-index: 20 !important;
              background: rgba(255, 255, 255, 0.9) !important;
              color: #374151 !important;
              padding: 0.5rem !important;
              border-radius: 50% !important;
              border: none !important;
              cursor: pointer !important;
              font-size: 1.25rem !important;
              width: 2.5rem !important;
              height: 2.5rem !important;
              display: flex !important;
              align-items: center !important;
              justify-content: center !important;
              transition: all 0.2s !important;
              box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1) !important;
            ">×</button>
            
            <!-- Previous Button -->
            <button id="modal-prev" ${e===0?"disabled":""} style="
              position: absolute !important;
              left: 1rem !important;
              top: 50% !important;
              transform: translateY(-50%) !important;
              z-index: 20 !important;
              background: rgba(255, 255, 255, 0.9) !important;
              color: #374151 !important;
              padding: 0.75rem !important;
              border-radius: 50% !important;
              border: none !important;
              cursor: ${e===0?"not-allowed":"pointer"} !important;
              font-size: 1.25rem !important;
              width: 3rem !important;
              height: 3rem !important;
              display: flex !important;
              align-items: center !important;
              justify-content: center !important;
              transition: all 0.2s !important;
              opacity: ${e===0?"0.4":"1"} !important;
              box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1) !important;
            ">‹</button>
            
            <!-- Next Button -->
            <button id="modal-next" ${e===o.length-1?"disabled":""} style="
              position: absolute !important;
              right: 1rem !important;
              top: 50% !important;
              transform: translateY(-50%) !important;
              z-index: 20 !important;
              background: rgba(255, 255, 255, 0.9) !important;
              color: #374151 !important;
              padding: 0.75rem !important;
              border-radius: 50% !important;
              border: none !important;
              cursor: ${e===o.length-1?"not-allowed":"pointer"} !important;
              font-size: 1.25rem !important;
              width: 3rem !important;
              height: 3rem !important;
              display: flex !important;
              align-items: center !important;
              justify-content: center !important;
              transition: all 0.2s !important;
              opacity: ${e===o.length-1?"0.4":"1"} !important;
              box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1) !important;
            ">›</button>
              
              <!-- Certificate Image -->
              <div style="
                width: 100% !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
              ">
                <div style="
                  position: relative !important;
                  width: 100% !important;
                  max-width: 55rem !important;
                  aspect-ratio: 33/25 !important;
                  background: white !important;
                  border-radius: 0.75rem !important;
                  overflow: hidden !important;
                  border: 1px solid #e5e7eb !important;
                  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1) !important;
                ">
                  <img
                    src="${b.image}"
                    alt="${b.title}"
                    style="
                      position: absolute !important;
                      top: 0 !important;
                      left: 0 !important;
                      width: 100% !important;
                      height: 100% !important;
                      object-fit: cover !important;
                    "
                  />
                </div>
              </div>
              
              <!-- Navigation Info -->
              <div style="
                text-align: center !important;
                margin-top: 1.5rem !important;
                color: #6b7280 !important;
                font-size: 0.875rem !important;
              ">
                ${e+1} of ${o.length}
              </div>
            </div>
          </div>
        </div>
      `;const u=i.querySelector("#modal-backdrop"),x=i.querySelector("#modal-close"),h=i.querySelector("#modal-prev"),y=i.querySelector("#modal-next"),f=i.querySelector("#modal-content");u&&u.addEventListener("click",c=>{c.target===u&&s()}),x&&x.addEventListener("click",c=>{c.stopPropagation(),s()}),h&&e>0&&h.addEventListener("click",c=>{c.stopPropagation(),a()}),y&&e<o.length-1&&y.addEventListener("click",c=>{c.stopPropagation(),d()}),f&&f.addEventListener("click",c=>{c.stopPropagation()}),document.body.style.overflow="hidden",document.documentElement.style.overflow="hidden"}else i&&(i.innerHTML="",document.body.style.overflow="",document.documentElement.style.overflow="");return()=>{i&&(i.innerHTML=""),document.body.style.overflow="",document.documentElement.style.overflow=""}},[n,e,o,s,a,d,p]),t.jsx(C,{isOpen:n,onClose:s})},I=({certificate:o,onClick:e,index:n})=>{const{theme:s}=k(),a=w[s]||w.icy,[d,m]=l.useState(!1);return l.useEffect(()=>{const p=setTimeout(()=>m(!0),n*100);return()=>clearTimeout(p)},[n]),t.jsxs("div",{className:`
        ${a.cardBg} ${a.cardHover} border rounded-2xl p-3 cursor-pointer
        transition-all duration-500 transform ${a.glow} shadow-lg
        ${d?"translate-y-0 opacity-100":"translate-y-8 opacity-0"}
        hover:scale-105
      `,onClick:()=>e(n),style:{transitionDelay:`${n*50}ms`,minWidth:0},title:o.title,children:[t.jsx("div",{className:"w-36 h-[110px] min-w-[9rem] rounded-xl overflow-hidden bg-white border flex items-center justify-center mr-4 relative aspect-[33/25]",children:o.category==="In Progress"&&typeof o.progress=="number"?t.jsxs("div",{className:"w-[85%]",children:[t.jsxs("div",{className:"flex items-center justify-between mb-1",children:[t.jsx("span",{className:"text-[10px] font-medium text-gray-500",children:"In Progress"}),t.jsxs("span",{className:"text-[10px] font-semibold text-gray-600",children:[o.progress,"%"]})]}),t.jsx("div",{className:"w-full bg-gray-200/70 rounded-full h-2.5",children:t.jsx("div",{className:"bg-cyan-600 h-2.5 rounded-full transition-all duration-500",style:{width:`${o.progress}%`}})})]}):t.jsx("img",{src:o.image,alt:o.title,className:"absolute inset-0 w-full h-full object-cover",style:{aspectRatio:"33/25",width:"100%",height:"100%",objectFit:"cover"}})}),t.jsxs("div",{className:"mt-4 text-center",children:[t.jsx("h3",{className:`font-bold ${a.text} text-lg leading-tight mb-1`,children:o.title}),t.jsx("p",{className:`${a.accent} font-semibold text-sm`,children:o.organization})]})]})},M=()=>{const{theme:o}=k(),e=w[o]||w.icy,[n,s]=l.useState("All"),[a,d]=l.useState(g),[m,p]=l.useState(null),[v,i]=l.useState(!1),b=l.useRef(null),x=["All",...Array.from(new Set(g.map(r=>r.category)))],h=r=>r==="All"?g.length:g.filter(j=>j.category===r).length;l.useEffect(()=>{d(n==="All"?g:g.filter(r=>r.category===n))},[n]);const y=r=>s(r),f=r=>{p(r),i(!0)},c=()=>{i(!1),p(null)},N=()=>{m>0&&p(m-1)},E=()=>{m<a.length-1&&p(m+1)};return t.jsxs("div",{className:"min-h-screen p-4 sm:p-8",children:[t.jsxs("div",{className:"max-w-7xl mx-auto",children:[t.jsx("div",{id:"certifications",ref:b,className:"pt-[120px] -mt-[120px]"}),t.jsxs("div",{className:"text-center mb-8",children:[t.jsxs("h1",{className:`pt-10 text-4xl sm:text-5xl font-bold ${e.text} mb-4 flex flex-wrap items-center justify-center gap-2 break-words`,style:{wordBreak:"break-word",overflowWrap:"break-word",minWidth:0,maxWidth:"100%",whiteSpace:"normal"},children:[t.jsx(P,{className:`shrink-0 ${e.accent}`,style:{fontSize:"1.2em"}}),t.jsx("span",{style:{minWidth:0,maxWidth:"100%"},children:"Certifications"})]}),t.jsx("p",{className:`text-xl ${e.textSecondary} max-w-3xl mx-auto`,children:"This is Exactly how I spent my time during the Corona Pandemic."})]}),t.jsxs("div",{className:"flex flex-wrap gap-4 justify-center mb-12",children:[t.jsxs("span",{className:"flex items-center gap-2",children:[t.jsx($,{className:`${e.textSecondary}`}),t.jsx("span",{className:`${e.text} font-medium`,children:"Filter by:"})]}),x.map(r=>t.jsxs("button",{onClick:()=>y(r),className:`
                px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-300
                ${n===r?e.filterActive+" ring-2 ring-offset-2 ring-cyan-400":`${e.button} hover:scale-105`}
              `,children:[r,t.jsx("span",{className:`ml-2 inline-block px-1.5 py-0.5 rounded-full text-xs font-bold ${n===r?"bg-white/20 text-current":"bg-black/10 text-current"}`,children:h(r)}),n===r&&t.jsx("span",{className:"ml-2 inline-block text-xs font-bold text-green-600",children:"✓"})]},r))]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:a.map((r,j)=>t.jsx(I,{certificate:r,onClick:f,index:j},r.id))}),a.length===0&&t.jsxs("div",{className:"text-center py-20",children:[t.jsx("div",{className:`text-6xl ${e.textSecondary} mb-4`,children:"🔍"}),t.jsx("h3",{className:`text-2xl font-bold ${e.text} mb-2`,children:"No certificates found"}),t.jsx("p",{className:`${e.textSecondary}`,children:"Try adjusting your filters to see more certificates."})]}),t.jsx(S,{certificates:a,index:m,isOpen:v,onClose:c,onPrev:N,onNext:E})]}),t.jsx("style",{children:`
        @media (max-width: 767px) {
          .max-w-7xl, .grid, .flex, .certifications-section {
            min-width: 0 !important;
            max-width: 100vw !important;
            box-sizing: border-box;
          }
          h1, .certifications-title {
            min-width: 0 !important;
            max-width: 100vw !important;
            box-sizing: border-box;
            word-break: break-word;
            overflow-wrap: break-word;
          }
          .grid > div {
            min-width: 0 !important;
          }
        }
      `})]})};export{M as default};
