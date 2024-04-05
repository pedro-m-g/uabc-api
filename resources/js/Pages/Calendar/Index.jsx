import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';

export default function Index({ auth }) {
    const selectDate = (selectionInfo) => {
        window.location.href = route('calendar.create', {
            startDate: selectionInfo.startStr,
            endDate: selectionInfo.endStr,
            isAllDay: selectionInfo.allDay
        });
    };

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
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
