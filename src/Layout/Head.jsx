import { Helmet } from "react-helmet";
import { PropTypes } from "prop-types";

const Head = ({title}) => {
    return (
        <div>
            <Helmet>
                <title>{title} | Nova Ventures</title>
            </Helmet>
        </div>
    );
};


Head.propTypes = {
  title: PropTypes.string,
};
export default Head;