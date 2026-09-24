const message = `Today is another reminder of how far we have come together—not only sa mga happy moments, but also sa mga difficult days, misunderstandings, arguments, struggles, and moments when things did not go the way we wanted. Looking back, na realize nako nga ang atung relationship kay dili perfect, and we are not perfect either. Pero bisag in ana, we are still here, still trying, still learning, and still choosing to understand each other, bisag lisud na kaayu.

I want to start this letter by saying thank you. Thank you for every moment you have shared with me, for every conversation, every laugh, every little thing you have done, and even for the moments when you simply stayed. Some memories may seem small, but they became meaningful to me because I experienced them with you.

I also want to say I'm sorry. I'm sorry sa mga times nga nasakitan tka, whether I realized it immediately or not. I'm sorry for the times I misunderstood you, sa mga words nga akong nasulti without thinking, sa mga moments nga akong emotions ang mag labi, og sa mga times nga napafeel nako nimo nga you are unappreciated, unheard, or alone. I'm sorry for my mistakes and for the things I could have handled better.

I know that saying sorry cannot automatically erase what happened. Ganhn ko moingon nga ang akong apologies dili lang bsta words pero dili nako mag promise kay diko gusto masakitan paka og samot. Pero trust me I want to learn from my mistakes and become better, not because I want to be perfect, but because I care about you and about what we have.

I'm also sorry for the times when our problems became bigger than they needed to be. We've had misunderstandings, disagreements, and struggles that tested our patience with each other. There may have been moments when we both felt tired, frustrated, or unsure of what to say, But those moments also taught me that a relationship isn't only about being happy together. It's also about learning how to listen, forgive, and understand.

Diko gusto nga mag pretend ta that everything has always been easy. It hasn't. We've had our own struggles, and there may still be challenges ahead. But I hope that kung naay mga problems nga moabot, we don't immediately see each other as kaaway. I hope we remember that the problem is something we should face together, not something that should turn us against each other.

I hope mag communicate nata honestly. I hope we become more comfortable telling each other when something is wrong instead of keeping everything inside. I hope makat on ta nga maminaw sa usag usa without immediately becoming defensive specially ako. I hope we can also learn to understand each other's feelings even when we don't completely agree.

I also hope we continue giving each other space to grow. We are both still learning about sa atung self, about life, and about what it means to care for each other. We will make mistakes ofc, but we will change. We will have good days and bad days.

For our relationship, I wish for more understanding, more patience, and more meaningful memories. Specially more trust but para maka build og trust sa usag usa dapat naa pud ang honesty sa usag usa, so bebe i need your help para mabalik akong trust. Please ayaw nako bigua, kay sakit kaayu:(

I wish that we can celebrate more anniversaries together, not simply because of the number of months or years, but because of all the experiences and lessons we collect along the way.

I wish for more simple moments with you, more conversations that last longer than expected, more laughter over random things, more memories that we can look back on someday and smile about. I don't need everything to be perfect. I just want the moments we share to be genuine and meaningful.

I hope that when life becomes difficult, we don't forget the good reasons why we started caring about each other in the first place.

And if there are times when we disagree, I hope we remember to respect each other. Kung naay masayop sa atua, I hope we can admit it. Kung naay masakitan sa ato, I hope we can listen. Kung naay need og encouragement natung duha, I hope the other can be there. Specially when things becomes difficult, I hope we choose communication instead of silence and understanding instead of away.

Thank you for accepting me with my imperfections. Thank you for seeing the parts of me that aren't always easy to understand. Thank you sa mga memories nga atung nabuhat, and for the lessons our relationship has taught me.

Probably naa pay mga butang nga wapa nako nasulti and mga feelings nga dili ko kahibaw unsaon pag express. Sometimes I may not have the perfect words. Sometimes I may show things differently than I say them. But I hope kahibaw ka nga appreciate nako kung unsay naa nato.

On this anniversary, I don't want to promise that we will never have problems again. Kay murag sa damgo rana mahitabo. Instead, I hope that when problems come, we will continue learning how to face them in a healthier and more understanding way.

I hope we continue becoming better versions of ourselves while supporting each other.

I hope dita mo hunong og appreciate bisag sa mga gagmay ra nga butang.

I hope we never become too comfortable to say thank you.

I hope we never become too proud to say I'm sorry.

I hope we never become too busy to check on each other.

And most importantly, I hope we continue treating each other wity love.

Kung unsa may mga moabot nga challenges, I hope makahinumdom ta ani nga adlaw that we once promised ourselves to keep trying and learning.

Happy anniversary to us💗

Thank you for being part of my life and for all the memories we have created together. I'm grateful for the happiness, the lessons, the laughter, and even the difficult moments that taught us something.

Here's to another chapter of our story langga—a chapter filled with more understanding, more growth, more laughter, more memories, and hopefully many more anniversaries to come.

Again Happy anniversary, my love <3

May we continue to grow, not only as a couple, but also para sa atung self. May we become kinder to each other, more patient with each other, and more willing mosabot sa usag usa.

If lisud najud kaayu, I hope we remember nga in ana jud nang love—it isn't about never having problems. It's about learning unsaon pag handle those problems with honesty, patience, and understanding.

Again napud Happy anniversary! Here's to us, sa tanang butang nga naagian natu, and sa mga butang nga wala pa natu na kat-onan og na experience together. Eto tayu nag stay gihapon.`;

