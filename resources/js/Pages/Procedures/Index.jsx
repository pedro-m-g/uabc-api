import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import PrimaryButtonLink from '@/Components/PrimaryButtonLink'
import SecondaryButtonLink from '@/Components/SecondaryButtonLink'
import DeleteProcedureForm from "./Partials/DeleteProcedureForm";
import DangerButton from "@/Components/DangerButton";
import Pagination from "@/Components/Pagination";
import { useState } from "react";

export default function Index({ auth, procedures }) {
    const [procedureToDelete, setProcedureToDelete] = useState();

    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Trámites</h2>}
        >
            <Head title="Trámites" />

            <DeleteProcedureForm
                procedure={procedureToDelete}
                show={!!procedureToDelete}
                onClose={() => setProcedureToDelete(null)}
            />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <PrimaryButtonLink href={route('procedures.create')}>
                                Registrar trámite
                            </PrimaryButtonLink>
                            
                            <Pagination
                                {...procedures}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
