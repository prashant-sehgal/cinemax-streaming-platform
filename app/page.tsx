import React from "react";
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
      <Row>
        <MovieCard
          image="https://cdn.marvel.com/content/1x/spider-mannowayhome_lob_crd_03.jpg"
          title="Spider-Man: No Way Home"
          year={2021}
          to="/movies"
        />
        <MovieCard
          image="https://cdn.marvel.com/content/1x/doctorstrangeinthemultiverseofmadness_lob_crd_02_3.jpg"
          title="Doctor Strange in the Multiverse of Madness"
          year={2022}
          to="/movies"
        />
        <MovieCard
          image="https://cdn.marvel.com/content/1x/avengersinfinitywar_lob_crd_02_1.jpg"
          title="Avengers: Infinity War"
          year={2018}
          to="/movies"
        />
        <MovieCard
          image="https://cdn.marvel.com/content/1x/captainamerica_lob_crd_01.jpg"
          title="Captain America: The First Avenger"
          year={2011}
          to="/movies"
        />
        <MovieCard
          image="https://cdn.marvel.com/content/1x/spider-mannowayhome_lob_crd_03.jpg"
          title="Spider-Man: No Way Home"
          year={2021}
          to="/movies"
        />
        <MovieCard
          image="https://cdn.marvel.com/content/1x/doctorstrangeinthemultiverseofmadness_lob_crd_02_3.jpg"
          title="Doctor Strange in the Multiverse of Madness"
          year={2022}
          to="/movies"
        />
        <MovieCard
          image="https://cdn.marvel.com/content/1x/avengersinfinitywar_lob_crd_02_1.jpg"
          title="Avengers: Infinity War"
          year={2018}
          to="/movies"
        />
        <MovieCard
          image="https://cdn.marvel.com/content/1x/captainamerica_lob_crd_01.jpg"
          title="Captain America: The First Avenger"
          year={2011}
          to="/movies"
        />
        <MovieCard
          image="https://cdn.marvel.com/content/1x/spider-mannowayhome_lob_crd_03.jpg"
          title="Spider-Man: No Way Home"
          year={2021}
          to="/movies"
        />
        <MovieCard
          image="https://cdn.marvel.com/content/1x/doctorstrangeinthemultiverseofmadness_lob_crd_02_3.jpg"
          title="Doctor Strange in the Multiverse of Madness"
          year={2022}
          to="/movies"
        />
        <MovieCard
          image="https://cdn.marvel.com/content/1x/avengersinfinitywar_lob_crd_02_1.jpg"
          title="Avengers: Infinity War"
          year={2018}
          to="/movies"
        />
        <MovieCard
          image="https://cdn.marvel.com/content/1x/captainamerica_lob_crd_01.jpg"
          title="Captain America: The First Avenger"
          year={2011}
          to="/movies"
        />
        <MovieCard
          image="https://cdn.marvel.com/content/1x/spider-mannowayhome_lob_crd_03.jpg"
          title="Spider-Man: No Way Home"
          year={2021}
          to="/movies"
        />
        <MovieCard
          image="https://cdn.marvel.com/content/1x/doctorstrangeinthemultiverseofmadness_lob_crd_02_3.jpg"
          title="Doctor Strange in the Multiverse of Madness"
          year={2022}
          to="/movies"
        />
        <MovieCard
          image="https://cdn.marvel.com/content/1x/avengersinfinitywar_lob_crd_02_1.jpg"
          title="Avengers: Infinity War"
          year={2018}
          to="/movies"
        />
        <MovieCard
          image="https://cdn.marvel.com/content/1x/captainamerica_lob_crd_01.jpg"
          title="Captain America: The First Avenger"
          year={2011}
          to="/movies"
        />
      </Row>
    </main>
  );
}

function Row({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className={styles.row}>{children}</div>;
}
