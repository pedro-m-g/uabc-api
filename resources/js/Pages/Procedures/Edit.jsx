import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import EditProcedureForm from "./Partials/EditProcedureForm";
import PropTypes from "prop-types";

export default function Edit({ auth, procedure }) {
    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    <Link href={route('procedures.index')}>
                        <span className="underline">Trámites</span>
                    </Link>
                    &nbsp;&gt; Editar trámite #{procedure.id}
                </h2>
            }
        >
            <Head title={`Trámites - Editar trámite #${procedure.id}`} />

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

Edit.propTypes = {
    auth: PropTypes.shape({
        user: PropTypes.object
    }),
    procedure: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        steps: PropTypes.arrayOf(PropTypes.string)
    })
};
