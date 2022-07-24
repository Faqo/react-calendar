import { useSelector, useDispatch } from 'react-redux'
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from '../store';
export const useCalendarStore = () => {
    
    const { events, activeEvent } = useSelector(state => state.calendar);
    
    const dispatch = useDispatch();

    const setActiveEvent = (calendarEvent) =>{
        dispatch(onSetActiveEvent(calendarEvent));
    }

    const startSavingEvent = async(calendarEvent) =>{
        //TODO: llega al bakend

        if(calendarEvent._id){
            dispatch(onUpdateEvent({...calendarEvent}));

        } else{
            dispatch(onAddNewEvent({
                ...calendarEvent, 
                _id:new Date().getTime()
            }) );
        }
    }

    const startDeleteEvent = () =>{
        dispatch(onDeleteEvent());
    }

    return{
        //propiedades
        events,
        activeEvent,
        hasEventSelected: !!activeEvent,

        //metodos
        setActiveEvent,
        startSavingEvent,
        startDeleteEvent,
    }
}