var app = new Vue({
    el: '#app',
    data: {
        status: "ready", //run, ready, wait
        isPaused: false,
        time: null,
        timePrev: null,
        timer: null,
        millis: null,
    },
    methods: {
        startTime() {
            console.log('start');
            let step = 100;
            this.status = 'run';
            if (!this.millis) {
                this.millis = this.timePrev * 1000;
            }
            this.timer = setInterval(() => {
                if (this.millis <= 0) {
                    this.resetTime();
                    alert("Your time is up!")
                    return;
                }
                this.millis -= step;
                this.timePrev = Math.floor(this.millis / 1000);
            }, step);
            // it will start to count down to 0 then show message
        },
        pauseTime() {
            console.log('pause');
            this.status = 'wait';
            this.isPaused = !this.isPaused;
            if (this.isPaused) {
                clearInterval(this.timer);
            } else {
                this.startTime();
            }

            //it will show current time left
        },
        resetTime() {
            console.log('reset');
            this.status = 'ready';
            this.isPaused = false;
            this.timePrev = this.time;
            this.millis = null;
            clearInterval(this.timer);
            // it will show full time
        },
        updateValue(event) {
            const value = event.target.value
            if (String(value).length <= 7 && value >= 0) {
                this.timePrev = value;
            } else {
                this.time = this.timePrev;
            }
        },

    }
})