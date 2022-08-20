class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this.timerId = null;
    }


    addClock (time, callback, id) {
        if(typeof id === 'undefined') {
            throw new Error('будильник не назван');
        } else if (typeof this.alarmCollection.find(key => key.id === id) !== 'undefined') {
            return console.error('такой будильник уже есть');
        }

        return this.alarmCollection.push( {time, callback, id} );
    }

    removeClock (id) {
        const serchfilter1 = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter (key => key.id !==id);
        const serchfilter2 = this.alarmCollection.length;

        return serchfilter1 > serchfilter2;
    }

    getCurrentFormattedTime () {
        let currentTime = new Date();
        const editTime = (alrm) => {
            if (alrm < 10) {
                return `0${alrm}`;
            }
            return alrm;
        }
        return (currentTime.getHours() + ":" + currentTime.getMinutes());
    }

    start () {
        const checkClock = (alrm) => {
            const alarm = this.getCurrentFormattedTime();
            if (alrm.time === alarm) {
                return alrm.callback();
            }
        }
    
        if (this.timerId === null) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach(key => checkClock(key));
            }, 333);
        }
        return;    
    }

    stop () {
        if(this.timerId !== null) {
            clearInterval(this.timerId);
        }
        
        return this.timerId = null;
    }

    printAlarms() {
        return this.alarmCollection.forEach(key => console.log(`${key.id}: ${key.time}`));
    }   

    clearAlarms () {
        this.stop();

        return this.alarmCollection = [];
    }
}

