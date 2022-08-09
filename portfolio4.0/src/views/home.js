import './home.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Header from '../components/header';
import Section1 from '../components/section1';
import Section2 from '../components/section2';
import Section3 from '../components/section3';
import Section4 from '../components/section4';

export default () => {

    return (
        
        <div>
            <Header/>
                <Parallax pages={4} style={{ top: '0', left: '0' }}>
                    <ParallaxLayer
                        offset={0}
                        speed={2.5}
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Section1/>
                    </ParallaxLayer>
                <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: '#ff6d6d' }} />
                    <ParallaxLayer
                        offset={1}
                        speed={0.5}
                        style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'white',
                        }}>
                        <Section2/>
                    </ParallaxLayer>
                <ParallaxLayer offset={2} speed={2} style={{ backgroundColor: 'white' }} />
                    <ParallaxLayer
                        offset={2}
                        speed={0.5}
                        style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'white',
                        }}>
                        <Section3/>
                    </ParallaxLayer>
                <ParallaxLayer offset={3} speed={2} style={{ backgroundColor: '#ff6d6d' }} />
                    <ParallaxLayer
                        offset={3}
                        speed={0.5}
                        style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'white',
                        }}>
                        <Section4/>
                    </ParallaxLayer>
                </Parallax>
        </div>
    )
}

