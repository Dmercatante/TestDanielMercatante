import EventManager from './EventManager';
import Event from './Event';

export default class EventManagerFactory{
    static create(events, types) {
        const events_list = []
        for(let type of types)
        {
            for(let e of events)
            {
                if(e.type == type)
                {
                    let event = new Event();
                    event.create(e.second, e.type, e.message);
                    events_list.push(event);
                }
            }
        }
        
        return new EventManager(events_list);
    }
};