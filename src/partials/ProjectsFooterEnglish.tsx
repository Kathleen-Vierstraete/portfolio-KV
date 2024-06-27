import { Section } from 'astro-boilerplate-components';

const ProjectsFooterEnglish = () => (
  <Section>
    <a href="/en/">
      <div className="flex items-center">
        <img src="/icons8-home-32.png" alt="home icon" className="mr-4" />
        <p className="font-semibold text-purple-800">Back home</p>
      </div>
    </a>
  </Section>
);

export { ProjectsFooterEnglish };
