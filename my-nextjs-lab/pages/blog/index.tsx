import { GetStaticProps } from 'next';
import Link from 'next/link';
import postsData from '../../data.json';
import { Post } from '../../types/blog';

interface BlogListProps {
  posts: Post[];
}

export default function BlogList({ posts }: BlogListProps) {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Blog Posts (TypeScript Version)</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} style={{ marginBottom: '10px' }}>
            <Link href={`/blog/${post.id}`} style={{ fontSize: '18px', color: 'blue', textDecoration: 'none' }}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // Trong thực tế bạn có thể fetch API, ở đây ta dùng file json
  const posts: Post[] = postsData;
  return {
    props: {
      posts,
    },
  };
};