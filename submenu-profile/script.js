const img = document.querySelector(".main-profile")
const profileCard = document.querySelector(".profile-card")


img.addEventListener("click" , ()=>{
    profileCard.classList.toggle("active")
})