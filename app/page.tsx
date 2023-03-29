import Posts from '@/components/Posts';

async function getPosts() {
    const response = await fetch('http://localhost:3000/api/posts');

    if (!response.ok) {
        throw new Error('Ocorreu um erro ao obter posts!');
    }

    return response.json();
}

export default async function Home() {
    const data = await getPosts();

    return (
        <main className="my-5">
            <Posts data={data} />
        </main>
    );
}
