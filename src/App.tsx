import { Badge, Button, Card, Col, Container, Nav, Navbar, Row } from "react-bootstrap";

const NAV_LINKS = ["Home", "About", "Skills", "Projects", "Contact"];

const SKILLS = [
  { icon: "💻", title: "Languages", items: ["C#", "Java", "Python", "TypeScript", "JavaScript", "C", "SQL", "HTML", "CSS"] },
  { icon: "🎨", title: "Frontend", items: ["React", "React-Bootstrap", "Bootstrap", "QML", "PySide6"] },
  { icon: "⚙️", title: "Backend", items: [".NET", "ASP.NET Core", "Spring Boot", "REST APIs", "EF Core", "JPA / Hibernate", "Maven"] },
  { icon: "🗄️", title: "Databases", items: ["PostgreSQL", "MySQL", "H2"] },
  { icon: "🧠", title: "AI & Algorithms", items: ["Machine Learning", "BFS / DFS", "A* Search", "Minimax", "Alpha-Beta Pruning", "CSP", "Genetic Algorithms", "Clustering", "Gradient Descent"] },
  { icon: "📐", title: "Software Engineering", items: ["OOP", "DSA", "Design Patterns", "Unit Testing", "Integration Testing", "API Design", "Debugging", "Optimization"] },
  { icon: "🚀", title: "DevOps & Tools", items: ["Git", "GitHub", "GitHub Actions", "Docker", "Docker Compose", "Linux", "Bash", "CI/CD"] },
  { icon: "⚡", title: "Systems", items: ["OS", "Process Scheduling", "IPC", "POSIX", "Memory Management", "Garbage Collection", "Computer Organization"] },
];

const PROJECTS = [
  {
    tag: "AI & Game Dev",
    title: "Connect Four AI",
    desc: "Adversarial game agent built with custom heuristic evaluation, Alpha-Beta pruning, and probabilistic decision pipelines.",
    tech: ["Python", "PySide6", "Minimax", "Algorithms"],
    href: "https://github.com/ahmdkaml/connect-four-ai",
  },
  {
    tag: "Full Stack",
    title: "Course Registration System",
    desc: "Scalable backend service managing enrollments, course prerequisites, relational database mappings, and RESTful endpoints.",
    tech: ["Java", "Spring Boot", "JPA / Hibernate", "PostgreSQL"],
    href: "https://github.com/ahmdkaml/course-registration",
  },
  {
    tag: "Open Source",
    title: "Open Source Contributions",
    desc: "Active upstream contributions spanning automated CI workflows, test suite expansion, refactoring, and bug fixes.",
    tech: ["Git", "GitHub Actions", "Testing", "CI/CD"],
    href: "https://github.com/ahmdkaml",
    btnText: "Explore GitHub",
  },
];

export default function App() {
  return (
    <>
      <style>{`
        .hover-card {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .hover-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 0.75rem 1.5rem rgba(0, 0, 0, 0.08) !important;
        }
      `}</style>

      {/* Navigation */}
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

      {/* Hero */}
      <section id="home" className="bg-light py-5">
        <Container>
          <Row className="align-items-center min-vh-75 py-5">
            <Col lg={8}>
              <Badge bg="primary" className="mb-3 px-3 py-2 text-uppercase tracking-wider">
                Full-Stack • Systems • Algorithms
              </Badge>
              <h1 className="display-3 fw-bold mb-2">Hi, I'm Ahmed Kamel.</h1>
              <p className="fs-5 text-primary fw-medium mb-3">
                Computer Science Student & Software Engineer
              </p>
              <p className="lead text-secondary mb-4">
                I build robust web backends, design algorithmic decision systems, and contribute to open-source software. Focused on writing reliable, high-performance code across the entire stack.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <Button variant="primary" size="lg" href="#projects">View Projects</Button>
                <Button variant="outline-dark" size="lg" href="https://github.com/ahmdkaml" target="_blank" rel="noreferrer">GitHub</Button>
                <Button variant="outline-secondary" size="lg" href="/resume.pdf" target="_blank" rel="noreferrer">Resume</Button>
              </div>
            </Col>
            <Col lg={4} className="text-center mt-5 mt-lg-0">
              <div
                className="bg-white rounded-4 shadow-sm border mx-auto d-flex flex-column align-items-center justify-content-center p-4"
                style={{ width: 260, height: 260 }}
              >
                <span style={{ fontSize: "4.5rem" }}>⚡</span>
                <span className="fw-bold mt-2 text-dark">Engineering & AI</span>
                <small className="text-muted">CS @ AlexU</small>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About */}
      <section id="about" className="py-5">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={9}>
              <h2 className="fw-bold mb-4">About Me</h2>
              <p className="text-secondary fs-5 lh-lg">
                I am a Computer Science student driven by core engineering challenges—from architecting maintainable <strong>full-stack web services</strong> to implementing <strong>adversarial game AI</strong> and working close to the metal with <strong>operating systems and memory management</strong>. When I'm not studying algorithmic fundamentals, I actively build open-source tools and ship real-world software.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-light py-5">
        <Container>
          <h2 className="fw-bold text-center mb-5">Technical Toolkit</h2>
          <Row className="g-4 justify-content-center">
            {SKILLS.map(({ icon, title, items }) => (
              <Col xs={12} md={6} lg={4} xl={3} key={title}>
                <Card className="border-0 shadow-sm h-100 hover-card">
                  <Card.Body className="p-4">
                    <div className="d-flex align-items-center gap-2 mb-3">
                      <span className="fs-5">{icon}</span>
                      <Card.Title className="fw-bold mb-0">{title}</Card.Title>
                    </div>
                    <div className="d-flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <Badge key={skill} bg="light" text="dark" className="border px-2 py-2 fw-normal">
                          {skill}
                        </Badge>
                      ))}
                    </div>
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
          <h2 className="fw-bold text-center mb-5">Featured Work</h2>
          <Row className="g-4">
            {PROJECTS.map(({ tag, title, desc, tech, href, btnText = "View Repository" }) => (
              <Col md={6} lg={4} key={title}>
                <Card className="h-100 shadow-sm border-0 hover-card">
                  <Card.Body className="d-flex flex-column p-4">
                    <Badge bg="secondary" className="align-self-start mb-3">{tag}</Badge>
                    <Card.Title className="fw-bold mb-2">{title}</Card.Title>
                    <Card.Text className="text-secondary mb-3">{desc}</Card.Text>
                    <div className="d-flex flex-wrap gap-1 mb-4">
                      {tech.map((item) => (
                        <Badge key={item} bg="light" text="dark" className="border">
                          {item}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-auto">
                      <Button variant="outline-primary" size="sm" href={href} target="_blank" rel="noreferrer">
                        {btnText} →
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-dark text-white py-5">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h2 className="fw-bold mb-3">Let's Connect</h2>
              <p className="text-white-50 mb-4">Interested in collaboration, internship opportunities, or discussing engineering challenges? Let's talk.</p>
              <Button variant="light" size="lg" href="mailto:ahmdkaml2006@gmail.com">Contact Me</Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white-50 py-4 text-center">
        <Container><small>© {new Date().getFullYear()} Ahmed Kamel. All rights reserved.</small></Container>
      </footer>
    </>
  );
}
