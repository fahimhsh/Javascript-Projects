
let toastBox = document.querySelector('.toast_box')
let successMsg = '<i class="fa-solid fa-circle-check"></i> Successfully Submitted!'
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please Fix The Error!'
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Incvalid Input, check again!'


function showToast(msg) {
    let toast = document.createElement('div')
    toast.classList.add('toast')
    toast.innerHTML = msg
    toastBox.appendChild(toast)

    if(msg == errorMsg) {
        toast.classList.add('error')
    } else if(msg == invalidMsg) {
        toast.classList.add('invalid')
    }

    setTimeout(()=>{
        toast.remove()
    }, 5000)
}