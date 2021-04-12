import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div className='main'>
            <div className='mainDiv'>
                <h1>Welcome to React Fundamentals at Eleven Fifty</h1>
                <p>
                    this app is intended to be a started/tutorial app for your upcoming project and a learning sandbox for you in months and years to come should you continue to develop software with React. In this application, we will work through some of the basic React concepts, build out sommes small applicstions, and unleash you to build your own applications.
                </p>
                <hr />
                <h1>Important Notes</h1>
                <ul>
                    <li>Being component based, you can move on to the next module</li>
                    <li>This styling is intentionally left bland in some spots.  Just a sandbox</li>
                    <li>At this phase, this site is not yet respomsive</li>
                    <li>jRefactor this text on this page and make this your own project</li>
                    <li>This app simply scratchs the surface on what is possible with React</li>
                    <li>We have tried to collect the very best resources for this app, and we cited those <Link to='/resources'>here</Link>.</li>
                    <li>the set up for this app might be the most confusing part. Hang in there!</li>
                    <li>
                        <Link to='/resources'>React Resources</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Home;