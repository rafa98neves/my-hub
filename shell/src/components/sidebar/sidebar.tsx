// React
import { Link } from 'react-router-dom';

// Styles
import './sidebar.scss';

// Types
import { IChildren } from '../../types/layout';

export default function Sidebar(props: { childrens: IChildren[] }) {
    return (
        <ul>
            {props.childrens.map(child => {
                return <li key={child.key}>
                    <Link to={child.key}>{child.name}</Link>
                </li>
            })}
        </ul>
    );
}
