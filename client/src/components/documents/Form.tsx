import { documentRegistryService } from "../../services/DocumentRegistryService";
import {
  DocumentSection,
  DocumentField,
  DocumentFieldRow,
} from "../../models/Document";
import "./Form.scss";
import { useState } from "react";

const Form = () => {
  const document = documentRegistryService.get("compensation_of_expenses");

  if (!document) {
    return <div>Ошибка такого заявления не существует!</div>;
  }

  const [activeSection, setActiveSection] = useState<string>(
    document.sections[0].id,
  );

  console.log(activeSection);

  console.log(document);
  return (
    <>
      <h1>Заявление: {document.name}</h1>
      <div className="panel-buttons">
        {document.sections.map((section) => (
          <button
            key={section.id}
            value={section.id}
            style={{
              backgroundColor:
                activeSection == section.id ? "white" : "#ced4da",
            }}
            onClick={() => setActiveSection(section.id)}
          >
            {section.label}
          </button>
        ))}
      </div>
      <div>
        {document.sections.map((section) => (
          <Section
            key={section.id}
            section={section}
            activeSection={activeSection}
          />
        ))}
      </div>
      <div className="form-submit-panel">
        {document.rules.avans && (
          <label>
            <input type="checkbox" />
            Авансовый порядок
          </label>
        )}
        <button>Сохранить</button>
        <button>Отправить в бухгалтерию</button>
      </div>
    </>
  );
};

interface SectionProps {
  section: DocumentSection;
  activeSection: string;
}

const Section = ({ section, activeSection }: SectionProps) => {
  return (
    <div
      className="content-container"
      id={section.id}
      style={{ display: activeSection == section.id ? "block" : "none" }}
    >
      {section.groups.map((group, index) => (
        <div key={index} className={group.className}>
          {group.rows.map((row, index) => (
            <Row key={index} row={row} />
          ))}
        </div>
      ))}
      {section.isTable && (
        <div>
          <button>Добавить +</button>
        </div>
      )}
    </div>
  );
};

interface RowProps {
  row: DocumentFieldRow;
}

const Row = ({ row }: RowProps) => {
  return (
    <div className="form-row">
      {row.label && <div>{row.label}:</div>}
      {row.inputs.map((input, index) => (
        <Input key={index} meta={input} />
      ))}
    </div>
  );
};

interface InputProps {
  meta: DocumentField;
}

const Input = ({ meta }: InputProps) => {
  if (meta.type == "select") {
    return <select name={meta.name}></select>;
  }
  if (meta.type == "textarea") {
    return <textarea name={meta.name}></textarea>;
  }

  return <input type={meta.type} name={meta.name} />;
};
export default Form;
