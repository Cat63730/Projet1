class carousel {

/**
 * 
 * @param {HTMLElement} element 
 * @param {*} options
 * @param {Object} options.slidesToScroll Nombre d'elements à faire défiler
 * @param {object} options.slidesVisible Nombre d'elements visibles dans un slide
 */

    constructor (element, options = {}){
        this.element =element
        this.options = object.assign({},{
            slidesToScroll: 1,
            slidesVisible: 1
        }, options)
        this.children = [].slice.call(element.children)
        let root = this.createDivWithClass('carousel')
        let container = this.createDivWithClass('carousel__container')
        root.appendChild(container)
        this.element.appendChild(root)
    }

    createDivWithClass (className) {
        let div = document.createElement('div')
        div.setAttribute('class', className)
        return div
    }

}

/**
 * 
 * @param {string} className
 * @returns {HTMLElement}
 */

document.addEventListener('DOMContentLoaded', Function() {
    new carousel(document.querySelector('#carousel1'), {
        slidesToScroll: 3,
        slidesVisible: 3
    }) 
})

