import { useLocation } from "react-router-dom"

export default function TextBox() {

    const location = useLocation();

    const isBusiness = location.pathname.includes('business');
    const isTravel = location.pathname.includes('travel');

    return (
        <section className={isBusiness || isTravel ? 'hide' : 'textbox'} >
            <p className="text">
            This website's purpose is to document my life for my future self. Any and all visitors are welcome to take a look around at what I've been up to. Under 'Business'
            you will find sporadic posts about my work and its milestones. Similarly, in the 'Travel' page I will add breadcrumbs of where I've globetrotted via the medium of photos.
            <br />
            <br />
            Hopefully the website will slowly fill with a picture of my life's journey. I am starting this page on the 25th September 2023; at the age of 22.
            </p>
        </section>
    )
}