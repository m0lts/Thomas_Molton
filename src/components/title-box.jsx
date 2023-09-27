import { useLocation } from "react-router-dom";

export default function TitleBox() {

    const location = useLocation();

    const isBusiness = location.pathname.includes('business');
    const isTravel = location.pathname.includes('travel');

    return (
        <section className={isBusiness || isTravel ? 'center' : 'titlebox'} >
            <h1 className="title">Thomas Molton</h1>
        </section>
    )
}