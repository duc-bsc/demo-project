export default function Nav() {
  // nav
  // main
  // footer

  const navItems = [
    {
      title: "About Me",
      href: "#about-me"
    },
    {
      title: "My Projects",
      href: "#my-projects"
    },
    {
      title: "Contact Me",
      href: "#contact-me"
    }
  ];

  return (
    <>
      <nav className="nav px-1">
        <div className="logo">Duc Vu</div>
        <ul className="list-style-none display-flex gap-2 ">
          {navItems.map(({ title, href }) => (
            <li key={href}>
              <a className="text-decoration-none" href={href}>
                {title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
