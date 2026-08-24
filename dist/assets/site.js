
(function(){
 const btn=document.querySelector('.menu-btn'), nav=document.querySelector('.nav-links');
 if(btn&&nav) btn.addEventListener('click',()=>nav.classList.toggle('open'));
 const section=document.querySelector('.battery-scroll-section');
 if(!section)return;
 const canvas=section.querySelector('.battery-canvas'), loader=section.querySelector('.battery-loader');
 if(!canvas)return; const ctx=canvas.getContext('2d',{alpha:false}); const N=45, imgs=[]; let loaded=0,last=-1;
 function path(i){return `battery-scroll/frames/frame_${String(i).padStart(3,'0')}.webp`}
 function size(){const aspect=1800/970,maxW=innerWidth*(innerWidth<760?.96:.92),maxH=innerHeight*(innerWidth<760?.72:.82);let w=maxW,h=w/aspect;if(h>maxH){h=maxH;w=h*aspect}const dpr=Math.min(devicePixelRatio||1,2);canvas.style.width=w+'px';canvas.style.height=h+'px';canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);draw(last<0?0:last,true)}
 function draw(i,force){if(!force&&i===last)return;const im=imgs[i];if(!im||!im.complete)return;const w=parseFloat(canvas.style.width),h=parseFloat(canvas.style.height);ctx.drawImage(im,0,0,w,h);last=i}
 for(let i=1;i<=N;i++){const im=new Image();im.src=path(i);im.onload=im.onerror=()=>{loaded++;if(loaded===N){size();draw(0,true);canvas.classList.add('ready');if(loader)loader.style.display='none';update()}};imgs.push(im)}
 function update(){const r=section.getBoundingClientRect();const travel=Math.max(1,section.offsetHeight-innerHeight);const p=Math.max(0,Math.min(1,-r.top/travel));draw(Math.round(p*(N-1)))}
 let ticking=false;addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(()=>{update();ticking=false});ticking=true}},{passive:true});addEventListener('resize',size);
})();
