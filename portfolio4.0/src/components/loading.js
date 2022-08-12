import ouroboros from '../static/Ouroboros.png'
import { useSpring, animated } from 'react-spring';

function Loading() {
    const styles = useSpring({
        loop: true,
        from: { rotateZ: 0 },
        to: { rotateZ: 359 },
        config: {mass: 5, tension: 200, friction: 50},
    })

    return (
                <animated.img 
                src={ouroboros} 
                style={{
                    height:50, 
                    width:50, 
                    margin: "5px",
                    borderRadius: "15%",
                    ...styles
                }}/>
    )}
export default Loading