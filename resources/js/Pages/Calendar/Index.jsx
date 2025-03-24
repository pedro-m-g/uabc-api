import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';
import PropTypes from "prop-types";

export default function Index({ auth, activities }) {
    const events = activities.map(activity => ({
        id: activity.id,
        title: activity.title,
        start: activity.is_all_day
            ? `${activity.start_date}T${activity.start_time}`
            : activity.start_date,
        end: activity.is_all_day
            ? `${activity.end_date}T${activity.end_time}`
            : activity.end_date,
        allDay: activity.is_all_day
    }));

    const selectDate = (selectionInfo) => {
        window.location.href = route('calendar.create', {
            startDate: selectionInfo.startStr,
            endDate: selectionInfo.endStr,
            isAllDay: selectionInfo.allDay
        });
    };

    const selectEvent = (eventClickInfo) => {
        window.location.href = route('calendar.show', eventClickInfo.event.id);
    }

    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Calendario de Actividades
                </h2>
            }
        >
            <Head title="Calendario de Actividades" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <FullCalendar
                                plugins={[ interactionPlugin, dayGridPlugin ]}
                                initialView="dayGridMonth"
                                headerToolbar={{
                                    left: 'prev,next',
                                    center: 'title',
                                    right: 'dayGridMonth,dayGridWeek,dayGridDay'
                                }}
                                locale={esLocale}
                                selectable={true}
                                selectMirror={true}
                                select={selectDate}
                                events={events}
                                eventClick={selectEvent}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}

Index.propTypes = {
    auth: PropTypes.shape({
        user: PropTypes.object
    }),
    activities: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        is_all_day: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
        start_date: PropTypes.string,
        end_date: PropTypes.string,
        start_time: PropTypes.string,
        end_time: PropTypes.string
    }))
};
