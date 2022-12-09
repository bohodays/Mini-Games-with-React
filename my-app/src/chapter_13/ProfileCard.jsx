import { useContext } from 'react';
import Card from './Card';

function ProfileCard(props) {
    return (
        <Card title='Jungwon Park' backgroundColor='#4ea04e'>
            <p>안녕하세요, 중원입니다.</p>
            <p>저는 리액트를 공부하고 있습니다.</p>
        </Card>
    )
}

export default ProfileCard;


