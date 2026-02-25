(function(){
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightboxImg');

  function open(src, alt){
    lbImg.src = src;
    lbImg.alt = alt || '';
    lb.classList.add('open');
  }
  function close(){
    lb.classList.remove('open');
    lbImg.src = '';
  }

  document.querySelectorAll('[data-open]').forEach(img=>{
    img.addEventListener('click', ()=> open(img.getAttribute('data-open'), img.alt));
  });

  lb.addEventListener('click', close);
  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape') close();
  });
})();