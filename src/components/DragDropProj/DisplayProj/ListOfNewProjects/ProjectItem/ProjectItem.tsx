import { useDrag } from "react-dnd";

interface Project {
  title: string;
  people: string;
  description: string;
}

interface ProjectItemProps {
  project: Project;
}

export default function ProjectItem({ project }: ProjectItemProps) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "PROJECT",
    item: { project },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const opacity = isDragging ? 0.5 : 1;

  return (
    <div
      ref={drag}
      style={{ opacity, border: "1px solid gray", padding: "8px", marginBottom: "4px", cursor: "move" }}>
      <div>
        <strong>Title:</strong> {project.title}
      </div>
      <div>
        <strong>People:</strong> {project.people}
      </div>
      <div>
        <strong>Description:</strong> {project.description}
      </div>
    </div>
  );
}
