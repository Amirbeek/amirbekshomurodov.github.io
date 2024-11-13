import React from 'react';
import styled from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import Title from "../components/Title";
import ProCard from "../components/ProCard";

const Container = styled.div`
    background-color: ${props => props.theme.background};
    padding: 1.5rem 1rem;

    div {
        background-color: ${props => props.theme.skill_color};
        border-radius: 30px;
        min-height: 400px;
        padding: 1.5rem;
        @media (min-width: 768px) {
            padding: 2rem;
        }
    }
`;

const StyledTitle = styled.h1`
    color: ${props => props.theme.text_color_header};
    font-weight: bold;
    margin-bottom: 1.5rem;
    font-size: 2rem;
    @media (min-width: 768px) {
        font-size: 3rem;
    }
`;

const Images = styled.div`
    background-image: url("https://janarosmonaliev.com/static/tinydesk-feature-2-8664c1aea65b568a24054b6c0c1ce1a2.png");
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 300px;
    border-radius: 8px;
    transition: transform 0.5s;
    &:hover {
        transform: scale(1.05);
    }
    @media (min-width: 768px) {
        height: 400px;
    }
`;

const ProjectCard = styled.div`
    background-color: ${props => props.theme.face_color};
    border-radius: 30px;
    padding: 1.5rem;
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    @media (min-width: 768px) {
        flex-direction: row;
        padding: 2rem;
        gap: 1.5rem;
    }
`;

const ProjectDescription = styled.div`
    color: ${props => props.theme.text_color_header};
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1rem;
    @media (min-width: 768px) {
        font-size: 1.1rem;
    }
`;

const Projects = () => {
    return (
        <div>
            <Title title="Project"/>
            <Container className="container">
                <ProjectCard>
                    <ProjectDescription className="col-12 col-md-6">
                        <h2>TinyDesk</h2>
                        <p>
                            TinyDesk is a web application that lets users manage bookmarks and boost their productivity
                            with handy widgets.
                            This project was supervised by Alex Kuhn (ex-Apple Engineer) and led by me as a Lead
                            Developer and Designer.
                        </p>
                        <p>
                            I was mainly responsible for system architecture and user interface design.
                            It was built with GatsbyJS & Material UI and deployed to Heroku.
                        </p>
                    </ProjectDescription>
                    <div className="col-12 col-md-6 p-3">
                        <Images/>
                    </div>
                </ProjectCard>
            </Container>

            <div className="container">
                <ProCard
                    title={'Crime Data Visualization'}
                    description={`If you ever visited <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub's homepage</a>, you will notice a 3D globe that visualizes the platform's current activity. <br/> <br/>
                    I decided to recreate it with <span>ThreeJS</span> and make the project open-source. I built the Globe using Vasco Asturiano's three-globe as a base, shaded the 3D scene to resemble a dreamy space environment, and bundled everything with <span>Webpack</span>. <br><br>
                    Additionally, the Globe visualizes my flight history across the world from 2019 to 2020. So far, this is my most popular open-source project, with 95+ stars on Github.`}
                    image={'https://janarosmonaliev.com/static/crime-data-feature-e5829c5eb36fffed279732775b967f93.png'}
                    repoLink={'https://github.com/Amirbeek/AI-Powered-COVID-19-Detection-from-Chest-X-rays-Using-Deep-Learning-and-Django'}
                />
            </div>


        </div>
    );
};

export default Projects;
