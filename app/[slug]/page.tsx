export const dynamic = "force-dynamic";
// workaround for the DYNAMIC_SERVER_USAGE error:
// export const revalidate = 0;

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Record<string, string | string[]>;
}) {
  return { title: searchParams.foo || "Default" };
}

export default function Home({ params }: { params: { slug: string } }) {
  return (
    <main>
      <div>Hello {params.slug}!</div>
    </main>
  );
}
