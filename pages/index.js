import BaseLayout from "@/components/layouts/BaseLayout";
import { Container, Row, Col } from "reactstrap";
import Typed from "react-typed";
// import BasePage from "@/shared/BasePage";
import { useGetUser } from "@/actions/user";

const ROLES = ["Developer", "Tech Lover", "Dog Friend", "Taco Eater"];

const Home = () => {
    const { data, error, loading } = useGetUser();

    return (
        <BaseLayout
            navClass="transparent"
            className="cover"
            user={data}
            loading={loading}
        >
            <div className="main-section">
                <div className="background-image">
                    <img src="/images/background.png" />
                </div>
                <Container>
                    <Row>
                        <Col md="6">
                            <div className="hero-section">
                                <div className={`flipper`}>
                                    <div className="back">
                                        <div className="hero-section-content">
                                            <h2> Full Stack Web Developer </h2>
                                            <div className="hero-section-content-intro">
                                                Have a look at my portfolio and
                                                job history.
                                            </div>
                                        </div>
                                        <img
                                            className="image"
                                            src="/images/section1.png"
                                        />
                                        <div className="shadow-custom">
                                            <div className="shadow-inner">
                                                {" "}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md="6" className="hero-welcome-wrapper">
                            <div className="hero-welcome-text">
                                <h1>
                                    Welcome to the portfolio website of Filip
                                    Jerga. Get informed, collaborate and
                                    discover projects I was working on through
                                    the years!
                                </h1>
                            </div>
                            <Typed
                                loop
                                strings={ROLES}
                                typeSpeed={90}
                                backSpeed={90}
                                backDelay={900}
                                loopCount={10}
                                showCursor
                                className="self-typed"
                                cursorChar="|"
                                loop
                            ></Typed>
                            <div className="hero-welcome-bio">
                                <h1>Let's take a look on my work.</h1>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </BaseLayout>
    );
};

export default Home;
