// React
import { Link } from 'react-router-dom';

// Styles
import './sidebar.scss';

// Components
import { Button } from 'library';

// Types
import { IChildren } from '../../types/layout';


export default function Sidebar(props: { childrens: IChildren[] }) {
    return (
        <ul>
            {props.childrens.map(child => {
                return <li key={child.key}>
                    <Button variant="outline">
                        <Link to={child.key}>{child.name}</Link>
                    </Button>
                </li>
            })}
        </ul>
    );
}
