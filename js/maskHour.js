class MaskHour {
    constructor() {
        this.initHour = document.querySelector('#initHour');
        this.lastHour = document.querySelector('#lastHour');
        this.initHour.addEventListener('input', this.applyMask.bind(this));
        this.lastHour.addEventListener('input', this.applyMask.bind(this));
    }

    applyMask() {
        this.initHour.value = this.mask(this.initHour.value);
        this.lastHour.value = this.mask(this.lastHour.value);
    }

    mask(value) {
        value = value.replace(/\D/g, '');
        if (value.length > 6) {
            return value.replace(/(\d{2})(\d{2})(\d{2})(\d{1,2})/, '$1:$2:$3:$4');
        } else if (value.length > 4) {
            return value.replace(/(\d{2})(\d{2})(\d{2})/, '$1:$2:$3');
        } else if (value.length > 2) {
            return value.replace(/(\d{2})(\d{2})/, '$1:$2');
        } else {
            return value;
        }
    }
}