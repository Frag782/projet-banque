import { useEffect } from "react";

const Notfound = () => {
    useEffect( () => {document.title = 'Page introuvable'}, []);

    return (
        <div>
            <h1 class='display-4 text-bg-light p-3 mb-5'>Oups...</h1>
            <p>Cette page n'existe pas. </p>
        </div>
    )
}

export default Notfound;