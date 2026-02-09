const Contact = require("../model/Contact")
const AddContact = async (req, res) => {
  try {
    return res.json({
      message: "lets create contact",
    });
  } catch (err) {
    return res.json({
      message: "Error while create contact",
      status: false,
    });
  }
};


const GetContact = async (req, res) => {
  try {

    const contact = await Contact.find()

    return res.json({
      message: "Contact get success",
      contact: contact,
      status:true
    });
  
  }
  catch (err) {
    console.log(err);


    return res.json({
      message: "Error while Fetch",
      status: false,
    });
  }
}


const UpdateContact = async (req, res) => {
  try {
     
    const updatedConcat = await Contact.findOneAndUpdate(req.params.id,req.body)
    return res.json({
      message: "updated success",
      status: true,
      updatedConcat
    });
  } catch (err) {
    return res.json({
      message: "Error while update",
      status: false,
    });
  }
  
}

  module.exports = {
    AddContact,
    GetContact,
    UpdateContact,
  };