import React from 'react'
import "./teamSection.css"
import TeamCard from './teamCard';

const TeamSection = () => (
        <React.Fragment>
            <section className="container-fluid team-section">
                <div className="row justify-content-center">
                    <div className="col col-md-10">
                        <h1>Nosso time</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis harum repellendus quos placeat, perferendis saepe quo animi minus aliquid autem numquam ut dicta rem expedita pariatur voluptate laborum consectetur cumque!</p>
                    </div>
                </div>

                <div className="row justify-content-center card-container">
                    <TeamCard imgURL="http://i.pravatar.cc/300?img=58" 
                                job="Produtor"
                                name="Jeff Flecker"
                                lead="Debitis harum repellendus quos placeat, perferendis saepe quo animi minus aliquid autem numquam."
                                linkedin="aledebarba"
                                facebook="aledebarba"
                                />
                    <TeamCard imgURL="http://i.pravatar.cc/300?img=58" 
                                job="Produtor"
                                name="Jeff Flecker"
                                lead="Debitis harum repellendus quos placeat, perferendis saepe quo animi minus aliquid autem numquam."
                                linkedin="aledebarba"
                                facebook="aledebarba"
                                />
                    <TeamCard imgURL="http://i.pravatar.cc/300?img=58" 
                                job="Produtor"
                                name="Jeff Flecker"
                                lead="Debitis harum repellendus quos placeat, perferendis saepe quo animi minus aliquid autem numquam."
                                linkedin="aledebarba"
                                facebook="aledebarba"
                                />
            </div>

            </section>
            </React.Fragment>
    )

export default TeamSection