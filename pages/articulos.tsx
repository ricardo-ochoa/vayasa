import React, { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import {
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    CardActions,
    Button,
    CardMedia,
} from '@mui/material';
import { reqUrl } from "./api/config";
import { PageLayout } from '../components/layouts/PageLayout';

interface Post {
    id: number;
    slug: string;
    title: { rendered: string };
    content: { rendered: string };
    featured_media: number;
    featuredImage?: string;
}

interface ArticulosProps {
    posts: Post[];
}

export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch(`${reqUrl}/posts?_fields=id,slug,title,content,featured_media`);
    const posts: Post[] = await res.json();

    // Obtener las URLs de las imágenes destacadas
    const postsWithImages = await Promise.all(posts.map(async (post) => {
        if (post.featured_media) {
            try {
                const mediaRes = await fetch(`${reqUrl}/media/${post.featured_media}`);
                const mediaData = await mediaRes.json();

                // Obtener la URL de la imagen en tamaño completo
                if (mediaData.media_details && mediaData.media_details.sizes && mediaData.media_details.sizes.full) {
                    post.featuredImage = mediaData.media_details.sizes.full.source_url;
                }
            } catch (error) {
                console.error(`Error fetching featured image for post ${post.id}:`, error);
            }
        }
        return post;
    }));

    return { 
        props: { 
            posts: postsWithImages 
        },
        revalidate: 14400
    };
};

const Articulos: React.FC<ArticulosProps> = ({ posts }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <PageLayout title={'Industrias VAYASA'} pageDescription={'Mantenimiento industrial · Ingeniería · Comercialización'}
            imageFullUrl={'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663371165/VAYASA/main-banner_avf1f8.jpg'}>
            <Container maxWidth="lg" sx={{ my: 12 }}>
                <Typography variant="h2" component="h1" gutterBottom mb={4}>
                    Artículos
                </Typography>
                <Grid container spacing={4}>
                    {posts.map((post) => (
                        <Grid item xs={12} sm={6} md={4} key={post.id}>
                            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <Link href={`/articulos/${post.slug}`} passHref legacyBehavior>
                                    <CardMedia
                                        component="img"
                                        image={post.featuredImage || '/placeholder-image.jpg'}
                                        alt={post.title.rendered || "Artículo sin título"}
                                        height="240"
                                    />
                                </Link>
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {post.title.rendered}
                                    </Typography>
                                    {mounted && (
                                        <Typography
                                            dangerouslySetInnerHTML={{
                                                __html: `${post.content.rendered.slice(0, 150)}...`
                                            }}
                                        />
                                    )}
                                </CardContent>
                                <CardActions>
                                    <Link href={`/articulos/${post.slug}`} passHref legacyBehavior>
                                        <Button size="large" component="a" sx={{
                                            width: '100%',            // Hace que el botón ocupe el 100% del ancho
                                            backgroundColor: 'primary',   // Color de fondo azul
                                            color: 'white',            // Texto blanco
                                            '&:hover': {
                                                backgroundColor: 'darkblue', // Cambia a un azul más oscuro al hacer hover
                                                color: 'white',
                                            },
                                        }}>
                                            Leer
                                        </Button>
                                    </Link>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </PageLayout>
    );
};

export default Articulos;
