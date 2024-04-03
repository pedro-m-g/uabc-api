import { JSX } from "react";

export default function ApplicationLogo(props: JSX.IntrinsicElements['img']) {
    return (
        <img src='/images/logo-uabc.png' alt='Escudo Oficial UABC' {...props} />
    );
}
