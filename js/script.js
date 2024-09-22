class Validate {
    constructor() {
        this.form = document.querySelector('#form');
        this.initHour = document.querySelector('#initHour');
        this.lastHour = document.querySelector('#lastHour');
        this.events();
    }

    events() {
        this.form.addEventListener('submit', e => this.handleSubmit(e));
        
        this.initHour.addEventListener('input', () => this.isHourValid());
        this.lastHour.addEventListener('input', () => this.isHourValid());
    }

    handleSubmit(e) {
        e.preventDefault();

        for(let errorText of this.form.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        const isHourValid = this.isHourValid();

        if (isHourValid) {
            const calculate = new Calculate();
        }
    }

    isHourValid() {
        for(let errorText of this.form.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        let valid = true;

        const cleanInitHour = this.initHour.value.replace(/\D+/g, '');
        const cleanLastHour = this.lastHour.value.replace(/\D+/g, '');

        if(!cleanInitHour) {
            this.setError(this.initHour, 'Preencha o campo!');
            valid = false;
        } else if(cleanInitHour.slice(0,2) > 23 || cleanInitHour.slice(0,2) < 0 || cleanInitHour.slice(2,4) > 60 || cleanInitHour.slice(2,4) < 0 || cleanInitHour.length < 4) {
            this.setError(this.initHour, 'Hora inválida!');
            valid = false;
        }

        if(!cleanLastHour) {
            this.setError(this.lastHour, 'Preencha o campo!');
            valid = false;
        } else if(cleanLastHour.slice(0,2) > 23 || cleanLastHour.slice(0,2) < 0 || cleanLastHour.slice(2,4) > 60 || cleanLastHour.slice(2,4) < 0 || cleanLastHour.length < 4) {
            this.setError(this.lastHour, 'Hora inválida!');
            valid = false;
        }

        return valid;
    }

    setError(campo, msg) {
        if (campo.nextElementSibling && campo.nextElementSibling.classList.contains('error-text')) {
            campo.nextElementSibling.remove();
        }
        
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }
}

const validate = new Validate()
const mask = new MaskHour()