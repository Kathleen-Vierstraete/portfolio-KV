import { HeroAvatar, HeroSocial, Section } from 'astro-boilerplate-components';

import AvatarKV from '../../public/assets/images/AvatarMaker-removebg-preview.png';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={<>Hello, c'est Kate</>}
      description={
        <>
          Je suis développeuse FullStack, avec une certaine appétance pour le
          BackEnd. N'hésitez pas à découvrir mes projets, développés seule ou en
          équipe, toujours en 100% remote. Je suis disponible pour de nouvelles
          aventures pleines de code et de challenges. Contact :{' '}
          <span className="text-purple-800 hover:underline">
            ctrlkate89@gmail.com
          </span>
        </>
      }
      avatar={
        <img
          className="h-80 w-80"
          src={AvatarKV.src}
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <div className="mt-5 grid grid-cols-4 gap-4 md:grid-cols-8">
          <HeroSocial
            src="../public/assets/images/languagesIcons/icons8-html-48.png"
            alt="HTML icon"
          />

          <HeroSocial
            src="../public/assets/images/languagesIcons/icons8-css3-48.png"
            alt="CSS icon"
          />

          <HeroSocial
            src="../public/assets/images/languagesIcons/icons8-php-48.png"
            alt="PHP icon"
          />

          <HeroSocial
            src="../public/assets/images/languagesIcons/icons8-javascript-48.png"
            alt="JavaScript icon"
          />

          <HeroSocial
            src="../public/assets/images/languagesIcons/icons8-symfony-48.png"
            alt="Symfony icon"
          />

          <HeroSocial
            src="../public/assets/images/languagesIcons/icons8-react-48.png"
            alt="React icon"
          />

          <HeroSocial
            src="../public/assets/images/languagesIcons/icons8-mysql-48.png"
            alt="MySQL icon"
          />
        </div>
      }
    />
    <HeroAvatar
      title={<></>}
      description={<>Je parle aussi plusieurs langues</>}
      avatar={<></>}
      socialButtons={
        <div className="grid grid-cols-4 gap-4 md:grid-cols-8">
          <div className="flex flex-col items-center">
            <HeroSocial
              src="../public/assets/images/languagesIcons/icons8-france-48.png"
              alt="HTML icon"
            />
            <p>C2</p>
          </div>

          <div className="flex flex-col items-center">
            <HeroSocial
              src="../public/assets/images/languagesIcons/icons8-uk-48.png"
              alt="CSS icon"
            />
            <p>C1</p>
          </div>

          <div className="flex flex-col items-center">
            <HeroSocial
              src="../public/assets/images/languagesIcons/icons8-spain-flag-48.png"
              alt="PHP icon"
            />
            <p>B1</p>
          </div>

          <div className="flex flex-col items-center">
            <HeroSocial
              src="../public/assets/images/languagesIcons/icons8-china-48.png"
              alt="JavaScript icon"
            />
            <p>A2</p>
          </div>
        </div>
      }
    />
  </Section>
);

export { Hero };
