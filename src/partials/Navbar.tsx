import {
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <div className="flex items-center">
          <img
            src="../public/icons8-home-32.png"
            alt="home icon"
            className="mr-4"
          />
          <p className="font-semibold text-purple-800">Kate's portfolio</p>
        </div>
      </a>

      <NavMenu>
        <NavMenuItem href="https://github.com/Kathleen-Vierstraete">
          GitHub
        </NavMenuItem>
        <NavMenuItem href="https://www.linkedin.com/in/kathleen-vierstraete/">
          LinkedIn
        </NavMenuItem>
        <NavMenuItem href="https://drive.google.com/file/d/1hMRpJEmb-jCRvpV-3NPEsPqo3j6tP-F5/view">
          CV
        </NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
