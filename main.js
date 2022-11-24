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
        this.options = Object.assign({},{
            slidesToScroll: 1,
            slidesVisible: 1
        }, options)
        let root = document.createElement('div')
        root.setAttribute('class', 'carousel')
        this.element.appendChild(root)

    }

    createDivWithClass (className){

    }
    
}


document.addEventListener('DOMContentLoaded', Function(){
    new carousel (document.querySelector('#galerie-emprunt'), {
        slidesToScroll: 3,
        slidesVisible: 3
    }) 
})

