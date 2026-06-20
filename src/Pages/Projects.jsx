import ProjectCard from "../Components/ProjectCard";

function Projects() {
    return (
        <section className="projects" id="projects">
            <h2><strong>Projects</strong></h2>

            <div className="project-list">
                <ProjectCard
                    title="Stillwater Shelter"
                    description="Stillwater Shelter is a responsive React web application designed to help individuals and families experiencing homelessness or crisis find support quickly and easily. 
                                Inspired by my own experience living in a shelter, I created this project with a focus on dignity, compassion, and accessibility. 
                                My goal was to design an experience where users feel welcomed and respected—not judged.
                                The application provides clear access to shelter services, community resources, and contact information through a clean, user-friendly interface. 
                                Built with React, JavaScript, CSS, React Router, and EmailJS, Stillwater Shelter demonstrates my ability to create responsive, accessible web applications while keeping the user's experience at the center of every design decision."

                    tech="React (Vite), JavaScript, CSS3, React Router, EmailJS, Responsive Design"
                    liveUrl="https://stillwatershelter.netlify.app/"
                    imageUrl=""
                    
                />
                <ProjectCard
                    title="Peaceful Streams"
                    description="Peaceful Streams is a responsive React web application created to provide a calm and encouraging space where users can grow in their faith and find hope through God's Word. 
                                Inspired by my personal relationship with Christ, this project reflects the foundation that has carried me through life's challenges and my desire to share that source of peace with others.
                                The application offers a simple, welcoming experience where users can explore Scripture, devotionals, and faith-based resources without distraction. 
                                Built with React, JavaScript, CSS, React Router, Firebase Authentication, and EmailJS, Peaceful Streams demonstrates my ability to create responsive, 
                                user-focused applications that combine thoughtful design with meaningful purpose."
                    tech="React, JavaScript, CSS3, React Router, Firebase Authentication, 
                          EmailJS, Local Storage, Responsive Design"            
                    liveUrl="https://peacefulstreams.netlify.app/"
                    imageUrl="https/PeaceS.png"
                    
                />
                <ProjectCard
                    title="KickStart Boys Soccer - Team"
                    description="Kickstart Boys Soccer Team is a responsive React web application created to promote a youth soccer program that encourages boys to build confidence, discipline, teamwork, and leadership through sports. 
                                 Inspired by the belief that every child deserves positive opportunities to grow, this project focuses on creating a welcoming space where families can learn about the program, its mission, and how to get involved.
                                 Built with React, JavaScript, CSS, and responsive design principles, the application demonstrates my ability to create clean, 
                                 accessible, and user-friendly interfaces that connect communities with meaningful opportunities."
                                 tech="React (Vite), JavaScript, CSS3, Responsive Design"
                    imageUrl="kickstart.png"
                    liveUrl="https://boyssoccerteam.netlify.app/"
                />
                
            </div>

        </section>
    );
}

export default Projects;