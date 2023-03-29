'use client';

interface PostsProps {
    data: Array<{
        authorId: string;
        content: string;
        createdAt: string;
        id: string;
        published: boolean;
        title: string;
    }>;
}

export default function Posts({ data }: PostsProps) {
    return (
        <ul>
            {data?.map((post, index) => (
                <li className="p-3 my-2 rounded-lg bg-primary-100" key={index}>
                    {post.title}
                </li>
            ))}
        </ul>
    );
}
