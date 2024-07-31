import Carousel from "./components/Carousel/Carousel";
import MovieCard from "./components/MovieCard/MovieCard";
import MovieSlide from "./components/MovieSlide/MovieSlide";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Carousel>
        <MovieSlide
          to="/movies"
          image="https://www.fsm-media.com/wp-content/uploads/2022/03/277466930_5428881863791250_5434462979725729051_n-scaled.jpg"
        />
        <MovieSlide
          to="/movies"
          image="https://www.fsm-media.com/wp-content/uploads/2022/03/277466930_5428881863791250_5434462979725729051_n-scaled.jpg"
        />
        <MovieSlide
          to="/movies"
          image="https://www.fsm-media.com/wp-content/uploads/2022/03/277466930_5428881863791250_5434462979725729051_n-scaled.jpg"
        />
        <MovieSlide
          to="/movies"
          image="https://www.fsm-media.com/wp-content/uploads/2022/03/277466930_5428881863791250_5434462979725729051_n-scaled.jpg"
        />
      </Carousel>
      <MovieCard
        image="https://cdn.marvel.com/content/1x/spider-mannowayhome_lob_crd_03.jpg"
        title="Spider-Man: No Way Home"
        year={2021}
        to="/movies"
      />
    </main>
  );
}
