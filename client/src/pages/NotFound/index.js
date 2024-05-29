import { useEffect } from "react";

export const NotFound = () => {
    useEffect( () => {document.title = 'Page introuvable'}, []);

    return (
        <div className='text-center'>
            <h1 className='display-4 text-bg-light p-3 mb-5'>Oups...</h1>
            <p>Cette page n'existe pas. </p>
        </div>
    )
}