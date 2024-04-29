import { HeroAvatar, HeroSocial, Section } from 'astro-boilerplate-components';

import AvatarKV from '../../public/assets/images/AvatarMaker-removebg-preview.png';
import ChinaFlag from '../../public/assets/images/languagesIcons/icons8-china-48.png';
import CSSLogo from '../../public/assets/images/languagesIcons/icons8-css3-48.png';
import FranceFlag from '../../public/assets/images/languagesIcons/icons8-france-48.png';
import HTMLLogo from '../../public/assets/images/languagesIcons/icons8-html-48.png';
import JSLogo from '../../public/assets/images/languagesIcons/icons8-javascript-48.png';
import MySQLLogo from '../../public/assets/images/languagesIcons/icons8-mysql-48.png';
import PHPLogo from '../../public/assets/images/languagesIcons/icons8-php-48.png';
import ReactLogo from '../../public/assets/images/languagesIcons/icons8-react-48.png';
import SpainFlag from '../../public/assets/images/languagesIcons/icons8-spain-flag-48.png';
import SymfonyLogo from '../../public/assets/images/languagesIcons/icons8-symfony-48.png';
import UkFlag from '../../public/assets/images/languagesIcons/icons8-uk-48.png';

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
          <HeroSocial src={HTMLLogo.src} alt="HTML icon" />

          <HeroSocial src={CSSLogo.src} alt="CSS icon" />

          <HeroSocial src={PHPLogo.src} alt="PHP icon" />

          <HeroSocial src={JSLogo.src} alt="JavaScript icon" />

          <HeroSocial src={SymfonyLogo.src} alt="Symfony icon" />

          <HeroSocial src={ReactLogo.src} alt="React icon" />

          <HeroSocial src={MySQLLogo.src} alt="MySQL icon" />
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
            <HeroSocial src={FranceFlag.src} alt="France Flag" />
            <p>C2</p>
          </div>

          <div className="flex flex-col items-center">
            <HeroSocial src={UkFlag.src} alt="UK Flag" />
            <p>C1</p>
          </div>

          <div className="flex flex-col items-center">
            <HeroSocial src={SpainFlag.src} alt="Spain Flag" />
            <p>B1</p>
          </div>

          <div className="flex flex-col items-center">
            <HeroSocial src={ChinaFlag.src} alt="China Flag" />
            <p>A2</p>
          </div>
        </div>
      }
    />
  </Section>
);

export { Hero };
