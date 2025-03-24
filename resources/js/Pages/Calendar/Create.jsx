import Authenticated from "@/Layouts/AuthenticatedLayout";
import EditCalendarActivity from './Partials/EditCalendarActivityForm';
import { Head, Link } from "@inertiajs/react";
import PropTypes from "prop-types";

export default function Create({ auth, activity }) {
    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    <Link href={route('calendar.index')}>
                        <span className="underline">
                            Calendario de Actividades
                        </span>
                    </Link>
                    &nbsp;&gt; Crear evento
                </h2>
            }
        >
            <Head title="Calendario de Actividades - Crear evento" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <EditCalendarActivity
                                activity={activity}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}

Create.propTypes = {
    auth: PropTypes.shape({
        user: PropTypes.object
    }),
    activity: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        is_all_day: PropTypes.bool,
        start_date: PropTypes.string,
        end_date: PropTypes.string,
        start_time: PropTypes.string,
        end_time: PropTypes.string
    })
};
