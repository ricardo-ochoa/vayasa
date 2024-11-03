import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import {
    Container,
    Typography,
    Paper,
    Box,
    Breadcrumbs,
    AppBar,
    Toolbar,
    Button
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { reqUrl } from './../api/config';
import { PageLayout } from '../../components/layouts/PageLayout';

interface Post {
    id: number;
    slug: string;
    title: { rendered: string };
    content: { rendered: string };
}

interface PostProps {
    post: Post;
}

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#dc004e',
        },
    },
});

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch(`${reqUrl}/posts?_fields=id,slug`);
    const data = await res.json();

    const posts = Array.isArray(data) ? data : [];

    const paths = posts
        .filter((post) => typeof post.slug === 'string')
        .map((post) => ({
            params: { slug: post.slug },
        }));

    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const slug = params?.slug;

    if (typeof slug !== 'string') {
        return { notFound: true };
    }

    const res = await fetch(`${reqUrl}/posts?slug=${slug}&_fields=id,slug,title,content`);
    const data = await res.json();

    const post = Array.isArray(data) && data.length > 0 ? data[0] : null;

    if (!post) {
        return { notFound: true };
    }

    return { props: { post } };
};

const PostDetail: React.FC<PostProps> = ({ post }) => {
    return (
        <PageLayout title={'Industrias VAYASA'} pageDescription={'Mantenimiento industrial · Ingeniería · Comercialización'}
            imageFullUrl={'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663371165/VAYASA/main-banner_avf1f8.jpg'}>
            <Container sx={{ my: 14 }}>
                <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 6 }}>
                    <Link href="/articulos" passHref legacyBehavior>
                        <Typography color="inherit" component="a">Artículos</Typography>
                    </Link>
                    <Typography color="blue">{post.title.rendered}</Typography>
                </Breadcrumbs>
                <Box p={2}>
                    <Typography variant="h2" component="h1" gutterBottom mb={10}>
                        {post.title.rendered}
                    </Typography>
                    <Typography
                        component="div"
                        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                        sx={{
                            '& img': {
                                maxWidth: '100%',
                                height: 'auto',
                            },
                            '& a': {
                                color: 'primary.main',
                                textDecoration: 'none',
                                '&:hover': {
                                    textDecoration: 'underline',
                                },
                            },
                        }}
                    />
                </Box>
            </Container>
        </PageLayout >
    );
};

export default PostDetail;