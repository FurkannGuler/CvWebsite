
import { FaCheck } from "react-icons/fa";
import React, { useState, useEffect } from "react";



const templates = [
  { id: "template1", name: "Classic", image: "cvtmp1.png" },
  { id: "template2", name: "Modern", image: "cvtmp2.png" },
  { id: "template3", name: "Dark", image: "cvtmp3.png" },
];

const TemplateSelection = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  useEffect(() => {
    const savedTemplate = localStorage.getItem("selectedTemplate");
    if (savedTemplate) {
      setSelectedTemplate(savedTemplate);
    }
  }, []);

  const handleTemplateSelect = (id: string) => {
    setSelectedTemplate(id);
    localStorage.setItem("selectedTemplate", id);
  };

  return (
    <div>
      <h2 className="text-4xl mb-14 w-full flex justify-center">
        Select Your CV Template
      </h2>
      <div style={{ display: "flex", gap: "20px" }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {templates.map((template) => (
            <div
              key={template.id}
              className={`  border ${
                selectedTemplate === template.id
                  ? "border-hover shadow-hover shadow-inner relative"
                  : "border-gray-300"
              } rounded-lg p-4 cursor-pointer `}
              onClick={() => handleTemplateSelect(template.id)}
            >
              {selectedTemplate === template.id && (
                <div className=" absolute top-2 right-2 bg-hover rounded-full p-1 shadow">
                  <FaCheck className="text-white" />
                </div>
              )}
              <img
                src={template.image}
                alt={template.name}
                className="w-full h-auto object-cover rounded-md"
              />
              <p className="mt-2 text-center text-lg font-semibold">
                {template.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplateSelection;
