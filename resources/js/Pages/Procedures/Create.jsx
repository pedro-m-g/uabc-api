import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import EditProcedureForm from "./Partials/EditProcedureForm";

export default function Create({ auth }) {
    const procedure = {
        title: '',
        steps: ['']
    };
    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    <Link href={route('procedures.index')}>
                        <span className="underline">Trámites</span>
                    </Link>
                    &nbsp;&gt; Registrar trámite
                </h2>
            }
        >
            <Head title="Trámmites - Registrar trámites" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <EditProcedureForm
                                procedure={procedure}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
