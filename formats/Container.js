/* This component inserts the prop inside a padded container */

const Container = (props) => (
  <div className={`container ${props.class ? props.class : ""}`}>
    {props.children}

    <style jsx>{`
      .container {
        padding-left: 16px;
        padding-right: 16px;
      }

      @media screen and (min-width: 768px) {
        .container {
          max-width: 70vw;
          min-width: 700px;
          margin: 0 auto;
        }
      }

      @media screen and (min-width: 1280px) {
        .container {
          max-width: 50vw;
        }
      }
    `}</style>
  </div>
);

export default Container;
