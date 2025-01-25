import type { NextPage } from 'next'

import { PageLayout } from '../components/layouts/PageLayout'
import { Gestion } from '../components/ui/Gestion'


const Home: NextPage = () => {
  return (
    <PageLayout title={'Industrias VAYASA'} pageDescription={'Mantenimiento industrial · Ingeniería · Comercialización'} imageFullUrl={'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663371165/VAYASA/main-banner_avf1f8.jpg'}>
      <Gestion />
    </PageLayout>
  )
}

export default Home
