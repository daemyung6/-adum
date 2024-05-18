window.addEventListener('DOMContentLoaded', () => {
    const controlDiv = document.getElementById('controls')
    /**
     * 
     * @param {HTMLElement} element 
     * @param {*} name 
     * @param {*} min 
     * @param {*} max 
     * @param {*} unit 
     * @param {*} initValue 
     */
    function AddControl(element, name, min, max, unit, initValue, type) {
        const hr = document.createElement('hr')

        const nameDiv = document.createElement('div')
        nameDiv.classList.add('name')
        nameDiv.innerText = name

        const input = document.createElement('input')
        input.classList.add('value-control')
        input.setAttribute('type', 'range')
        input.setAttribute('min', min)
        input.setAttribute('max', max)

        controlDiv.appendChild(hr)
        controlDiv.appendChild(nameDiv)
        controlDiv.appendChild(input)


        input.addEventListener('input', (e) => {
            set(e.target.value)
        })
        input.value = initValue

        function set(value) {
            element.style[type] = value + unit
        }
        set(initValue)
    }


    AddControl(document.querySelector('.dgr .mouth'), '입 너비', 10, 50, '%', 25, 'width')
    AddControl(document.querySelector('.dgr .mouth'), '입 높이', 5, 30, 'px', 30, 'height')

})