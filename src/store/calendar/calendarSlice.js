import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

const tempEvent = {
    _id: new Date().getTime(),
    title: 'cumpleaños del jefe',
    notes: 'hay que comprar torta',
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: '#fafafa',
    user: {
        _id: '123',
        name: 'Frank'
    }
};


export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events: [tempEvent,],
        activeEvent: null,
    },
    reducers: {
        onSetActiveEvent: (state,action)=>{
            state.activeEvent = action.payload;
        } ,
        onAddNewEvent: (state,action)=>{
            state.events.push(action.payload);
            state.activeEvent = null;
        },
        onUpdateEvent:(state,action)=>{
            state.events = state.events.map(event =>{
                if(event._id === action.payload._id){
                    return action.payload;
                };
                return event;
            })
        },
        onDeleteEvent:(state)=>{
            if(state.activeEvent){
                state.events = state.events.filter(event => event._id !== state.activeEvent._id );
                
                state.activeEvent = null;
            };
        }
    }
});


export const { 
    onSetActiveEvent, 
    onAddNewEvent, 
    onUpdateEvent,
    onDeleteEvent
} = calendarSlice.actions;