const envelope = document.getElementById('envelope');
const modal = document.getElementById('letterModal');
const content = document.getElementById('letterContent');
const toast = document.getElementById('toast');
const loveButton = document.getElementById('loveButton');
const closeLetter = () => { modal.classList.remove('show'); modal.setAttribute('aria-hidden','true'); document.body.style.overflow=''; };
function hearts(amount=18) { for (let i=0;i<amount;i++) { const h=document.createElement('span'); h.className='floating-heart'; h.textContent=['♥','♡','✦','💜'][Math.floor(Math.random()*4)]; h.style.setProperty('--x', `${20+Math.random()*60}%`); h.style.setProperty('--y', `${35+Math.random()*35}%`); h.style.setProperty('--drift', `${(Math.random()-.5)*180}px`); h.style.setProperty('--size', `${14+Math.random()*24}px`); h.style.animationDelay=`${Math.random()*.4}s`; document.body.appendChild(h); setTimeout(()=>h.remove(),3000); } }
function fillLetter() { content.innerHTML=''; message.split('\n\n').forEach((paragraph, index) => { const p=document.createElement('p'); p.textContent=paragraph; p.style.opacity='0'; p.style.transform='translateY(8px)'; content.appendChild(p); setTimeout(()=>{p.style.transition='.7s';p.style.opacity='1';p.style.transform='none';}, index*120); }); }
envelope.addEventListener('click', () => { envelope.classList.add('open'); hearts(26); setTimeout(()=>{ fillLetter(); modal.classList.add('show'); modal.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden'; },650); });
document.querySelector('.modal-backdrop').addEventListener('click', closeLetter); document.getElementById('closeLetter').addEventListener('click', closeLetter); document.addEventListener('keydown', e=>{if(e.key==='Escape')closeLetter();});
loveButton.addEventListener('click',()=>{hearts(45);toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2800);});
for(let i=0;i<24;i++){const s=document.createElement('span');s.className='sparkle';s.textContent='✦';s.style.left=`${Math.random()*100}%`;s.style.top=`${Math.random()*100}%`;s.style.fontSize=`${8+Math.random()*12}px`;s.style.animationDelay=`${Math.random()*2}s`;document.getElementById('particles').appendChild(s);}
const pageUrl='https://ramilumbajen-dot.github.io/love-anniversary/';
if(window.QRCode) new QRCode(document.getElementById('qrcode'),{text:pageUrl,width:125,height:125,colorDark:'#432047',colorLight:'#ffffff',correctLevel:QRCode.CorrectLevel.H});
document.getElementById('downloadQr').addEventListener('click',()=>{const img=document.querySelector('#qrcode img')||document.querySelector('#qrcode canvas');const link=document.createElement('a');link.download='our-love-qr-code.png';link.href=img.tagName==='IMG'?img.src:img.toDataURL();link.click();});
let audio; document.getElementById('musicToggle').addEventListener('click',()=>{ if(!audio){ audio=new Audio('https://cdn.pixabay.com/audio/2022/10/30/audio_946f6a0c2e.mp3');audio.loop=true; } if(audio.paused){audio.play().catch(()=>{});document.querySelector('#musicToggle span').textContent='pause';}else{audio.pause();document.querySelector('#musicToggle span').textContent='music';} });
