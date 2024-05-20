import React from 'react'
import { useRouter } from 'next/router'
import Navbar from '../components/Navbar/Navbar'
import DIgitalMareketing from '../components/Service/DIgitalMareketing'
import DataScience from '../components/Service/DataScience'
import DevOPS from '../components/Service/DevOPS'
import SEO from '../components/Service/SEO'
import WebDesign from '../components/Service/WebDesign'
import WebMobileDevelopment from '../components/Service/WebMobileDevelopment'
import Blog from './Blog'
import Footer from '@/components/Footer/Footer'
function Id() {
    const router = useRouter()
    const Service = router.query
    const serviceId = `${Service.Id}`

    if (serviceId.startsWith("web-design")) {
        return (
            <>
                <Navbar></Navbar>
                <WebDesign />
                <Footer/>
            </>
        )
    }

    if (serviceId.startsWith("Blog")) {
        return (
            <>
                <Blog />
            </>
        )
    }
    if (serviceId.startsWith("data-science")) {
        return (
            <>
                <Navbar></Navbar>
                <DataScience />
            </>
        )
    }
    if (serviceId.startsWith("devOps")) {
        return (
            <>
                <Navbar></Navbar>
                <DevOPS />
            </>
        )
    }
    if (serviceId.startsWith("digital-marketing")) {
        return (
            <>
                <Navbar></Navbar>
                <DIgitalMareketing />
            </>
        )
    }
    if (serviceId.startsWith("seo")) {
        return (
            <>
                <Navbar></Navbar>
                <SEO />
            </>
        )
    }
    if (serviceId.startsWith("web-mobile-development")) {
        return (
            <>
                <Navbar></Navbar>
                <WebMobileDevelopment />
            </>
        )
    }



}

export default Id
