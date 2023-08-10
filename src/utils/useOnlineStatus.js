import {useState , useEffect} from 'react'

const useOnlineStatus = () => {

    const [status , setStatus] = useState(true)

    useEffect(() => {

        window.addEventListener('online' , () => {
            setStatus(true)
        })

        window.addEventListener('offline' , () => {
            setStatus(false)
        })
    }, [])
    //boolean
    return status
}

export default useOnlineStatus