package com.swiftyticket.services;

import java.util.List;

import com.swiftyticket.models.Event;

public interface EventService {
    List<Event> listEvents();
    Event getEvent(Integer id);
    Event addEvent(Event event);
    Event updateEvent(Integer id, Event event);
    void deleteEvent(Integer id);
}
