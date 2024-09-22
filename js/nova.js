class Nova {
    constructor() {
        this.inputs = document.querySelectorAll('input');
        this.result = document.querySelector('#result');
    }

    clearFields() {
        this.inputs.forEach(input => {
            input.value = '';
        });

        if (this.result) {
            this.result.innerHTML = '';
        }

        if (this.inputs.length > 0) {
            this.inputs[0].focus();
        }
    }
}

const nova = new Nova();
nova.clearFields();
