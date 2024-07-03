import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Container } from 'react-bootstrap';
import { Chart as ChartJS, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css';

// Register the components
ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Dashboard = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [admissions, setAdmissions] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchEnquiries();
    fetchAdmissions();
    fetchCourses();
  }, []);

  const fetchEnquiries = async () => {
    const result = await axios.get("http://localhost:8082/api/enquiries/");
    setEnquiries(result.data);
  };

  const fetchAdmissions = async () => {
    const result = await axios.get("http://localhost:8083/api/addmissions");
    setAdmissions(result.data);
  };

  const fetchCourses = async () => {
    const result = await axios.get("http://localhost:8083/api/courses/");
    setCourses(result.data);
  };

  const enquiryCount = enquiries.length;
  const admissionCount = admissions.length;
  const courseCount = courses.length;

  const pieData = {
    labels: ['Enquiries', 'Admissions', 'Courses'],
    datasets: [
      {
        data: [enquiryCount, admissionCount, courseCount],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const barData = {
    labels: ['Enquiries', 'Admissions', 'Courses'],
    datasets: [
      {
        label: 'Counts',
        data: [enquiryCount, admissionCount, courseCount],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const styles = {

    
    cardContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '1rem',
      position: 'relative', // Positioning the container relatively for absolute positioning of titles
    },
    card: {
      flex: '0 0 90%',  // Adjusting to ensure three cards fit in one row
      margin: '0 8px',
      textAlign: 'center',
      color: 'white',
    },
    chartCard: {
      flex: '0 0 137%',  // Adjusting to ensure the chart cards fit in one row
      margin: '0px 8px',  // Adjusting margin for spacing
      width: '100%',  // Ensuring the chart cards fit the screen width
      position: 'relative', // Positioning the card relatively for absolute positioning of titles
    },
    chart: {
      width: '100%',  // Ensuring the chart fills the container
      height: 'auto', // Allowing the height to adjust based on content
    },
    chartTitle: {
      fontSize: '1rem', // Decreasing the font size for chart titles
      position: 'absolute', // Absolute positioning
      top: '10px', // Adjusting the top position
      right: '10px', // Adjusting the right position
      marginRight: '10px', // Adding margin to the right side of the title
    },
  };

  return (
    <Container fluid className="mt-0">
      <div style={styles.cardContainer}>
        <Card style={{ ...styles.card, backgroundColor: '#FF6384' }}>
          <Card.Body>
            <Card.Title>Total Enquiries</Card.Title>
            <Card.Text>{enquiryCount}</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ ...styles.card, backgroundColor: '#36A2EB' }}>
          <Card.Body>
            <Card.Title>Total Admissions</Card.Title>
            <Card.Text>{admissionCount}</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ ...styles.card, backgroundColor: '#FFCE56' }}>
          <Card.Body>
            <Card.Title>Total Courses</Card.Title>
            <Card.Text>{courseCount}</Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div style={styles.cardContainer}>
        <Card style={styles.chartCard}>
          <Card.Body>
            <Pie data={pieData} style={styles.chart} />
            <div>
            <h4 style={styles.chartTitle}>Enquiries, Admissions, and Courses Distribution</h4>
            </div>
          </Card.Body>
        </Card>
        <Card style={styles.chartCard}>
          <Card.Body>
            <Bar data={barData} style={styles.chart} />
            <div>
            <h4 style={styles.chartTitle}>Counts Overview</h4>
            </div>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default Dashboard;









/*import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Chart as ChartJS, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css';

// Register the components
ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Dashboard = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [admissions, setAdmissions] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchEnquiries();
    fetchAdmissions();
    fetchCourses();
  }, []);

  const fetchEnquiries = async () => {
    const result = await axios.get("http://localhost:8082/api/enquiries/");
    setEnquiries(result.data);
  };

  const fetchAdmissions = async () => {
    const result = await axios.get("http://localhost:8083/api/addmissions");
    setAdmissions(result.data);
  };

  const fetchCourses = async () => {
    const result = await axios.get("http://localhost:8083/api/courses/");
    setCourses(result.data);
  };

  const enquiryCount = enquiries.length;
  const admissionCount = admissions.length;
  const courseCount = courses.length;

  const pieData = {
    labels: ['Enquiries', 'Admissions', 'Courses'],
    datasets: [
      {
        data: [enquiryCount, admissionCount, courseCount],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const barData = {
    labels: ['Enquiries', 'Admissions', 'Courses'],
    datasets: [
      {
        label: 'Counts',
        data: [enquiryCount, admissionCount, courseCount],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const styles = {
    cardContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '1rem',
    },
    card: {
      flex: '0 0 90%',  // Adjusting to ensure three cards fit in one row
      margin: '0 8px',
      textAlign: 'center',
      color: 'white',
    },
    chartContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '1rem',
    },
    chart: {
      flex: '0 0 90%',  // Adjusting to ensure two charts fit in one row
      margin: '0px 250px 0px 0px', // Margin applied from all sides
    },
  };

  return (
    <Container fluid className="mt-0">
      <div style={styles.cardContainer}>
        <Card style={{ ...styles.card, backgroundColor: '#FF6384' }}>
          <Card.Body>
            <Card.Title>Total Enquiries</Card.Title>
            <Card.Text>{enquiryCount}</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ ...styles.card, backgroundColor: '#36A2EB' }}>
          <Card.Body>
            <Card.Title>Total Admissions</Card.Title>
            <Card.Text>{admissionCount}</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ ...styles.card, backgroundColor: '#FFCE56' }}>
          <Card.Body>
            <Card.Title>Total Courses</Card.Title>
            <Card.Text>{courseCount}</Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div style={styles.cardContainer}>
        
        <div style={styles.chart}>
          <h4>Enquiries, Admissions, and Courses Distribution</h4>
          <Pie data={pieData} />
        </div>
        <div style={styles.chart}>
          <h4>Counts Overview</h4>
          <Bar data={barData} />
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
*/













/*import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Chart as ChartJS, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css';

// Register the components
ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Dashboard = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [admissions, setAdmissions] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchEnquiries();
    fetchAdmissions();
    fetchCourses();
  }, []);

  const fetchEnquiries = async () => {
    const result = await axios.get("http://localhost:8082/api/enquiries/");
    setEnquiries(result.data);
  };

  const fetchAdmissions = async () => {
    const result = await axios.get("http://localhost:8083/api/addmissions");
    setAdmissions(result.data);
  };

  const fetchCourses = async () => {
    const result = await axios.get("http://localhost:8083/api/courses/");
    setCourses(result.data);
  };

  const enquiryCount = enquiries.length;
  const admissionCount = admissions.length;
  const courseCount = courses.length;

  const pieData = {
    labels: ['Enquiries', 'Admissions', 'Courses'],
    datasets: [
      {
        data: [enquiryCount, admissionCount, courseCount],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const barData = {
    labels: ['Enquiries', 'Admissions', 'Courses'],
    datasets: [
      {
        label: 'Counts',
        data: [enquiryCount, admissionCount, courseCount],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <Container fluid className="mt-4">
      <Row className="mb-4">
        <Col>
          <Card className="text-center" style={{ backgroundColor: '#FF6384', color: 'white' }}>
            <Card.Body>
              <Card.Title>Total Enquiries</Card.Title>
              <Card.Text>{enquiryCount}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="text-center" style={{ backgroundColor: '#36A2EB', color: 'white' }}>
            <Card.Body>
              <Card.Title>Total Admissions</Card.Title>
              <Card.Text>{admissionCount}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="text-center" style={{ backgroundColor: '#FFCE56', color: 'white' }}>
            <Card.Body>
              <Card.Title>Total Courses</Card.Title>
              <Card.Text>{courseCount}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <div>
            <h3>Counts Overview</h3>
            <Bar data={barData} />
          </div>
        </Col>
        <Col>
          <div>
            <h3>Enquiries, Admissions, and Courses Distribution</h3>
            <Pie data={pieData} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
*/