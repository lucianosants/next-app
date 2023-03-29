import { client } from '@/lib/prisma';

export async function GET(request: Request) {
    const allPosts = await client.post.findMany();

    return new Response(JSON.stringify(allPosts));
}
