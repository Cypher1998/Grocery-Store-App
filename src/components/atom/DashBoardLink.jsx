import { NavLink } from 'react-router-dom';

const DashBoardLink = ({ url, icon, text }) => {
  return (
    <li>
      <NavLink
        to={url}
        style={(navData) =>
          navData.isActive ? { color: 'rgb(16, 185, 129)' } : { color: '' }
        }
      >
        {icon}
        <span>{text}</span>
      </NavLink>
    </li>
  );
};
export default DashBoardLink;
