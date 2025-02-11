import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
import { StartupCardType } from "@/types";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const query = (await searchParams).query;
  
  const posts = [
    {
      _createdAt: "2022-01-01T00:00:00Z",
      views: 100,
      _id: "1",
      description: "A startup that does something",
      image: "https://unsplash.com/es/fotos/papel-pintado-robot-blanco-JjGXjESMxOY",
      category: "Tech",
      title: "We robots"
    }
  ]

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
