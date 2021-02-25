import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { goNextPage, goPrevPage } from './users.actions';
import Pagination from './Pagination.jsx';
import User from './User.jsx';
import { usersListSelector, currentPageSelector } from './users.selectors';

const itemsPerPage = 3;

const UsersList = ({ users, currentPage, goNext, goPrev }) => {
  const start = currentPage * itemsPerPage;
  const usersToDisplay = users.slice(start, start + itemsPerPage);

  return (
    <div>
      <Pagination
        goPrev={goPrev}
        goNext={goNext}
        currentPage={currentPage}
        totalItems={users.length}
        itemsPerPage={itemsPerPage}
      />
      <ul className="users">
        {usersToDisplay.map(user => (
          <User key={user.id} {...user} />
        ))}
      </ul>
    </div>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  currentPage: PropTypes.number.isRequired,
  goNext: PropTypes.func.isRequired,
  goPrev: PropTypes.func.isRequired,
}

const mapState = state => {
  return {
    users: usersListSelector(state),
    currentPage: currentPageSelector(state),
  };
};

const mapDispatch = {
  goNext: goNextPage,
  goPrev: goPrevPage,
};

export default connect(mapState, mapDispatch)(UsersList);