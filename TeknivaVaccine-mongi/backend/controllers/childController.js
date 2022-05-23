//import services
const {
  CreateChildService,
  getAllChildService,
  UpdateChildService,
  DeleteChildService,SearchChildByIdService,SearchChildByDateService,SearchChildByExDateService,SearchWeeklyService,getAllParentPhoneService
} = require("../services/childService");
// Sid api for sending sms
const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
//auth token for api to sending sms
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
//phone number to send sms
const TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER;

const client = require("twilio")(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
//library for sending mail
const nodemailer = require("nodemailer")

//create child controller
const CreateChildController = async (req, res) => {
  const full_name = req.body.full_name;
  const birth_date = req.body.birth_date;
  const id_parent = req.body.id_parent;
  const isActive = req.body.isActive;
  const isDelete = req.body.isDelete;
  const gender = req.body.gender;
////
  res.send(
    await CreateChildService(
      full_name,
      birth_date,
      id_parent,
      gender,
      isActive,
      isDelete
    )
      .then((response) => {
        return `Child ${full_name} added successfully`;
      })
      .catch((err) => {
        return console.log(`Error: ${err}`);
      })
  );
};

//get all child controller
const getAllChildController = async (req, res) => {
  res.send(
    await getAllChildService()
      .then((response) => {
        return response;
      })
      .catch((err) => {
        return console.log(`Error: ${err}`);
      })
  );
};

/** */
//update child controller
const UpdateChildController = (id_child = async (req, res) => {
  const id_child = req.params.id_child;
  const full_name = req.body.full_name;
  const birth_date = req.body.birth_date;
  const id_parent = req.body.id_parent;
  const isActive = req.body.isActive;
  const isDelete = req.body.isDelete;
  const gender = req.body.gender;

  res.send(
    await UpdateChildService(
      id_child,
      full_name,
      birth_date,
      id_parent,
      gender,
      isActive,
      isDelete
    )
      .then((response) => {
        return `Child ${full_name} updated successfully`;
      })
      .catch((err) => {
        return console.log(`Error: ${err}`);
      })
  );
});

//delete child controller
const DeleteChildController = async (req, res) => {
  const id_child = req.params.id_child;

  res.send(
    await DeleteChildService(id_child)
      .then((response) => {
        return `Child ${id_child} deleted successfully`;
      })
      .catch((err) => {
        return console.log(`Error: ${err}`);
      })
  );
};

//Notify parent with sms


const SendSMSToParentcontroller = async (req, res) => {
  client.messages
    .create({
      to: req.body.to,
      from: TWILIO_PHONE_NUMBER,
      body: "Bonjour nous vous informons que la vaccination de votre enfant aura lieu aujourdhui",
    })
    .then(function (message) {
      res.send("Message is sent successfully!");
    });
};



//send email to parent 
//configure gmail account with less security
const SendMailToParentcontroller = (req, res) => {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "mongithabet2@gmail.com",
      pass: process.env.PASS_MAIL,
    },
    secure: true, // upgrades later with STARTTLS -- change this based on the PORT
  });
 
    const { to, subject, text } = req.body;
    const mailData = {
      from: "mongithabet2@gmail.com",
      to: to,
      subject: subject,
      text: text,
      html: "<b>Hey there! </b><br> Bonjour nous vous informons que la vaccination de votre enfant aura lieu aujourdhui <br/>",
    };
    transporter.sendMail(mailData, (error, info) => {
      if (error) {
        return console.log(error);
      }
      res
        .status(200)
        .send({ message: "Mail sent", message_id: info.messageId });
    
  });
};


//Search child by id controller
const SearchChildByIdController = async (req, res)=>{
    const id_child =req.params.id_child
    

    res.send(await SearchChildByIdService(id_child).then(
        child => {

            return {
                child
                }

        }
    )
    .catch(err =>{
        return console.log(`Error: ${err}`)
    }));
}
//Search child by  date vaccination controller
const SearchChildByDateController = async (req, res)=>{
    const vaccin_date =req.body.vaccin_date
    

    res.send(await SearchChildByDateService(vaccin_date).then(
        child => {

            return {
                child
                }

        }
    )
    .catch(err =>{
        return console.log(`Error: ${err}`)
    }));
}
//get child by expected date controller
const SearchChildByExDateController = async (req, res)=>{
    const expected_vaccin_date =req.body.expected_vaccin_date
    

    res.send(await SearchChildByExDateService(expected_vaccin_date).then(
        child => {

            return {
                child
                }

        }
    )
    .catch(err =>{
        return console.log(`Error: ${err}`)
    }));
}
//All weekly vaccination controller
const SearchWeeklyController = async (req, res)=>{
    const vaccin_journey =req.params.vaccin_journey
    

    res.send(await SearchWeeklyService(vaccin_journey).then(
        vaccin_week => {

            return {
                vaccin_week
                }

        }
    )
    .catch(err =>{
        return console.log(`Error: ${err}`)
    }));
}

//list of parent phones controller
const getAllParentPhoneController = async (req, res)=>{
    

    res.send(await getAllParentPhoneService().then(
        phones => {

            return {
                phones

              
                }

        }
    )
    .catch(err =>{
        return console.log(`Error: ${err}`)
    }));
}




  
module.exports = {
  CreateChildController,
  getAllChildController,
  UpdateChildController,
  DeleteChildController,
  SendSMSToParentcontroller,
  SendMailToParentcontroller,SearchChildByIdController,SearchChildByDateController,SearchChildByExDateController,SearchWeeklyController,getAllParentPhoneController
};

