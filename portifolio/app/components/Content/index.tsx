'use client'
import Contact from "../Contact";
import Experience from "../Experience";
import Social from "../Social";
import { ContentContainer } from "./style";

export default function Content() {
  return (
    <ContentContainer>
      <div>
        <h1>Ei, eu sou o sKz Dev!</h1>
        <br></br>
        <span>
          Sou desenvolvedor web fullstack, especializado em ReactJS, NextJS e NodeJS. Atualmente, atuo como desenvolvedor backend em uma agência focada em soluções web, onde também contribuo para a criação de plugins e implementações de melhorias em UI/UX e SEO, sempre buscando otimizar a experiência do usuário e o desempenho dos projetos.
        </span>
        <Social />

        <h1>Experience</h1>
        <Experience />

        <h1>Contate-me</h1>
        <Contact />
      </div>
    </ContentContainer>
  )
}