import { type Directive } from 'vue'

const vLazy: Directive = {
    mounted(el: HTMLElement) {
        const loadImage = () => {
            const imageElement = el.tagName === 'IMG' ? el as HTMLImageElement : el.querySelector('img')

            if (imageElement) {
                if (imageElement.dataset.src) {
                    imageElement.src = imageElement.dataset.src
                    imageElement.removeAttribute('data-src')
                }
                // Si es un elemento con background-image
                if (el.dataset.bg) {
                    el.style.backgroundImage = `url(${el.dataset.bg})`
                    el.removeAttribute('data-bg')
                }
                el.classList.add('loaded')
            }
        }

        const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    loadImage()
                    observer.unobserve(el)
                }
            })
        }

        const observer = new IntersectionObserver(handleIntersect, {
            root: null,
            threshold: 0.1,
            rootMargin: '50px' // Cargar un poco antes de que entre
        })

        observer.observe(el)
    }
}

export default vLazy
