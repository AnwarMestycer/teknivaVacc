const db = require('../db_config');

//Creation of child
const CreateChildService = (full_name,birth_date,id_parent ,gender,isActive,isDelete) =>{

    let rqAddChild = `INSERT INTO child(full_name,birth_date,id_parent,gender,isActive,isDelete) 
    VALUES ('${full_name}','${birth_date}','${id_parent}','${gender}','${isActive}','${isDelete}')`;
    
    return new Promise ((resolve, reject)=>{
        db.query(rqAddChild, (err, result)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(result);
            }
        })
    })
}
//Get all child
const getAllChildService = () =>{

    let rqAllChild = `select * from child`;
    
    return new Promise ((resolve, reject)=>{
        db.query(rqAllChild, (err, result)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(result);
            }
        })
    })
}

//Update of child
  const UpdateChildService = (id_child,full_name,birth_date,id_parent,gender,isActive,isDelete) =>{

    let rqUpdatechild = `update child set full_name='${full_name}',birth_date='${birth_date}',id_parent='${id_parent}',gender='${gender}',isActive='${isActive}',isDelete='${isDelete}'
    where id_child=${id_child}`
  
    return new Promise ((resolve, reject)=>{
        db.query(rqUpdatechild, (err, result)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(result);
            }
        })
    })
}

//delete of child
const DeleteChildService = (id_child) =>{
  let rqUpdatechild = `delete from child where id_child='${id_child}'`

  return new Promise ((resolve, reject)=>{
      db.query(rqUpdatechild, (err, result)=>{
          if(err){
              reject(err);
          }
          else{
              resolve(result);
          }
      })
  })
}

 //search  child by id
const SearchChildByIdService = (id_child) =>{
    let rqchild = `select *  from child_vaccin where id_child='${id_child}'`
  
    return new Promise ((resolve, reject)=>{
        db.query(rqchild, (err, result)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(result);
            }
        })
    })
  }
  //search  child by vaccin date
  const SearchChildByDateService = (vaccin_date) =>{
    let rqUpdatechild = `select *  from child_vaccin where vaccin_date ='${vaccin_date}'`
  
    return new Promise ((resolve, reject)=>{
        db.query(rqUpdatechild, (err, result)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(result);
            }
        })
    })
  }
  //search by expected date
  const SearchChildByExDateService = (expected_vaccin_date) =>{
      let rqExDate = `select *  from child_vaccin where expected_vaccin_date ='${expected_vaccin_date}'`
    
      return new Promise ((resolve, reject)=>{
          db.query(rqExDate, (err, result)=>{
              if(err){
                  reject(err);
              }
              else{
                  resolve(result);
              }
          })
      })
    }
    //search by expected date
  const SearchWeeklyService = (vaccin_journey) =>{
      let rqWeekDate = `SELECT v.id_vaccin,v.code_vaccin,v.vaccin_category,v.vaccin_name,v.shots_number,v.observation FROM vaccin v , vaccin_calendar vc , child_vaccin cv , child c , parent p , hospital h 
      WHERE v.code_vaccin = vc.code_vaccin and vc.id_vaccin_calendar = cv.id_vaccin_calendar and cv.id_child = c.id_child and c.id_parent = p.id_parent and p.id_hospital = h.id_hospital and h.vaccin_journey = '${vaccin_journey}'`
      
    
      return new Promise ((resolve, reject)=>{
          db.query(rqWeekDate, (err, result)=>{
              if(err){
                  reject(err);
              }
              else{
                  resolve(result);
              }
          })
      })
    }
//select parent phones
    const getAllParentPhoneService = () =>{

        let rq = `select phone_num_father  from parent`;
        
        return new Promise ((resolve, reject)=>{
            db.query(rq, (err, result)=>{
                if(err){
                    reject(err);
                }
                else{
                    resolve(result.map(x=>x.phone_num_father));
                }
            })
        })
    }
  
 

module.exports={CreateChildService,getAllChildService,UpdateChildService,DeleteChildService,SearchChildByIdService,SearchChildByDateService,SearchChildByExDateService,SearchWeeklyService,getAllParentPhoneService}
