import { Section } from 'astro-boilerplate-components';

const ProjectsFooter = () => (
  <Section>
    <a href="/portfolio-KV/">
      <div className="flex items-center">
        <img
          src="../public/icons8-home-32.png"
          alt="home icon"
          className="mr-4"
        />
        <p className="font-semibold text-purple-800">Retour à l'accueil</p>
      </div>
    </a>
  </Section>
);

export { ProjectsFooter };
