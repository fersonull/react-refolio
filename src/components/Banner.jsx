import { useLocation } from "react-router-dom"

const Banner = (props) => {

    const url = useLocation()

    console.log(url.pathname)

    function changeBanner(path) {
        return url.pathname === path
    }

    const banners = [
        'Home',
        'About',
    ]

    return (
        <>
            <div className="w-full">
                <h1 className="text-3xl font-bold">
                    {changeBanner('/') ? 'Home' : 'About'}
                </h1>
            </div>
        </>
    )
}

export default Banner