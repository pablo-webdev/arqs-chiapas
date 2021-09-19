    MicroModal.init({
    onShow: () => document.body.classList.add('howdy'),
    onClose: () => document.body.classList.remove('howdy'),
    awaitCloseAnimation: true,
    openClass: 'open'
})

function setImage(el){
let img = document.getElementById("imagen-modal-publicaciones");
img.setAttribute("src", el)
console.log(el)
}