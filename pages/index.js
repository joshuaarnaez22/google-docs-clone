import Head from "next/head";
import Header from "../components/Header";
import Icon from "@material-tailwind/react/Icon";
import Button from "@material-tailwind/react/Button";
import Image from "next/image";
import Login from "../components/Login";
import { getSession, useSession } from "next-auth/client";
import ModalBody from "@material-tailwind/react/ModalBody"
import ModalFooter from "@material-tailwind/react/ModalFooter"
import Modal from "@material-tailwind/react/Modal"
import { useState } from "react";
import db from "../firebase"
import firebase from 'firebase'
import { useCollectionOnce } from 'react-firebase-hooks/firestore';
import DocumentRow from "../components/DocumentRow"
export default function Home() {
  const [session] = useSession();
  if(!session) return <Login/>

  const [showModal, setShowModal] = useState(false)
  const [input, setInput] = useState("")
  const [snapshot] = useCollectionOnce(db.collection('userDocs').doc(session.user.email).collection("docs").orderBy("timestamp", "desc"));
    const createDocument = () => {
        if(!input)return;
        db.collection('userDocs').doc(session.user.email).collection('docs').add({
            filename: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
    }
    const modal = (
        <Modal 
        size="sm"
        active={showModal}
        toggler={()=>setShowModal(false)}
        >
            <ModalBody>
                <input 
                className="outline-none"
                 type="text"
                 value={input} 
                 onChange={e => setInput(e.target.value)}
                 placeholder="Enter name of document"
                 onKeyDown={e => e.key === "Enter" && createDocument()}
                 />
            </ModalBody>
            <ModalFooter>
            <Button
                  color="blue"
                  ripple="dark"
                  buttonType="link"
                  onClick={()=>setShowModal(false)}
                >
                    Cancel
                </Button>

                <Button
                  color="blue"
                  ripple="dark"
                  onClick={()=>createDocument()}
                >
                    Create
                </Button>
            </ModalFooter>
        </Modal>
    )

  return (
     
        <div className="">
          <Head>
            <title>Google Docs Clone</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Header />
          {modal}
          <section className="bg-gray-100 pb-10 px-10">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-between pt-6">
                <h2 className="text-gray-700 text-lg">Start a new document</h2>
                <Button
                  color="white"
                  iconOnly={true}
                  ripple="dark"
                  className="border-0 "
                >
                  <Icon color="gray" name="more_vert" size="3xl" />
                </Button>
              </div>
              <div>
                <div onClick={() => setShowModal(!showModal)} className="relative h-52 w-40 border-2 cursor-pointer hover:border-blue-700">
                  <Image src="https://links.papareact.com/pju" layout="fill" />
                </div>
                <p className="text-sm font-semibold mt-2 ml-2 text-gray-600">
                  Blank
                </p>
              </div>
            </div>
          </section>

          <section className="px-10">
            <div className="max-w-3xl mx-auto py-5">
              <div className="flex items-center justify-between pb-5 text-gray-700">
                <h2 className="font-medium flex-grow">My Documents</h2>
                <p className="mr-12">Date Created</p>
                <Icon color="gray" name="folder" size="3xl" />
              </div>
            </div>
            {snapshot?.docs.map(doc => (
                <DocumentRow
                key={doc.id}
                id={doc.id}
                filename={doc.data().filename}
                date={doc.data().timestamp}
                />
            ))}
          </section>
        </div>
  );
}


export async function getServerSideProps(context) {
    return {
      props: {
          session : await getSession(context), 
      }
    }
  }