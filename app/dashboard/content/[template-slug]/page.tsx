"use client";
import Templates from "@/app/(data)/Templates";
import { TEMPLATE } from "../../_components/TemplateListSection";
import FormSection from "../_components/FormSection";
import OutPutSection from "../_components/OutPutSection";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface PROPS {
  params: {
    "template-slug": string;
  };
}

const CreateNewContent = (props: PROPS) => {
  const selectedTemplate: TEMPLATE | undefined = Templates.find(
    (item) => item.slug === props.params["template-slug"]
  );

  const GenerateAIContent = (formData: any) => {};
  return (
    <div className="p-10">
      <Link href={"/dashboard"}>
        <Button>
          <ArrowLeft /> Back
        </Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        <div className="col-span-1">
          <FormSection
            selectedTemplate={selectedTemplate}
            userFormInput={(v: any) => GenerateAIContent(v)}
          />
        </div>
        <div className="col-span-2">
          <OutPutSection />
        </div>
      </div>
    </div>
  );
};

export default CreateNewContent;
