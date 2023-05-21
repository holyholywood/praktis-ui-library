import Button from "@/components/Button";
import Heading from "@/components/Common/atoms/Heading";
import PageContentProvider, { pageContent } from "@/components/Common/templates/PageContentProvider";
import Modal from "@/components/Modal";
import useModal from "@/components/Modal/useModal";
import ModalContext from "@/store/ModalStore";
import { GetServerSideProps } from "next";
import React, { useContext, useState } from "react";

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch("http://localhost:3000/api/components/organisms/modal");
  const result = await response.json();
  return {
    props: {
      pageData: result,
    },
  };
};

const ModalPage = ({ pageData }: { pageData: pageContent }) => {
  // const { showModal, setShowModal } = useContext(ModalContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  return (
    <>
      {pageData.map((item, index) => {
        return <PageContentProvider key={index} content={item.content} type={item.type} />;
      })}
      <div className="my-8">
        <Heading type="subtitle">Basic Modal 1 </Heading>
        <Button onClick={() => setIsOpen(true)}>Show Basic Modal</Button>
        <Modal isOpen={isOpen} onOpen={setIsOpen} id="modal-1" title="Example Modal 1">
          <Modal.Body>This is Modal Body</Modal.Body>
          <Modal.Footer>This is Modal Footer</Modal.Footer>
        </Modal>
      </div>
      <div className="my-8">
        <Heading type="subtitle">Basic Modal</Heading>
        <Button onClick={() => setIsOpen2(true)}>Show Basic Modal</Button>

        <Modal isOpen={isOpen2} onOpen={setIsOpen2} id="modal-2" title="Example Modal 2">
          <Modal.Body>This is Modal Body 2</Modal.Body>
          <Modal.Footer>
            <Button>tes</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default ModalPage;
