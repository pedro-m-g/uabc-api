import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import Table from '@/Components/Table';
import PropTypes from "prop-types";

export default function Show({ auth, coach }) {
    const weekdays = {
        'monday': 'Lunes',
        'tuesday': 'Martes',
        'wednesday': 'Miércoles',
        'thursday': 'Jueves',
        'friday': 'Viernes',
        'saturday': 'Sábado'
    };

    const schedule = Object.keys(weekdays)
        .filter(day => coach[`is_available_${day}`])
        .map(day => {
            const weekDay =weekdays[day];
            const startTime =coach[`${day}_start_time`];
            const endTime = coach[`${day}_end_time`];
            return `${weekDay} de ${startTime} a ${endTime}`;
        });

    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    <Link href={route('coaches.index')}>
                        <span className="underline">Asesorías</span>
                    </Link>
                    &nbsp;&gt; Asesor #{coach.id}
                </h2>
            }
        >
            <Head title={`Asesorías - Asesor #${coach.id}`} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="grid grid-cols-3">
                                <Table className="col-span-2">
                                    <tr>
                                        <td className="bg-gray-300 border border-gray-400 p-2">
                                            <strong>ID</strong>
                                        </td>
                                        <td className="border border-gray-400 p-2">
                                            {coach.id}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="bg-gray-300 border border-gray-400 p-2">
                                            <strong>Matrícula</strong>
                                        </td>
                                        <td className="border border-gray-400 p-2">
                                            {coach.school_id}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="bg-gray-300 border border-gray-400 p-2">
                                            <strong>Nombre</strong>
                                        </td>
                                        <td className="border border-gray-400 p-2">
                                            {coach.name}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="bg-gray-300 border border-gray-400 p-2">
                                            <strong>Descripción de la asesoría</strong>
                                        </td>
                                        <td className="border border-gray-400 p-2">
                                            {coach.description}
                                        </td>
                                    </tr>
                                </Table>
                                <div className="py-4 px-8 space-y-2">
                                    {schedule.map(day => (
                                        <div key={day}>
                                            <strong>{day}</strong>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}

Show.propTypes = {
    auth: PropTypes.object({
        user: PropTypes.object()
    }),
    coach: PropTypes.object()
};
