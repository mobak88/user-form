import styled from 'styled-components';

import Card from '../UI/Card';

const UserCard = styled(Card)`
  margin: 2rem auto;
  width: 90%;
  max-width: 40rem;
`;

const Ul = styled.ul`
  list-style: none;
  padding: 1rem;
`;

const Li = styled.li`
  border: 1px solid #ccc;
  margin: 0.5rem 0;
  padding: 0.5rem;
`;

const UsersList = ({ ...props }) => {
  return (
    <UserCard>
      <Ul>
        {props.users.map((user) => (
          <Li key={user.id}>
            {user.name} ({user.age} years old.)
          </Li>
        ))}
      </Ul>
    </UserCard>
  );
};

export default UsersList;
