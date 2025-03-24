import Authenticated from "@/Layouts/AuthenticatedLayout";
import EditCalendarActivity from './Partials/EditCalendarActivityForm';
import { Head, Link } from "@inertiajs/react";
import PropTypes from "prop-types";

export default function Edit({ auth, activity }) {
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
                    &nbsp;&gt; Editar evento #{activity.id}
                </h2>
            }
        >
            <Head title={`Calendario de Actividades - Editar evento #${activity.id}`} />

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

Edit.propTypes = {
    auth: PropTypes.shape({
        user: PropTypes.object
    }),
    activity: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        is_all_day: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
        start_date: PropTypes.string,
        end_date: PropTypes.string,
        start_time: PropTypes.string,
        end_time: PropTypes.string
    })
};
