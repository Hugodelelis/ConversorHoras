class Nova {
    constructor() {
        this.inputs = document.querySelectorAll('input');
        this.result = document.querySelector('.result');
        this.form = document.querySelector('#form')
    }

    clearFields() {
        this.inputs.forEach(input => {
            input.value = '';
        });

        for(let errorText of this.form.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        if (this.result) {
            this.result.innerHTML = '';
        }

        if (this.inputs.length > 0) {
            this.inputs[0].focus();
        }
    }
}

document.querySelector('#new').addEventListener('click', (event) => {
    event.preventDefault();
    const nova = new Nova();
    nova.clearFields();
});