class Calculate {
    constructor() {
        this.initHour = document.querySelector('#initHour');
        this.lastHour = document.querySelector('#lastHour');
        this.operation()
    }

    operation() {
        const cleanInitHour = this.initHour.value.replace(/\D+/g, '')
        const cleanLastHour = this.lastHour.value.replace(/\D+/g, '')

        let hours = cleanInitHour.slice(0,2) - cleanLastHour.slice(0,2)
        let minutes = cleanInitHour.slice(2,4) - cleanLastHour.slice(2,4)

        if(cleanInitHour.slice(2,4) > cleanLastHour.slice(2,4)) {
            hours += 1
            minutes += cleanInitHour.slice(5,7) - 60
        }

        const result = document.querySelector('.result').innerHTML = `Tempo | ${this.format(hours)}:${this.format(minutes)}:00`
        return result
    }

    format(time) {
        if(time < 0) time = time * -1
        if(time < 10) time = `0${time}`


        return time
    }
}   