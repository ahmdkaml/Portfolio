import { Badge, Button, Card, Col, Container, Nav, Navbar, Row } from "react-bootstrap";

const NAV_LINKS = ["About", "Skills", "Projects", "Contact"];

const SKILLS = [
  { title: "Languages", items: ["C#", "Java", "Python", "TypeScript", "JavaScript", "C", "SQL", "HTML", "CSS"] },
  { title: "Frontend", items: ["React", "React-Bootstrap", "Bootstrap", "QML", "PySide6"] },
  { title: "Backend", items: [".NET", "ASP.NET Core", "Spring Boot", "REST APIs", "EF Core", "JPA / Hibernate", "Maven"] },
  { title: "Databases", items: ["PostgreSQL", "MySQL", "H2"] },
  { title: "AI & Algorithms", items: ["Machine Learning", "BFS / DFS", "A* Search", "Minimax", "Alpha-Beta Pruning", "CSP", "Genetic Algorithms", "Clustering", "Gradient Descent", "Newton's Method"] },
  { title: "Software Engineering", items: ["OOP", "DSA", "Design Patterns", "Unit Testing", "Integration Testing", "API Design", "Debugging", "Optimization"] },
  { title: "DevOps & Tools", items: ["Git", "GitHub", "GitHub Actions", "Docker", "Docker Compose", "Linux", "Bash", "PowerShell", "CI/CD"] },
  { title: "Systems", items: ["OS", "Process Scheduling", "IPC", "POSIX", "Memory Management", "Garbage Collection", "Computer Organization"] },
];

const PROJECTS = [
  { tag: "AI", title: "Connect Four AI", desc: "An AI-powered Connect Four game implementing Minimax, Alpha-Beta pruning, and probabilistic decision making.", href: "#" },
  { tag: "Full Stack", title: "Course Registration System", desc: "A Spring Boot application for managing students, courses, registration, and database operations.", href: "#" },
  { tag: "Open Source", title: "Open Source Contributions", desc: "Contributions to open-source projects involving bug fixes, tests, documentation, and feature improvements.", href: "#", btnText: "View GitHub" },
];

export default function App() {
  return (
    <>
      <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold">Ahmed Kamel</Navbar.Brand>
          <Navbar.Toggle aria-controls="portfolio-navbar" />
          <Navbar.Collapse id="portfolio-navbar">
            <Nav className="ms-auto">
              {NAV_LINKS.map((link) => (
                <Nav.Link key={link} href={`#${link.toLowerCase()}`}>{link}</Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section id="home" className="bg-light py-5">
        <Container>
          <Row className="align-items-center min-vh-75 py-5">
            <Col lg={8}>
              <Badge bg="primary" className="mb-3 px-3 py-2">Computer Science Student & Developer</Badge>
              <h1 className="display-3 fw-bold mb-3">Hi, I'm Ahmed Kamel.</h1>
              <p className="lead text-secondary mb-4">
                I build software, contribute to open-source projects, and enjoy solving challenging engineering problems.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <Button variant="primary" size="lg" href="#projects">View My Projects</Button>
                <Button variant="outline-dark" size="lg" href="https://github.com/ahmdkaml" target="_blank">GitHub</Button>
              </div>
            </Col>
            <Col lg={4} className="text-center mt-5 mt-lg-0">
              <div className="bg-white rounded-circle shadow mx-auto d-flex align-items-center justify-content-center" style={{ width: 250, height: 250 }}>
                <span className="display-1">👨‍💻</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="about" className="py-5">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={9}>
              <h2 className="fw-bold mb-4">About Me</h2>
              <p className="text-secondary fs-5">
                I'm a Computer Science student interested in software engineering and building practical applications. I enjoy working across the stack, learning new technologies, and contributing to real-world projects.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="skills" className="bg-light py-5">
        <Container>
          <h2 className="fw-bold text-center mb-5">Skills</h2>
          <Row className="g-4 justify-content-center">
            {SKILLS.map(({ title, items }) => (
              <Col xs={12} md={6} lg={4} xl={3} key={title}>
                <Card className="border-0 shadow-sm h-100">
                  <Card.Body className="p-4">
                    <Card.Title className="fw-bold mb-3">{title}</Card.Title>
                    <div className="d-flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <span key={skill} className="badge bg-light text-dark border px-3 py-2 fw-medium">{skill}</span>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section id="projects" className="py-5">
        <Container>
          <h2 className="fw-bold text-center mb-5">Projects</h2>
          <Row className="g-4">
            {PROJECTS.map(({ tag, title, desc, href, btnText = "View Project" }) => (
              <Col md={6} lg={4} key={title}>
                <Card className="h-100 shadow-sm border-0">
                  <Card.Body className="d-flex flex-column">
                    <Badge bg="secondary" className="align-self-start mb-3">{tag}</Badge>
                    <Card.Title className="fw-bold">{title}</Card.Title>
                    <Card.Text className="text-secondary">{desc}</Card.Text>
                    <div className="mt-auto">
                      <Button variant="outline-primary" href={href}>{btnText}</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section id="contact" className="bg-dark text-white py-5">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h2 className="fw-bold mb-3">Let's Connect</h2>
              <p className="text-white-50 mb-4">Interested in working together or discussing a project? Feel free to reach out.</p>
              <Button variant="light" size="lg" href="mailto:ahmdkaml2006@gmail.com">Contact Me</Button>
            </Col>
          </Row>
        </Container>
      </section>

      <footer className="bg-black text-white-50 py-4 text-center">
        <Container><small>© {new Date().getFullYear()} Ahmed Kamel. All rights reserved.</small></Container>
      </footer>
    </>
  );
}
