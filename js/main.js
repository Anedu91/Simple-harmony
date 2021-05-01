/* VARIABLES */
const $rootElement = document.documentElement
const $scrollToTopBtn = document.querySelector(".scroll-top");

/* EVENTS */

document.addEventListener('DOMContentLoaded', () => {

  if($scrollToTopBtn){
    $scrollToTopBtn.addEventListener('click',scrollToTop)
    document.addEventListener("scroll", handleScroll)
  }
})

/* FUNCTIONS */
function scrollToTop() {
  
  $rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
function handleScroll(){
  const scrollTotal = $rootElement.scrollHeight - $rootElement.clientHeight;
  if (($rootElement.scrollTop / scrollTotal ) > 0.30 ) {
    // Show button
    $scrollToTopBtn.classList.add("showBtn")
  } else {
    // Hide button
    $scrollToTopBtn.classList.remove("showBtn")
  }
}