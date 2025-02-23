/**
 * @copyright 2025 krishsoni
 * @license Apache-2.0
 */


/**
 * Components
 */



const sitemap = [
  {
    label: 'Home',
    href: '#home'
  },
  {
    label: 'About',
    href: '#about'
  },
  {
    label: 'Work',
    href: '#work'
  },
  {
    label: 'Academics',
    href: '#reviews'
  },
  {
    label: 'Contact me',
    href: '#contact'
  }
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/krish2248'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/krish-soni-460932228/'
  },
  {
    label: 'Medium',
    href: 'https://medium.com/@sonikrish2248'
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/notkrish03/'
  }
];


const Footer = () => {
  return (
    <footer className="section">
      <div className="container">

        <div className="lg:grid lg:grid-cols-2">

          <div className="mb-10">
            <h9 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
              Let&apos;s create!
            </h9>
            <br/><br/>
            <br/><br/>            
            <p className="text-sm text-black reveal-up font-bold">
        &copy; 2025 <span className="text-black font-bold">krishsoni</span>
      </p>

          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">

<div>
  <p className="mb-2 reveal-up font-bold">Sitemap</p>

  <ul>
    {sitemap.map(({ label, href }, key) => (
      <li key={key}>
        <a
          href={href}
          className="block text-sm text-black py-1 transition-colors hover:text-gray-900 reveal-up font-bold"
        >
          {label}
        </a>
      </li>
    ))}
  </ul>
</div>

<div>
  <p className="mb-2 reveal-up font-bold">Socials</p>

  <ul>
    {socials.map(({ label, href }, key) => (
      <li key={key}>
        <a
          href={href}
          target="_blank"
          className="block text-sm text-black py-1 transition-colors hover:text-gray-900 reveal-up font-bold"
        >
          {label}
        </a>
      </li>
    ))}
    <li className="mt-14">
      <p className="text-sm text-black reveal-up font-bold">
        
      </p>
    </li>
    <li className="mt-9">
      
    </li>
  </ul>
</div>

</div>

        </div>

      </div>
    </footer>
  )
}

export default Footer