import React from "react";
import styles from "./page.module.css";
import Poster from "./Poster";
import Sub from "./Sub";
import Title from "./Title";
import Header from "./Header";
import Ratings from "./Ratings";
import Container from "./Container";
import Details from "./Details";
import Feature from "./Feature";
import Genre from "./Genre";
import OverviewTitle from "./OverviewTitle";
import Description from "./Description";
import Overview from "./Overview";
import WatchNow from "./WatchNow";

interface Props {
  params: { id: string };
}

export default function page({ params }: Props) {
  return (
    <div className={styles.page}>
      <Poster
        poster="https://cdn.marvel.com/content/1x/avengersinfinitywar_lob_crd_02_1.jpg"
        href="/movies"
      />
      <Details>
        <Header>
          <Container>
            <Title>Avengers: Infinity War</Title>
            <Sub year={2018} duration={5200} age={16} />
          </Container>
          <Ratings>9.0</Ratings>
        </Header>
        <Overview>
          <OverviewTitle>Overview</OverviewTitle>
          <Description>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
            sequi rem, enim nam dolorem unde cumque sapiente incidunt obcaecati
            similique sint veniam repellat sed! Quos dolores repellendus
            pariatur architecto soluta.
          </Description>
          <Feature title="Staring">
            Robert Downey Jr., Chris Hemsworth, Mark Ruffalo
          </Feature>
          <Feature title="Created By">Anthony Russo, Joe Russo</Feature>
          <Feature title="Genre">
            <Genre genre="Action" />
            <Genre genre="Adventure" />
            <Genre genre="Sci-Fi" />
          </Feature>
        </Overview>
        <WatchNow href="/player" />
      </Details>
    </div>
  );
}
