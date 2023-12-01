export function removeElem(fon: HTMLDivElement, title: HTMLDivElement, logos: HTMLDivElement) {

  let timeDeley = 4500
  const gap = 1000
  document.body.style.overflow = "hidden"
  fon.style.transitionDuration = `${gap}ms`
  logos.style.opacity = "0"
  title.style.opacity = "0"
  
  
  setTimeout(() => {
    fon.style.display = "none"
    document.body.style.overflow = ""
  }, timeDeley)
  
  setTimeout(() => {
    fon.style.opacity = '0'
  }, timeDeley - gap)

  setTimeout(() => {
    title.style.transitionDuration = `${gap}ms`
    title.style.opacity = "1"
  }, gap*2)

  setTimeout(() => {
    logos.style.transitionDuration = `${gap}ms`
    logos.style.opacity = "1"
  }, gap/2)

  
}