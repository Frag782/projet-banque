import { useEffect } from "react";
import { useAccounts } from "../../../providers/AccountProvider";
import { AccountList } from "./AccountList";

const Accounts = () => {
    const { accounts, getAccounts }  = useAccounts();

    useEffect( () => { getAccounts(); }, [])

    return (
        <div className='col col-md-6 offset-md-3 my-3'>
            <h5 className='mb-3'>Mes comptes</h5>

            { accounts ? (
                <AccountList accounts={ accounts }/>
            ) : (
                <div className='text-center my-5'>
                    <div className="spinner-border text-success" role="status">
                        <span className="sr-only">Chargement...</span>
                    </div>
                </div>
            )}


        </div>
    )
}

export default Accounts;