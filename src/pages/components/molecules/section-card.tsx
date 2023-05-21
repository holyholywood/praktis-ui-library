import SectionCard from "@/components/SectionCard";
import React, { useContext, useState } from "react";
import PageContentProvider, { pageContent } from "@/components/Common/templates/PageContentProvider";
import { GetServerSideProps } from "next";
import ModalContext from "@/store/ModalStore";
import Modal from "@/components/Modal";
import Button from "@/components/Button";

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch("http://localhost:3000/api/components/molecules/section-card");
  const result = await response.json();
  return {
    props: {
      pageData: result,
    },
  };
};

const editForm = [{ title: "", key: "aapa" }];

const SectionCardComponentPage = ({ pageData }: { pageData: pageContent }) => {
  const { showModal, setShowModal } = useContext(ModalContext);
  const [data, setData] = useState();
  const [openSection, setOpenSection] = useState(true);

  const handleSubmit = () => {};
  return (
    <>
      {pageData.map((item, index) => {
        return <PageContentProvider key={index} content={item.content} type={item.type} />;
      })}
      <CategoryStore />
      <CategoryStore />
      <CategoryStore />
      <CategoryStore />
      <CategoryStore />
      <CategoryStore />
      <CategoryStore />
      <CategoryStore />
    </>
  );
};

const CategoryStore = () => {
  const [openSection, setOpenSection] = useState(true);

  return (
    <SectionCard>
      <SectionCard.Header
        option={{ toggleShow: true }}
        sectionTitle="Basic SectionCard"
        openSection={openSection}
        setOpenSection={setOpenSection}
      >
        <Button>tes</Button>
      </SectionCard.Header>
      <SectionCard.Body openSection={openSection} setOpenSection={setOpenSection}>
        tes
      </SectionCard.Body>
    </SectionCard>
  );
};
export default SectionCardComponentPage;