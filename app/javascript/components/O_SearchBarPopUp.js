import React from "react"
import PropTypes from "prop-types"

const O_SearchBarPopUp = ({active, setActive}) => {
    return (
      <div className={active ? "search active" : "search"} onClick={() => setActive(false)}>
        <div className="search_pop_up" onClick={e => e.stopPropagation()}>

        </div>
      </div>
    );
};

export default O_SearchBarPopUp
