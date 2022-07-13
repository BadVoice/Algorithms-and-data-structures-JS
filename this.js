    const btns = document.querySelectorAll('.btn')

    btns.forEach((el) => {

        el.addEventListener('click', function() {

            this.style.border = 'solid 2px red'

        })


    })