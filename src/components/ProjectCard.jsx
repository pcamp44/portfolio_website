import { Card, CardBody, CardTitle, CardSubtitle, Button} from "reactstrap";

export default function ProjectCard({ title, date, img, isComingSoon, onClick }) {
  return (
    <Card>
      <CardBody>
        <img alt={`${title} preview`} src={img} width="100%" />
        <CardTitle tag="h5">{title}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">Completed {date}</CardSubtitle>
      </CardBody>
      <CardBody>
        <Button disabled={isComingSoon} onClick={onClick}>Case Study</Button>
      </CardBody>
    </Card>
  );
}