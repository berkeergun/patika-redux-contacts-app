import React from "react";
import { useParams,Redirect } from "react-router-dom";
import EditForm from "./EditForm";
import {useSelector} from "react-redux"
import {contactSelectors} from "../../redux/contactSlice"

function Edit() {
  const { id } = useParams();
  console.log(id);

  const contact = useSelector((state) => contactSelectors.selectById(state,id))
  console.log(contact);

  if (!contact) {
     return <Redirect to="/" />
  }


  return (
    <div>
      <h1 style={{textDecoration:"underline",color:"#eaf8e6"}}>Edit Contact</h1>
      <EditForm contact={contact} />
    </div>
  );
}

export default Edit;
