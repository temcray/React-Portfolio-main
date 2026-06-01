import ProjectCard from "../Components/ProjectCard";

function Projects() {
    return (
        <section className="projects" id="projects">
            <h2><strong>Projects</strong></h2>

            <div className="project-list">
                <ProjectCard
                    title="Stillwater Shelter"
                    description="Stillwater Shelter is a responsive React application designed to help users quickly find shelter resources, 
                    emergency assistance, and support services through a clean and user-friendly experience. The project focuses on accessibility, clear navigation, and user-centered design to create an experience that feels welcoming and easy to use during stressful situations.
"
                    tech="React, JavaScript, CSS, React Router, EmailJS, 
                    responsive layouts, reusable components, call-to-action sections, 
                    routing, and user-focused interface design."
                    liveUrl="https://stillwatershelter.netlify.app/"
                    imageUrl=""
                    
                />
                <ProjectCard
                    title="Peaceful Streams"
                    description="Peaceful Streams is a responsive React Bible application designed to help users strengthen their spiritual connection with God through scripture, 
                    encouraging content, and a calming user experience. 
                    The application combines faith-based inspiration with clean navigation and user-centered design to create a space where users can reflect, explore devotional content, and engage with uplifting multimedia experiences.
                    The project includes sign-in and account creation functionality for user access, video media integration for spiritual encouragement, 
                    responsive layouts, contact form functionality through EmailJS, reusable React components, routing, light and dark mode features, and LocalStorage functionality to create a more personalized user experience."
                    tech="React, JavaScript, CSS, EmailJS, React Router, LocalStorage, 
                    responsive design, reusable components, authentication features, 
                    multimedia/video integration, and user-centered interface design."
                    liveUrl="https://peacefulstreams.netlify.app/"
                    imageUrl="https/PeaceS.png"
                    
                />
                <ProjectCard
                    title="KickStart Boys Soccer - Team"
                    description="Kickstart Boys Soccer is a responsive React
                    website for chicago youth soccer program featuring an about
                    section, program highlights,contact form, and community-focused design. 
                    Built to showcase moderrn front-end development and user-friendly navigation."
                    tech="React, JavaScript, HTML, CSS"
                    imageUrl=""
                    liveUrl="https://kickstartboystsoccer.netlify.app/"
                />
                
            </div>

        </section>
    );
}

export default Projects;