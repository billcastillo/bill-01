import Link from "next/link";
import list from "../data/navigation.json";
import Container from "../formats/Container";

const HomeTitle = () => (
  <div className='nav-title'>
    <Link href='/'>
      <a className='nav-link' title='Home'>
        Bill Castillo
      </a>
    </Link>

    <style jsx>{`
      .nav-title {
        padding: 24px 0;
      }

      .nav-link {
        color: #504766;
        font-size: 1.6rem;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        text-decoration: none;
        font-weight: 700;
      }

      .nav-link:hover {
        color: #8587f0;
      }

      @media screen and (min-width: 545px) {
        .nav-link {
          font-size: 1.8rem;
        }
      }
    `}</style>
  </div>
);

const Navigation = (props) => (
  <nav>
    <Container>
      <div className='nav-wrapper'>
        {!props.homepage ? <HomeTitle /> : ""}
        <ul>
          {list.map((links, index) => {
            return (
              <li key={index}>
                <Link href={links.link}>
                  <a className='nav-link'>{links.name}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Container>

    <style jsx>{`
      nav {
        display: block;
        position: relative;
        width: 100%;
        padding: 0;
        margin-top: 24px;
        margin-bottom: 40px;
        text-align: center;
      }

      nav .nav-wrapper {
        display: flex;
        justify-content: ${!props.homepage ? "space-between" : "flex-end"};
      }

      nav .nav-link {
        color: #504766;
        font-size: 1.6rem;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        text-decoration: none;
        font-weight: 700;
      }

      nav .nav-link:hover {
        color: #8587f0;
      }

      nav ul {
        list-style-type: none;
      }

      nav ul li {
        display: inline-block;
        padding: 24px 0;
      }

      nav ul li:not(:last-child) {
        margin-right: 48px;
      }

      @media screen and (min-width: 545px) {
        nav {
          text-align: right;
          margin-top: 40px;
          margin-bottom: 160px;
        }

        nav .nav-link {
          font-size: 1.8rem;
        }

        nav ul li:not(:last-child) {
          margin-right: 60px;
        }
      }
    `}</style>
  </nav>
);

export default Navigation;
