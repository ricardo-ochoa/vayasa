import type { NextPage } from 'next'

import { PageLayout } from '../components/layouts/PageLayout'
import { Banner } from '../context'


const Home: NextPage = () => {
  return (
    <PageLayout title={''} pageDescription={'Mantenimiento industrial · Oil & Gas · Comercialización'} imageFullUrl={'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663371165/VAYASA/main-banner_avf1f8.jpg'}>
      <Banner image={'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663371165/VAYASA/main-banner_avf1f8.jpg'} imageMobile={'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663371824/VAYASA/mobile-banner_uqc36z.jpg'}></Banner>
    </PageLayout>
  )
}

export default Home
