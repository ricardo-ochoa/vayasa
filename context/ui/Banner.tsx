import {useState, useEffect, FC} from 'react'
import { Box, Typography, Button, Link, CardActions, CardContent, CardMedia, CardActionArea } from '@mui/material'
import { useRouter } from 'next/router'

// const imageArray = ['https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659715889/web/pricesas_ho9bvk.jpg',
// 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659384131/web/dino_desktop_ygkqdf.jpg',
// 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659715889/web/PORTADAS-INICIO_uyb6ax.jpg',
// 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659715889/web/mickey_mrb6el.jpg',
// 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659715889/web/GAGA_hict91.jpg'];

// const imageArrayMobile = ['https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660164354/web/PORTADA_03_nnyy6f.jpg',
// 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660164355/web/PORTADA_08_qona5y.jpg',
// 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660164354/web/PORTADA_06_m6a6op.jpg',
// 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660164354/web/PORTADA_05_gabal2.jpg',
// 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660164354/web/PORTADA_04_aur1wl.jpg',
// 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660164354/web/PORTADA_02_lpfhez.jpg'];

interface Props {
  image: string,
  imageMobile: string
}

export const Banner:FC<Props> = ({ imageMobile, image  }) => {

    const [mobile, setMobile] = useState<boolean | undefined>(true)

    // const [count, setCount] = useState(0);
    // useEffect(() => {
    //   const timerId = setInterval(() => {
        
    //     setCount(count => count + 1);
    //   }, 4000);
  
    //   return () => clearInterval(timerId);
    // }, []);

    // const image = imageArray[count % imageArray.length];
    // const imageMobile = imageArrayMobile[count % imageArrayMobile.length];
    
  useEffect(() => {
    const updateMobile = () => {
      setMobile(window.innerWidth < 900 ? true : false)
    }
    updateMobile()
    window.addEventListener('resize', updateMobile)
    return () => {
      window.removeEventListener('resize', updateMobile)
    }
  }, [])

  const router = useRouter();

  const navigateTo = ( url: string ) => {
    router.push(url)
  }
  
  return (
    <>
          <Box width="100%"
          display={'flex'}
          justifyContent={'center'}
          sx={{
            alignItems:{sm:'flex-start', md:'center'},
            marginBottom:"5rem"
           }}
          >

            <Box width='100%'>
              { mobile
                ?
                <Box>
                  <CardActionArea  onClick={ () => navigateTo('#nosotros')}>
                  <CardMedia
                  
                  component="img"
                  src={ imageMobile }
                  alt="Girl in a jacket"
                  style={{objectFit:"cover"}}
                  width='100%'
                      >
                  </CardMedia>
                </CardActionArea>
                </Box>
                :
                <Box>
                  <CardActionArea onClick={ () => navigateTo('#nosotros')}>
                  <CardMedia
                    component="img"
                    src={ image }
                    alt="Girl in a jacket"
                    style={{objectFit:"cover"}}
                    width='100%'
                    height='100%'
                >
                </CardMedia>
                </CardActionArea>
                </Box>
              }
            </Box>

          </Box>
    </>
  )
}
