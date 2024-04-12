import logo from '../images/logo-uabc.png';

export default function ApplicationLogo(props) {
    return (
        <img src={logo} alt='Escudo Oficial UABC' {...props} />
    );
}
