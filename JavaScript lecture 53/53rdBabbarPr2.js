let anchorEle=document.getElementById('fanchor');
anchorEle.addEventListener('click',function(event){
    event.preventDefault();
    anchorEle.textContent="Click ho gya hai";
});