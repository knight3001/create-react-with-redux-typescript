import React from "react";
import FullCalendar, { sliceEvents, createPlugin } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import resourceTimeGridPlugin from "@fullcalendar/resource-timegrid";

function FullCalendarDemo() {
  const handleDateClick = (arg) => {
    // bind with an arrow function
    console.log(arg);
  };

  const renderEventContent = (eventInfo) => {
    console.log(eventInfo);
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  };

  return (
    <FullCalendar
      plugins={[
        dayGridPlugin,
        interactionPlugin,
        resourceTimelinePlugin,
        resourceTimeGridPlugin,
      ]}
      dateClick={handleDateClick}
      eventContent={renderEventContent}
      initialView="resourceTimeGridDay"
      resources={[
        { id: "a", title: "Room A" },
        { id: "b", title: "Room B" },
        { id: "c", title: "Room C" },
        { id: "d", title: "Room D" },
      ]}
      events="https://fullcalendar.io/demo-events.json?with-resources=4&single-day"
    />
  );
}

export default FullCalendarDemo;
