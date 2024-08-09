class Validate {
    constructor() {
        this.form = document.querySelector('#form')
        this.events() 
    }

    events() {
        this.form.addEventListener('submit', e => {
            this.handleSubmit(e)
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        for(let errorText of this.form.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        const isHourValid = this.isHourValid()

        if(isHourValid) {
            const calculate = new Calculate()
        }
    }

    isHourValid() {
        let initHour = document.querySelector('#initHour')
        let lastHour = document.querySelector('#lastHour')
        let valid = true

        const cleanInitHour = initHour.value.replace(/\D+/g, '')
        const cleanLastHour = lastHour.value.replace(/\D+/g, '')

        if(!cleanInitHour) {
            this.setError(initHour, 'Preencha o campo!')

            valid = false
        }

        if(!cleanLastHour) {
            this.setError(lastHour, 'Preencha o campo!')

            valid = false
        }


        if(cleanInitHour > cleanLastHour) {
            this.setError(lastHour, 'Não pode ser menor que a hora inicial!')
            
            valid = false
        }

        if(cleanInitHour.slice(0,2) > 23 || cleanInitHour.slice(0,2) < 0 || cleanInitHour.slice(2,4) > 60 || cleanInitHour.slice(2,4) < 0 || cleanInitHour.slice(4,7) > 60 || cleanInitHour.slice(4,7) < 0) {
            this.setError(initHour, 'Hora inválida!')

            valid = false
        }

        if(cleanLastHour.slice(0,2) > 23 || cleanLastHour.slice(0,2) < 0 || cleanLastHour.slice(2,4) > 60 || cleanLastHour.slice(2,4) < 0|| cleanLastHour.slice(4,7) > 60 || cleanLastHour.slice(4,7) < 0) {
            this.setError(lastHour, 'Hora inválida!')

            valid = false
        }

        return valid
    }

    setError(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }
}

const validate = new Validate()
const mask = new MaskHour()