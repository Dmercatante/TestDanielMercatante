export default class Event{
    create(seconds, type_event, message)
    {
        this.seconds = seconds;
        this.type_event = type_event;
        this.message = message;
    }

    printEvent()
    {
        console.log("At second %o: type: %o, message: %o", this.seconds, this.type_event, this.message);
    }
};