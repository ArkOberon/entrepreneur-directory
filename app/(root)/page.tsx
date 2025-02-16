import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
import { StartupCardType } from "@/types";
import { client } from "@/sanity/lib/client";
import { STARTUPS_QUERY } from "@/lib/queries";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const query = (await searchParams).query;

  const posts = await client.fetch(STARTUPS_QUERY)

  /* const posts = [
    {
      _createdAt: new Date().toDateString(),
      views: 100,
      author: { _id: "1", name: "Pedro M Cruz" },
      _id: "1",
      description: "A startup that does something",
      image: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?q=80&w=2157&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Tech",
      title: "We robots"
    }
  ] */

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch your startup, connect with entrepreneurs</h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, adn Get Noticed in virtual competitions.
        </p>
        <SearchForm query={query} />
      </section> 

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"`: 'All Startups'}
        </p>

        <ul className="mt-7 card_grid">
          {
            posts?.length > 0 ? (
              posts.map((post: StartupCardType) => (
                <StartupCard key={post?._id} post={post}/>
              ))
            ) : (
              <p className="no-results">No results found</p>
            )
          }
        </ul>
      </section>    
    </>
  );
}
