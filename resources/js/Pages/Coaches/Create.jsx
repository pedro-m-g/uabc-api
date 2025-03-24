import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import EditCoachForm from "./Partials/EditCoachForm";
import PropTypes from "prop-types";

export default function Create({ auth }) {
    const coach = {
        school_id: '',
        name: '',
        description: '',
        is_available_monday: false,
        is_available_tuesday: false,
        is_available_wednesday: false,
        is_available_thursday: false,
        is_available_friday: false,
        is_available_saturday: false,
        monday_start_time: '12:00',
        monday_end_time: '13:00',
        tuesday_start_time: '12:00',
        tuesday_end_time: '13:00',
        wednesday_start_time: '12:00',
        wednesday_end_time: '13:00',
        thursday_start_time: '12:00',
        thursday_end_time: '13:00',
        friday_start_time: '12:00',
        friday_end_time: '13:00',
        saturday_start_time: '12:00',
        saturday_end_time: '13:00'
    };
    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    <Link href={route('coaches.index')}>
                        <span className="underline">Asesorías</span>
                    </Link>
                    &nbsp;&gt; Registrar asesor
                </h2>
            }
        >
            <Head title="Noticias - Registrar asesor" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <EditCoachForm
                                coach={coach}
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
    })
};
