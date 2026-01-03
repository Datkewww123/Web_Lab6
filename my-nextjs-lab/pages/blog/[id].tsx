import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import postsData from '../../data.json';
import { Post } from '../../types/blog';
import Link from 'next/link';

interface PostDetailProps {
  post: Post | null;
}

export default function PostDetail({ post }: PostDetailProps) {
  const router = useRouter();
  if (router.isFallback) {
    return <h1 style={{ padding: '20px' }}>Loading new post content...</h1>;
  }

  if (!post) {
    return <h1 style={{ padding: '20px' }}>Post not found!</h1>;
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '800px' }}>
      <Link href="/blog">← Back to Blog List</Link>
      <hr />
      <h1 style={{ color: '#333' }}>{post.title}</h1>
      <p style={{ lineHeight: '1.6', fontSize: '1.1rem', color: '#555' }}>
        {post.content}
      </p>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts: Post[] = postsData;
  
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  return {
    paths,
    fallback: true, 
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string;
  const posts: Post[] = postsData;
  const post = posts.find((p) => p.id === id) || null;

  return {
    props: {
      post,
    },
    revalidate: 10, 
  };
};