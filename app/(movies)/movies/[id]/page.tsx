import { Suspense } from "react";
import MovieVidoes from "../../../../components/movie-videos";
import MovieInfo, { getMovie } from "../../../../components/movie.info";
import { API_URL } from "../../../(home)/page";
interface IPrams {
  params: { id: string };
}
export async function generateMetadata({ params: { id } }: IPrams) {
  const movie = await getMovie(id);

  return { title: `${movie.title}` };
}

export default async function MovieDetailPage({ params: { id } }: IPrams) {
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVidoes id={id} />
      </Suspense>
    </div>
  );
}
