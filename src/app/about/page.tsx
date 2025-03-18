'use client'
import Dummy from '../../../components/Dummy'

export default function Project() {
    return (
        <Dummy comp={<AboutContent/>}/>
    );
}

function AboutContent(){
    return(
        <p className='lg:px-20 p-5 py-10 lg:mx-20 mx-5 my-10 text-[#000] rounded-md bg-amber-50 font-[family-name:var(--font-geist-sans)]'>
            Hi there! I'm a tech enthusiast with a passion for both hardware and software innovation. As an ECE graduate, I’ve always been fascinated by the interplay between circuits and code, finding joy in creating solutions that blend the two.<br/>
            <br/>
            Beyond the world of technology, I’m a storyteller and an artist. Through fictional stories, I explore imaginative realms, and through art, I capture moments and emotions that words alone can’t express.<br/>
            <br/>
            My portfolio is a reflection of my journey—one that spans creative expression, technical ingenuity, and a desire to inspire others. Whether it's a painting, a project, or a thought-provoking quote, every piece here is a glimpse into my passions and beliefs.<br/>
            <br/>
            Feel free to explore my work, and if something resonates, I’d love to hear from you!
        </p>
    )
}