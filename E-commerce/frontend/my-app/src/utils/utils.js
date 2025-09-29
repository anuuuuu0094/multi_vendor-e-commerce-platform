import { toast } from 'react-toastify';

export const toaster = (status, messgae) => {
    return toast[status](messgae, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    })
}


export const localStorageData = (name = null) => {
    const userData = localStorage.getItem("authUsers")
    const parsData = JSON.parse(userData)

    if (name) {
        return parsData[name];
    } else {
        return parsData;
    }
}

export const currentTime = () => {
    return new Date().toISOString().slice(0, 19) + 'Z';
}