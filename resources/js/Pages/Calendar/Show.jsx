import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import Table from '@/Components/Table';
import SecondaryButtonLink from '@/Components/SecondaryButtonLink';
import DangerButton from '@/Components/DangerButton';
import DeleteCalendarActivityForm from './Partials/DeleteCalendarActivityForm';
import { useState } from "react";

export default function Show({ auth, activity }) {
    const startDate = activity.is_all_day
        ? `${activity.start_date}T${activity.start_time}`
        : activity.start_date;
    const endDate = activity.is_all_day
        ? `${activity.end_date}T${activity.end_time}`
        : activity.end_date;

    const [showDeleteForm, setShowDeleteForm] = useState(false);

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
                    &nbsp;&gt; Evento #{activity.id}
                </h2>
            }
        >
            <Head title="Calendario de Actividades" />

            <DeleteCalendarActivityForm
                activity={activity}
                show={showDeleteForm}
                onClose={() => setShowDeleteForm(false)}
            />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="grid grid-cols-2">
                                <Table>
                                    <tr>
                                        <td className="bg-gray-300 border border-gray-400 p-2">
                                            <strong>ID</strong>
                                        </td>
                                        <td className="border border-gray-400 p-2">
                                            {activity.id}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="bg-gray-300 border border-gray-400 p-2">
                                            <strong>Título</strong>
                                        </td>
                                        <td className="border border-gray-400 p-2">
                                            {activity.title}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="bg-gray-300 border border-gray-400 p-2">
                                            <strong>Fecha de inicio</strong>
                                        </td>
                                        <td className="border border-gray-400 p-2">
                                            {new Date(startDate).toLocaleDateString()}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="bg-gray-300 border border-gray-400 p-2">
                                            <strong>Fecha de fin</strong>
                                        </td>
                                        <td className="border border-gray-400 p-2">
                                            {new Date(endDate).toLocaleDateString()}
                                        </td>
                                    </tr>
                                </Table>
                                <div className="p-4 space-y-4">
                                    <div>
                                        <SecondaryButtonLink href={route('calendar.edit', activity)}>
                                            Editar
                                        </SecondaryButtonLink>
                                    </div>
                                    <div>
                                        <DangerButton onClick={() => setShowDeleteForm(true)}>
                                            Eliminar
                                        </DangerButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
