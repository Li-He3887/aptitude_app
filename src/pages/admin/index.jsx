import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

function index() {
    const router = useRouter()

    useEffect(() => {
        if (!localStorage.getItem('token')) {
          router.replace('./auth/sign-in')
        } else {
            router.replace('./admin/dashboard')
        }
    }, [])
    return (
        <>
        </>
    )
}

export default index