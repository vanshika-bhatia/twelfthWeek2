import { useParams } from "react-router-dom";
export default function LabelNotes() {
const { labelName } = useParams();

return (
    <section>
    <h2>Label: {labelName}</h2>
    <p>Notes assigned to this label will appear here.</p>
    </section>
);
}
