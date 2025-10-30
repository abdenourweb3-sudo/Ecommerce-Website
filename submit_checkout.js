const scriptURL = "https://script.google.com/macros/s/AKfycbyX3-hlL_f42vopGMUMq01F52AuiTmBc6StzaVsA_ABQ7wsWOsMP9VsP8hwjYSd_ab_bQ/exec"
let form = document.getElementById("form_contact")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    fetch(scriptURL,{
        method:"POST",
        body: new FormData(form),
    }).catch((error)=> console.error("eroor!", error.message))
})