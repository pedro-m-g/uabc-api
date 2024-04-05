import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import PrimaryButtonLink from '@/Components/PrimaryButtonLink'
import Table from '@/Components/Table'
import SecondaryButtonLink from '@/Components/SecondaryButtonLink'
import DeleteCoachForm from "./Partials/DeleteCoachForm";
import DangerButton from "@/Components/DangerButton";
import Pagination from "@/Components/Pagination";
import { useState } from "react";

export default function Index({ auth, coaches }) {
    const [coachToDelete, setCoachToDelete] = useState();

    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Asesorías
                </h2>
            }
        >
            <Head title="Asesorías" />

            <DeleteCoachForm
                coach={coachToDelete}
                show={!!coachToDelete}
                onClose={() => setCoachToDelete(null)}
            />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <PrimaryButtonLink href={route('coaches.create')}>
                                Registrar asesor
                            </PrimaryButtonLink>
                            <Table
                                header={
                                    <tr className="border border-gray-400 bg-gray-200">
                                        <th className="border border-gray-400">ID</th>
                                        <th className="border border-gray-400">Matrícula</th>
                                        <th className="border border-gray-400">Nombre</th>
                                        <th className="border border-gray-400">Acciones</th>
                                    </tr>
                                }
                            >
                                {coaches.data.map((coach) => (
                                    <tr key={coach.id}>
                                        <td className="border border-gray-400 px-4">
                                            {coach.id}
                                        </td>
                                        <td className="border border-gray-400 px-4 text-ellipsis">
                                            {coach.school_id}
                                        </td>
                                        <td className="border border-gray-400 px-4">
                                            {coach.name}
                                        </td>
                                        <td className="border border-gray-400 p-4">
                                            <div className="flex gap-4">
                                                <SecondaryButtonLink href={route('coaches.show', coach)}>
                                                    Ver detalles
                                                </SecondaryButtonLink>
                                                <SecondaryButtonLink href={route('coaches.edit', coach)}>
                                                    Editar
                                                </SecondaryButtonLink>
                                                <DangerButton onClick={() => setCoachToDelete(coach)}>
                                                    Eliminar
                                                </DangerButton>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </Table>
                            <Pagination
                                {...coaches}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
