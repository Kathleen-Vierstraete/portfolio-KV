import {
  ColorTags,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectListEnglish = () => (
  <Section title={<>My Projects</>}>
    <div className="flex flex-col gap-6">
      <Project
        name="O'poils"
        description="Dating website for dogs, where dogs owners can meet and organize dates for their pets, to have amazing plays or unforgettable walks"
        link="projects/opoils/"
        img={{
          src: '/assets/images/opoils-logo.png',
          alt: 'Project Opoils Logo',
        }}
        category={
          <>
            <Tags color={ColorTags.ORANGE}>HTML</Tags>
            <Tags color={ColorTags.ROSE}>SCSS</Tags>
            <Tags color={ColorTags.BLUE}>PHP</Tags>
            <Tags color={ColorTags.YELLOW}>JAVASCRIPT</Tags>
            <Tags color={ColorTags.INDIGO}>REACT</Tags>
            <Tags color={ColorTags.STONE}>SYMFONY</Tags>
            <Tags color={ColorTags.AMBER}>TWIG</Tags>
          </>
        }
      />

      <Project
        name="Pixel Perfect"
        description="Site de vente d'articles multimédias. Envie d'acheter le casque dernier cri pour des parties endiablées en ligne? Ne cherchez pas plus loin."
        link="projects/pixelperfect/"
        img={{
          src: '/assets/images/pp-logo2.png',
          alt: 'Project Pixel Perfect',
        }}
        category={
          <>
            <Tags color={ColorTags.ORANGE}>HTML</Tags>
            <Tags color={ColorTags.PURPLE}>CSS</Tags>
            <Tags color={ColorTags.BLUE}>PHP</Tags>
            <Tags color={ColorTags.YELLOW}>JAVASCRIPT</Tags>
            <Tags color={ColorTags.INDIGO}>REACT</Tags>
            <Tags color={ColorTags.STONE}>SYMFONY</Tags>
          </>
        }
      />
      <Project
        name="React TO-DO LIST"
        description="Une application pour s'organiser, en version multilingue."
        link="projects/react-todo-list/"
        img={{
          src: '/assets/images/todo-list-logo2.png',
          alt: 'Project Todo list logo',
        }}
        category={
          <>
            <Tags color={ColorTags.ORANGE}>HTML</Tags>
            <Tags color={ColorTags.PURPLE}>CSS</Tags>
            <Tags color={ColorTags.YELLOW}>JAVASCRIPT</Tags>
            <Tags color={ColorTags.INDIGO}>REACT</Tags>
          </>
        }
      />

      <Project
        name="Le Petit Labyrinthe"
        description="Une petite pause via ce jeu pour m'aider à trouver de nouvelles opportunités et redévouvrir mon CV."
        link="projects/tinygame/"
        img={{
          src: '/assets/images/laby-logo2.png',
          alt: 'Project Todo list logo',
        }}
        category={
          <>
            <Tags color={ColorTags.ORANGE}>HTML</Tags>
            <Tags color={ColorTags.PURPLE}>CSS</Tags>
            <Tags color={ColorTags.YELLOW}>JAVASCRIPT</Tags>
          </>
        }
      />

      <Project
        name="Koney Island"
        description="Un thème créé via Wordpress, avec toutes les fonctionnalités nécessaires en backoffice"
        link="projects/koney/"
        img={{
          src: '/assets/images/koney-logo.png',
          alt: 'Koney Wordpress logo',
        }}
        category={
          <>
            <Tags color={ColorTags.ORANGE}>HTML</Tags>
            <Tags color={ColorTags.PURPLE}>CSS</Tags>
            <Tags color={ColorTags.BLUE}>PHP</Tags>
            <Tags color={ColorTags.YELLOW}>JAVASCRIPT</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectListEnglish };
