import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>This is a react app to leave feedback about a product or service.</p>
        <p>Version 1.0</p>

        <p>
          <Link to="/">Home</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
