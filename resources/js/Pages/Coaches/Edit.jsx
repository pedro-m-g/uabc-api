import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import EditCoachForm from "./Partials/EditCoachForm";

export default function Edit({ auth, coach }) {
    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    <Link href={route('coaches.index')}>
                        <span className="underline">Asesorías</span>
                    </Link>
                    &nbsp;&gt; Editar asesor #{coach.id}
                </h2>
            }
        >
            <Head title={`Noticias - Editar asesor #${coach.id}`} />

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
