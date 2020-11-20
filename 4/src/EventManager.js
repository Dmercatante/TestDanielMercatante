export default class EventManager{
    constructor(events)
    {
        this.events = events;
    }

    run() {
        for(let event of this.events)
        {
            setTimeout(function () {
                event.printEvent();
            }, event.seconds);
        }
    }
};