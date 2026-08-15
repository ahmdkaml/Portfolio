import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";

function App() {
  return (
    <>
      {/* Navigation */}
      <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold">
            Ahmed Kamel
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="portfolio-navbar" />

          <Navbar.Collapse id="portfolio-navbar">
            <Nav className="ms-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero */}
      <section id="home" className="bg-light py-5">
        <Container>
          <Row className="align-items-center min-vh-75 py-5">
            <Col lg={8}>
              <Badge bg="primary" className="mb-3 px-3 py-2">
                Computer Science Student & Developer
              </Badge>

              <h1 className="display-3 fw-bold mb-3">
                Hi, I'm Ahmed Kamel.
              </h1>

              <p className="lead text-secondary mb-4">
                I build software, contribute to open-source projects, and enjoy
                solving challenging engineering problems.
              </p>

              <div className="d-flex gap-3 flex-wrap">
                <Button variant="primary" size="lg" href="#projects">
                  View My Projects
                </Button>

                <Button
                  variant="outline-dark"
                  size="lg"
                  href="https://github.com/ahmdkaml"
                  target="_blank"
                >
                  GitHub
                </Button>
              </div>
            </Col>

            <Col lg={4} className="text-center mt-5 mt-lg-0">
              <div className="bg-white rounded-circle shadow mx-auto d-flex align-items-center justify-content-center"
                style={{ width: "250px", height: "250px" }}
              >
                <span className="display-1">👨‍💻</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About */}
      <section id="about" className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={9} className="text-center">
              <h2 className="fw-bold mb-4">About Me</h2>

              <p className="text-secondary fs-5">
                I'm a Computer Science student interested in software
                engineering and building practical applications. I enjoy
                working across the stack, learning new technologies, and
                contributing to real-world projects.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-light py-5">
        <Container>
          <h2 className="fw-bold text-center mb-5">Skills</h2>

          <Row className="g-4 justify-content-center">
            {[
              // Languages
              "C#",
              "Java",
              "Python",
              "TypeScript",
              "JavaScript",
              "C",
              "SQL",
              "HTML",
              "CSS",

              // Frontend
              "React",
              "React-Bootstrap",
              "Bootstrap",
              "QML",
              "PySide6",

              // Backend
              ".NET",
              "ASP.NET Core",
              "Spring Boot",
              "REST APIs",
              "Entity Framework Core",
              "JPA / Hibernate",
              "Maven",

              // Databases
              "PostgreSQL",
              "MySQL",
              "H2",

              // AI & Algorithms
              "Machine Learning",
              "BFS / DFS",
              "A* Search",
              "Minimax",
              "Alpha-Beta Pruning",
              "Constraint Satisfaction",
              "Genetic Algorithms",
              "Clustering",
              "Gradient Descent",
              "Newton's Method",

              // Software Engineering
              "OOP",
              "Data Structures & Algorithms",
              "Design Patterns",
              "Unit Testing",
              "Integration Testing",
              "API Design",
              "Debugging",
              "Performance Optimization",

              // DevOps & Tools
              "Git",
              "GitHub",
              "GitHub Actions",
              "Docker",
              "Docker Compose",
              "Linux",
              "Bash",
              "PowerShell",
              "CI/CD",

              // Systems
              "Operating Systems",
              "Process Scheduling",
              "IPC",
              "POSIX",
              "Memory Management",
              "Garbage Collection",
              "Computer Organization",
            ].map((skill) => (
              <Col xs={6} sm={4} md={3} lg={2} key={skill}>
                <Card className="border-0 shadow-sm h-100 text-center">
                  <Card.Body className="d-flex align-items-center justify-content-center">
                    <span className="fw-semibold">{skill}</span>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Projects */}
      <section id="projects" className="py-5">
        <Container>
          <h2 className="fw-bold text-center mb-5">Projects</h2>

          <Row className="g-4">
            <Col md={6} lg={4}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body className="d-flex flex-column">
                  <Badge bg="secondary" className="align-self-start mb-3">
                    AI
                  </Badge>

                  <Card.Title className="fw-bold">
                    Connect Four AI
                  </Card.Title>

                  <Card.Text className="text-secondary">
                    An AI-powered Connect Four game implementing Minimax,
                    Alpha-Beta pruning, and probabilistic decision making.
                  </Card.Text>

                  <div className="mt-auto">
                    <Button variant="outline-primary" href="#">
                      View Project
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={4}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body className="d-flex flex-column">
                  <Badge bg="secondary" className="align-self-start mb-3">
                    Full Stack
                  </Badge>

                  <Card.Title className="fw-bold">
                    Course Registration System
                  </Card.Title>

                  <Card.Text className="text-secondary">
                    A Spring Boot application for managing students, courses,
                    registration, and database operations.
                  </Card.Text>

                  <div className="mt-auto">
                    <Button variant="outline-primary" href="#">
                      View Project
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={4}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body className="d-flex flex-column">
                  <Badge bg="secondary" className="align-self-start mb-3">
                    Open Source
                  </Badge>

                  <Card.Title className="fw-bold">
                    Open Source Contributions
                  </Card.Title>

                  <Card.Text className="text-secondary">
                    Contributions to open-source projects involving bug fixes,
                    tests, documentation, and feature improvements.
                  </Card.Text>

                  <div className="mt-auto">
                    <Button variant="outline-primary" href="#">
                      View GitHub
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-dark text-white py-5">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h2 className="fw-bold mb-3">Let's Connect</h2>

              <p className="text-white-50 mb-4">
                Interested in working together or discussing a project?
                Feel free to reach out.
              </p>

              <Button variant="light" size="lg" href="mailto:ahmdkaml2006@gmail.com">
                Contact Me
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white-50 py-4">
        <Container className="text-center">
          <small>
            © {new Date().getFullYear()} Ahmed Kamel. All rights reserved.
          </small>
        </Container>
      </footer>
    </>
  );
}

export default App;
